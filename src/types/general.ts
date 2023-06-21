export type Feed = {
  id: string;
  title: string;
  body: string;
  createdAt: Date;
  author: string;
  comments: Comment[];
};

export type Comment = {
  id: string;
  content: string;
  createdAt: Date;
  author: string;
};
