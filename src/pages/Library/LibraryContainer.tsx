import { BookOpen } from "lucide-react";
import { ActionCard } from "../../components/ActionCard/ActionCard";
import CreateFormBook from "../../components/FormColletionDialog/FormColletionDialog";
import { CollectionCard } from "./CollectionCard/CollectionCard";

export type LibraryContainerProps = {
  onOpenModal: () => void;
  isOpenModal: boolean;
};

export function LibraryContainer({
  onOpenModal,
  isOpenModal,
}: LibraryContainerProps) {
  const bookCovers = [
    "https://m.media-amazon.com/images/I/71Vkg7GfPFL._AC_UF1000,1000_QL80_.jpg",
    // "https://m.media-amazon.com/images/I/71JpZHEGvWL._UF894,1000_QL80_.jpg",
    "https://m.media-amazon.com/images/I/61aIS4n2jZL._AC_UF1000,1000_QL80_.jpg",
  ];

  return (
    <div className="flex flex-col w-full gap-3">
      <CreateFormBook onCloseModal={onOpenModal} isOpenModal={isOpenModal} />
      <div className="flex   gap-3 items-center ">
        <div className="flex gap-2 items-center">
          <div className="h-10 w-10 rounded-full bg-blue-700 flex items-center justify-center">
            <BookOpen color="#fff" />
          </div>
          <h1 className="text-blue-700 font-black text-3xl">BIBLIOTECA</h1>
        </div>
        <div className="h-4 w-7 rounded-3xl bg-blue-700 py-3 px-5 text-sm text-[#fff] flex items-center justify-center">
          3
        </div>
      </div>
      <div className="flex w-full h-full">
        <div className="flex w-full h-full gap-10 flex-wrap">
          <ActionCard
            onClick={onOpenModal}
            title="Adicionar uma nova coleção"
          />
          <CollectionCard name="Todos" bookCovers={bookCovers} />
          <CollectionCard
            name="Ciência da computação"
            bookCovers={bookCovers}
          />
          <CollectionCard name="Tecnologia" bookCovers={bookCovers} />
          <CollectionCard
            name="bakjbjdkjfakdbkjskjdlshkjfdsfsd"
            bookCovers={bookCovers}
          />
        </div>
      </div>
    </div>
  );
}
