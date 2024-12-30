import * as Dialog from "@radix-ui/react-dialog";
import { TypeModalProps } from "./index";

export function Modal({ isOpen, children, onClose }: TypeModalProps) {
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-85 animate-overlayShow transition-opacity duration-150"
        />
        <Dialog.Content className="w-full outline-none border-none select-none	 flex justify-center items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
