"use client";

import dynamic from "next/dynamic";
import { Dispatch, SetStateAction, useEffect, useMemo, useRef } from "react";

import { storage } from "@/lib/firebase";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

import { usePreviousState } from "@/hooks/usePreviousState";

import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import { type ReactQuillProps } from "react-quill";
import type ReactQuill from "react-quill";

import "./index.css";

interface RQ extends ReactQuillProps {
  forwardedRef?: React.Ref<ReactQuill>;
  value?: string;
  onChange?: Dispatch<SetStateAction<string>>;
}

const DynamicReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill");
    const Quill = ({ forwardedRef, ...props }: RQ) => (
      <RQ ref={forwardedRef} {...props} />
    );
    return Quill;
  },
  { ssr: false }
);

export function Editor({ value, onChange, ...props }: RQ) {
  const quillRef = useRef<ReactQuill>(null);

  const previousHtml = usePreviousState<string>(value!);

  useEffect(() => {
    const imageUrl = Array.from(
      previousHtml.matchAll(/<img[^>]+src=["']([^'">]+)['"]/gi)
    )
      .map((arr) => arr[1])
      .filter((item) => !item.includes("<img src"))
      .filter(
        (item) =>
          !Array.from(value!.matchAll(/<img[^>]+src=["']([^'">]+)['"]/gi))
            .map((arr) => arr[1])
            .filter((item) => !item.includes("<img src"))
            .includes(item)
      )[0];
    if (imageUrl) {
      const storageRef = ref(storage, imageUrl);
      deleteObject(storageRef);
    }
  }, [value, previousHtml]);

  const imageHandler = () => {
    const input = document.createElement("input");

    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      const file = input && input.files && input.files[0];

      try {
        const quillObj = quillRef.current?.getEditor();

        const storageRef = ref(storage, `image/${Date.now()}`);

        const uploadSnapshot = await uploadBytes(storageRef, file!);

        const imageUrl = await getDownloadURL(uploadSnapshot.ref);

        const range = quillObj?.getSelection();

        quillObj?.insertEmbed(range!.index, "image", imageUrl);

        //   URL 삽입 후 커서를 이미지 뒷 칸으로 이동
        quillObj?.setSelection(range?.index! + 1, 0);
      } catch (err) {
        throw err;
      }
    };
  };

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: "1" }, { header: "2" }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image", "video"],
        ],
        handlers: { image: imageHandler },
      },
      history: {
        delay: 500,
        maxStack: 100,
        userOnly: true,
      },
      clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
      },
    }),
    []
  );

  const formats = useMemo(
    () => [
      "header",
      "font",
      "size",
      "bold",
      "italic",
      "underline",
      "strike",
      "blockquote",
      "list",
      "bullet",
      "indent",
      "link",
      "image",
      "video",
    ],
    []
  );

  return (
    <DynamicReactQuill
      className="editor"
      forwardedRef={quillRef}
      modules={modules}
      formats={formats}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}
