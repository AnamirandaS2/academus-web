import { ArrowLeft, BookOpen } from "lucide-react";
import { FormCreateBookDialog } from "../../components/FormCreateBookDialog/FormCreateBookDialog";
import { ActionCard } from "../../components/ActionCard/ActionCard";
import { CollectionCard } from "../Library/CollectionCard/CollectionCard";
import { Link } from "react-router-dom";

export type CollectionContainerProps = {
  onOpenModal: () => void;
  isOpenModal: boolean;
};

export function CollectionContainer({
  isOpenModal,
  onOpenModal,
}: CollectionContainerProps) {
  return (
    <div className="flex flex-col w-full gap-3">
      <FormCreateBookDialog
        isOpenModal={isOpenModal}
        onCloseModal={onOpenModal}
      />
      <Link to="/biblioteca" className="flex font-medium text-base">
        <ArrowLeft /> Voltar
      </Link>
      <div className="flex   gap-3 items-center ">
        <div className="flex gap-2 items-center">
          <h1 className="text-blue-700 font-black text-3xl">NOME DA COLEÇÃO</h1>
        </div>
        <div className="h-4 w-7 rounded-3xl bg-blue-700 py-3 px-5 text-sm text-[#fff] flex items-center justify-center">
          6
        </div>
      </div>
      <div className="flex  h-full ">
        <div className="flex h-full flex-wrap gap-4"></div>
      </div>
    </div>
  );
}
