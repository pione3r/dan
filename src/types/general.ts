export type Feed = {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  author: string;
  comments: Comment[];
  likes: number;
  isLike: boolean;
};

export type Comment = {
  id: string;
  content: string;
  createdAt: Date;
  author: string;
};
