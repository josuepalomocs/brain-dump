import { ReactNode } from "react";

export interface Card {
  title?: string;
  children?: ReactNode;
}

export interface Note {
  title?: string;
  text?: string;
}
