import { useState } from "react";
import { LibraryContainer } from "./";

export function LibraryPage() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => setIsOpenModal(!isOpenModal);

  return (
    <LibraryContainer isOpenModal={isOpenModal} onOpenModal={handleOpenModal} />
  );
}
