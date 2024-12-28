import { BookOpen } from "lucide-react";
import { ActionCard } from "../../components/ActionCard/ActionCard";
import CreateFormBook from "../../components/CreateFormBook/CreateFormBook";

export type LibraryContainerProps = {
  onOpenModal: () => void;
  isOpenModal: boolean;
};

export function LibraryContainer({
  onOpenModal,
  isOpenModal,
}: LibraryContainerProps) {
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
      <div className="flex h-full">
        <div className="flex h-full flex-wrap">
          <ActionCard
            onClick={onOpenModal}
            title="Adicionar uma nova coleção"
          />
        </div>
      </div>
    </div>
  );
}
