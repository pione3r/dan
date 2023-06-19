"use client";

import { useEffect, useMemo, useRef } from "react";

import { storage } from "@/lib/firebase";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";

import { usePreviousState } from "@/hooks/usePreviousState";

import type ReactQuill from "react-quill";
import type { RQ } from "@/components/@common/atoms/WrappedReactQuill/index.types";

import { WrappedReactQuill } from "@/components/@common/atoms/WrappedReactQuill";

export function Editor({ value, onChange }: RQ) {
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

  const imageHandler = useMemo(
    () => () => {
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
    },
    []
  );

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
    [imageHandler]
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
    <WrappedReactQuill
      className="editor"
      theme="snow"
      forwardedRef={quillRef}
      modules={modules}
      formats={formats}
      value={value}
      onChange={onChange}
    />
  );
}
