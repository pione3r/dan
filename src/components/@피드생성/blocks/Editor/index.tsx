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

import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";

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

  useEffect(() => {
    quillRef.current?.editor?.root.setAttribute("spellcheck", "false");
  }, []);

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
          [{ font: [] }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ script: "sub" }, { script: "super" }],
          ["blockquote", "code-block", "link"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ indent: "-1" }, { indent: "+1" }, { align: [] }],
          ["link", "image", "video"],
          ["clean"],
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
      syntax: {
        highlight: (text: any) => hljs.highlightAuto(text).value,
      },
    }),
    [imageHandler]
  );

  const formats = useMemo(
    () => [
      "font",
      "header",
      "bold",
      "italic",
      "underline",
      "strike",
      "color",
      "background",
      "script",
      "blockquote",
      "code-block",
      "link",
      "list",
      "bullet",
      "align",
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
      placeholder="내용을 입력해주세요..."
    />
  );
}
