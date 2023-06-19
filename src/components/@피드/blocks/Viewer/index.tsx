import { WrappedReactQuill } from "@/components/@common/atoms/WrappedReactQuill";

import type { RQ } from "@/components/@common/atoms/WrappedReactQuill/index.types";

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
