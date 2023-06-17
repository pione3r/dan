import dynamic from "next/dynamic";

import type { RQ } from "./index.types";

import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.bubble.css";
import "./index.css";

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

export function WrappedReactQuill({ forwardedRef, ...rest }: RQ) {
  return <DynamicReactQuill forwardedRef={forwardedRef} {...rest} />;
}
