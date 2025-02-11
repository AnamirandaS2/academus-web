import { ArrowLeft, LoaderCircle } from "lucide-react";
import { FormCreateBookDialog } from "../../components/FormCreateBookDialog/FormCreateBookDialog";
import { Link } from "react-router-dom";
import { Collection } from "../../entities/Collection.entity";
import { ActionCard } from "../../components/ActionCard/ActionCard";
import { BookFormData } from "../../useCases/bookService/IBookService";
import { Language } from "../../entities/Language.entity";
import { BookCard } from "./BookCard/BookCard";

export type CollectionContainerProps = {
  onOpenModal: () => void;
  isOpenModal: boolean;
  data?: Collection;
  createBookMutate: (data: BookFormData) => void;
  languages?: Language[];
};

export function CollectionContainer({
  isOpenModal,
  onOpenModal,
  data,
  createBookMutate,
  languages,
}: CollectionContainerProps) {
  return (
    <div className="flex h-screen w-full gap-3 justify-center ">
      {!data ? (
        <div className="w-full h-full flex items-center justify-center">
          <LoaderCircle className="animate-spin text-blue-900" size={30} />
        </div>
      ) : (
        <div className="flex flex-col w-full gap-3">
          {isOpenModal && (
            <FormCreateBookDialog
              languages={languages}
              onSubmit={createBookMutate}
              isOpenModal={isOpenModal}
              onCloseModal={onOpenModal}
            />
          )}
          <Link to="/biblioteca" className="flex  font-medium text-base">
            <ArrowLeft /> Voltar
          </Link>
          <div className="flex gap-3 items-center ">
            <div className="flex gap-2 items-center">
              <h1 className="text-blue-700 font-black text-3xl uppercase">
                {data.name}
              </h1>
            </div>
            <div className="h-4 w-7 rounded-3xl bg-blue-700 py-3 px-5 text-sm text-[#fff] flex items-center justify-center">
              {data.books.length}
            </div>
          </div>
          <div className="flex w-full h-full  ">
            <div className="flex flex-wrap h-full w-full gap-10">
              <ActionCard onClick={onOpenModal} title="Adicionar um livro" />
              {data.books.map((book) => (
                <BookCard data={book} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
