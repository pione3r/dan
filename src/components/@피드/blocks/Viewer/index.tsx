import { WrappedReactQuill } from "../../atoms/WrappedReactQuill";

import type { RQ } from "../../atoms/WrappedReactQuill/index.types";

export function Viewer({ value }: RQ) {
  return (
    <WrappedReactQuill
      className="card-viewer"
      theme="bubble"
      value={value}
      readOnly
    />
  );
}
