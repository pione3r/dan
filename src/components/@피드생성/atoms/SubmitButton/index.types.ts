import { ButtonHTMLAttributes, ReactNode } from "react";

export interface SubmitButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
