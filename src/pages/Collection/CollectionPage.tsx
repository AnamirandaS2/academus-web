import { useState } from "react";
import { CollectionContainer } from "./index";

export function CollectionPage() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => setIsOpenModal(!isOpenModal);

  return (
    <CollectionContainer
      isOpenModal={isOpenModal}
      onOpenModal={handleOpenModal}
    />
  );
}
