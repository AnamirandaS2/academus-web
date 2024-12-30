import { PlusCircle } from "lucide-react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Modal } from "../Modal/Modal";

export type FormCreateBookDialogProps = {
  isOpenModal: boolean;
  onCloseModal: () => void;
};

export function FormCreateBookDialog({
  isOpenModal,
  onCloseModal,
}: FormCreateBookDialogProps) {
  return (
    <Modal isOpen={isOpenModal} onClose={onCloseModal}>
      <div className="max-w-[80%] w-full h-full flex flex-col items-start justify-start px-5 py-5  gap-1 bg-[#fff] rounded-lg">
        <div className="flex flex-col items-start justify-start ">
          <h1 className="text-blue-700 font-bold text-2xl">
            Cadastro de livro
          </h1>
        </div>
        <p className="text-blue-700 font-normal">Preencha as informações</p>
        <form className="flex flex-col gap-3 w-full">
          <div className="flex w-full gap-2 basis-1/2 items-end justify-between">
            <div className="flex flex-col justify-start gap-1">
              <label>Título*</label>
              <Input borderColor="blue" />
            </div>
            <div className="flex gap-1">
              <div className="flex flex-col basis-1/2 justify-start gap-1">
                <label>Volume</label>
                <Input borderColor="blue" />
              </div>
              <div className="flex flex-col basis-1/2 justify-start gap-1">
                <label>ISBN*</label>
                <Input borderColor="blue" />
              </div>
            </div>
            <div className="flex flex-col justify-start gap-1">
              <label>Edição*</label>
              <Input borderColor="blue" />
            </div>
            <div className="flex flex-col justify-start gap-1">
              <label>Título*</label>
              <Input borderColor="blue" />
            </div>
          </div>
          <Button
            type="submit"
            size="small"
            className="flex gap-2 items-center justify-center py-1 text-sm"
          >
            <PlusCircle size={14} /> Cadastrar livro
          </Button>
        </form>
      </div>
    </Modal>
  );
}
