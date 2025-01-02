import { BookOpen } from "lucide-react";
import { ActionCard } from "../../components/ActionCard/ActionCard";
import CreateFormBook from "../../components/FormColletionDialog/FormColletionDialog";
import { CollectionCard } from "./CollectionCard/CollectionCard";
import { Collection } from "../../entities/Collection.entity";

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
    <div className="flex flex-col w-full gap-3">
      <CreateFormBook
        onSubmit={onSubmit}
        onCloseModal={onOpenModal}
        isOpenModal={isOpenModal}
      />

      {/* Cabeçalho */}
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

      <div className="flex w-full h-full overflow-y-auto  styled-scroll">
        <div className="flex w-full gap-10 flex-wrap justify-start items-start">
          <ActionCard
            onClick={onOpenModal}
            title="Adicionar uma nova coleção"
          />

          {collection.map((col) => (
            <CollectionCard
              isLoading={isLoadingCollection}
              key={col.name}
              name={col.name}
              bookCovers={col.books.map((book) => book.cover_url)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
