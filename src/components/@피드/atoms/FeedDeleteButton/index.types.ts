import { ButtonHTMLAttributes, ReactNode } from "react";

export interface FeedDeleteButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
