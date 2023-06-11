import dynamic from "next/dynamic";
import { Dispatch, SetStateAction } from "react";

import { type ReactQuillProps } from "react-quill";
import type ReactQuill from "react-quill";

import "react-quill/dist/quill.bubble.css";

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

export function EditorViewer({ value }: { value: string }) {
  return <DynamicReactQuill theme="bubble" value={value} readOnly />;
}
