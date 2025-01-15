import { ReactNode } from "react";

export type TypeModalProps = {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void
};
