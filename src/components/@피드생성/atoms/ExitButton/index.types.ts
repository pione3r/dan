import { ButtonHTMLAttributes, ReactNode } from "react";

export interface ExitButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
