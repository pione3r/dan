import { WrappedReactQuill } from "@/components/@common/atoms/WrappedReactQuill";

import type { RQ } from "@/components/@common/atoms/WrappedReactQuill/index.types";

export function FeedViewer({ value }: RQ) {
  return (
    <WrappedReactQuill
      className="feed-viewer"
      theme="bubble"
      value={value}
      readOnly
    />
  );
}
