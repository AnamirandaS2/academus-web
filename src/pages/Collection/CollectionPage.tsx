import { useState } from "react";
import { CollectionContainer } from "./index";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { collectionService } from "../../useCases/collectionService";
import { BookFormData } from "../../useCases/bookService/IBookService";
import { bookService } from "../../useCases/bookService";
import { toast } from "react-toastify";
import { languageService } from "../../useCases/languageService";

export function CollectionPage() {
  const queryClient = useQueryClient();

  const { collectionId } = useParams() as { collectionId: string };

  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleOpenModal = () => setIsOpenModal(!isOpenModal);

  const { data: collection } = useQuery({
    queryKey: [`collection`, collectionId],
    queryFn: async () => await collectionService.show(collectionId),
    enabled: !!collectionId,
  });

  const { data: languages } = useQuery({
    queryKey: ["languages"],
    queryFn: async () => await languageService.getAll(),
  });

  const { mutate: syncBookMutate } = useMutation({
    mutationFn: async (data: { collectionId: string; bookId: string }) =>
      await collectionService.syncBook(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["collection"],
      });
      toast.success("Livro sincronizado com sucesso!", {
        position: "top-right",
        autoClose: 5000,
      });
    },
  });

  const { mutate: createBookMutate } = useMutation({
    mutationFn: async (data: BookFormData) => await bookService.create(data),
    onSuccess: (book) => {
      syncBookMutate({ bookId: book.uuid, collectionId: collectionId });
      toast.success("Livro cadastrado com sucesso!", {
        position: "top-right",
        autoClose: 5000,
      });
    },
  });

  return (
    <div className="w-full h-full overflow-hidden">
      <CollectionContainer
        languages={languages}
        data={collection}
        isOpenModal={isOpenModal}
        onOpenModal={handleOpenModal}
        createBookMutate={createBookMutate}
      />
    </div>
  );
}
