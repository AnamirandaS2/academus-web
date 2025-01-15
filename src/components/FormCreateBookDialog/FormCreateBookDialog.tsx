import { PlusCircle, X } from "lucide-react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Modal } from "../Modal/Modal";
import { InputFile } from "../Input/InputFile";
import { BookFormData } from "../../useCases/bookService/IBookService";
import { useForm } from "react-hook-form";
import { Select } from "../Select/Select";
import { Language } from "../../entities/Language.entity";

export type FormCreateBookDialogProps = {
  isOpenModal: boolean;
  onCloseModal: () => void;
  onSubmit: (data: BookFormData) => void;
  languages?: Language[];
};

export function FormCreateBookDialog({
  isOpenModal,
  onCloseModal,
  onSubmit,
  languages,
}: FormCreateBookDialogProps) {
  const { register, handleSubmit } = useForm<BookFormData>();

  return (
    <Modal isOpen={isOpenModal} onClose={onCloseModal}>
      <div className="max-w-[70%] w-full h-full flex flex-col items-start justify-start px-5 py-5 gap-1 bg-[#fff] rounded-lg">
        <div className="flex w-full hover:text-blue-700 items-center justify-between">
          <h1 className="text-blue-700 font-bold text-2xl">
            Cadastro de livro
          </h1>
          <X onClick={onCloseModal} />
        </div>
        <p className="text-blue-700 font-medium">Preencha as informações</p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-row gap-3 w-full h-full"
        >
          <div className="flex w-full h-full gap-2 basis-1/2 items-end justify-between">
            <div className="flex flex-col gap-2 w-full h-full">
              <div className="flex flex-col justify-start gap-1">
                <label>Título*</label>
                <Input borderColor="blue" {...register("title")} />
              </div>
              <div className="flex gap-3">
                <div className="flex flex-col w-full justify-start gap-1">
                  <label>Volume</label>
                  <Input borderColor="blue" {...register("volume")} />
                </div>
                <div className="flex flex-col w-full justify-start gap-1">
                  <label>ISBN*</label>
                  <Input borderColor="blue" {...register("isbn")} />
                </div>
              </div>
              <div className="flex flex-col justify-start gap-1">
                <label>Edição*</label>
                <Input borderColor="blue" {...register("edition")} />
              </div>
              <div className="flex flex-col justify-start gap-1">
                <label>Editora*</label>
                <Input borderColor="blue" {...register("publisher")} />
              </div>
              <div className="flex gap-3">
                <div className="flex flex-col w-full justify-start gap-1">
                  <label>Ano*</label>
                  <Input
                    borderColor="blue"
                    type="number"
                    {...register("year")}
                  />
                </div>
                <div className="flex flex-col w-full justify-start gap-1">
                  <label>N° de páginas*</label>
                  <Input
                    borderColor="blue"
                    type="number"
                    {...register("numberOfPages")}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full justify-start gap-1">
                <label>Idioma</label>
                <Select
                  getLabel={(item: Language) => item.name}
                  getValue={(item: Language) => item.uuid}
                  isLoading={false}
                  options={languages}
                  {...register("languageUuid")}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full h-full basis-1/2 gap-16">
            <div className="flex flex-col gap-3 h-full">
              <div className="flex flex-col gap-1 h-full">
                <label htmlFor="">Sinopse*</label>
                <textarea
                  {...register("synopsis")}
                  className="w-full border-blue-700 h-full min-h-[120px] px-2 py-2 border rounded-xl text-black font-poppins text-base placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Capa do livro*</label>
                <InputFile {...register("bookCover")} />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="">Arquivo do livro*</label>
                <InputFile {...register("bookFile")} />
              </div>
            </div>
            <Button
              type="submit"
              size="big"
              className="flex gap-2 items-center justify-center text-sm"
            >
              <PlusCircle size={14} /> Cadastrar livro
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
