import type { Comment } from "@/types/general";

export interface CommentContainerProps {
  feedId: string;
  comments: Comment[];
}
