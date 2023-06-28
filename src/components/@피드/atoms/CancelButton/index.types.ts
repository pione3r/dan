import { ButtonHTMLAttributes, ReactNode } from "react";

export interface CancelButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}
