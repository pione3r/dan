import { ButtonHTMLAttributes, ReactNode } from "react";

export interface FormButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
