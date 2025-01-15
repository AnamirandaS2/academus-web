import { PlusCircle } from "lucide-react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Modal } from "../Modal/Modal";
import { useForm } from "react-hook-form";

export type FormColletionDialogProps = {
  isOpenModal: boolean;
  onCloseModal: () => void;
  onSubmit: (name: string) => void;
};

export default function FormColletionDialog({
  isOpenModal,
  onSubmit,
  onCloseModal,
}: FormColletionDialogProps) {
  const { register, handleSubmit, reset } = useForm<{ name: string }>();

  const handleFormSubmit = (data: { name: string }) => {
    onSubmit(data.name);
    onCloseModal();
    reset();
  };

  return (
    <Modal onClose={onCloseModal} isOpen={isOpenModal}>
      <div className="max-w-[30%] w-full h-full flex flex-col items-start justify-start px-5 py-5 gap-1 bg-[#fff] rounded-lg">
        <div className="flex flex-col items-start justify-start">
          <h1 className="text-blue-700 font-bold text-2xl">
            Cadastro de coleção
          </h1>
        </div>
        <p className="text-blue-700 font-normal">
          Informe o nome da sua nova coleção
        </p>
        <form
          className="flex flex-col gap-3 w-full"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div className="flex w-full gap-2 items-end justify-between">
            <Input {...register("name")} borderColor="blue" />
          </div>
          <Button
            type="submit"
            size="small"
            className="flex gap-2 items-center justify-center py-5 text-sm"
          >
            <PlusCircle size={14} /> Adicionar
          </Button>
        </form>
      </div>
    </Modal>
  );
}
