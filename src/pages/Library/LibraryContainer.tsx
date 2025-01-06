import { BookOpen } from "lucide-react";
import { ActionCard } from "../../components/ActionCard/ActionCard";
import CreateFormBook from "../../components/FormColletionDialog/FormColletionDialog";
import { CollectionCard } from "./CollectionCard/CollectionCard";
import { Collection } from "../../entities/Collection.entity";
import Skeleton from "../../components/Skeleton/Skeleton";

export type LibraryContainerProps = {
  onOpenModal: () => void;
  isOpenModal: boolean;
  onSubmit: (name: string) => void;
  collection: Collection[];
  isLoadingCollection: boolean;
};

export function LibraryContainer({
  onOpenModal,
  isOpenModal,
  onSubmit,
  collection,
  isLoadingCollection,
}: LibraryContainerProps) {
  return (
    <div className="flex flex-col w-full h-full gap-5">
      <CreateFormBook
        onSubmit={onSubmit}
        onCloseModal={onOpenModal}
        isOpenModal={isOpenModal}
      />
      <div className="flex gap-3 items-center">
        <div className="flex gap-2 items-center">
          <div className="h-10 w-10 rounded-full bg-blue-700 flex items-center justify-center">
            <BookOpen color="#fff" />
          </div>
          <h1 className="text-blue-700 font-black text-3xl">BIBLIOTECA</h1>
        </div>
        <div className="h-4 w-7 rounded-3xl bg-blue-700 py-3 px-5 text-sm text-[#fff] flex items-center justify-center">
          {collection.length}
        </div>
      </div>

      <div className="flex w-full max-h-[75vh] h-full overflow-auto styled-scroll  gap-10 flex-wrap justify-start items-start ">
        <ActionCard onClick={onOpenModal} title="Adicionar uma nova coleção" />

        {isLoadingCollection
          ? Array.from({ length: collection.length || 5 }).map((_, index) => (
              <Skeleton
                key={index}
                className="w-[140px] h-[220px] rounded-md"
              />
            ))
          : collection.map((col) => (
              <CollectionCard
                data={col}
                isLoading={isLoadingCollection}
                key={col.uuid}
                bookCovers={col.books.map((book) => book.bookCoverUrl)}
              />
            ))}
      </div>
    </div>
  );
}
