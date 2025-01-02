import { useState } from "react";
import { LibraryContainer } from "./";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { collectionService } from "../../useCases/collectionService";
import { toast } from "react-toastify";

export function LibraryPage() {
  const queryClient = useQueryClient();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const { data: collection = [], isLoading: isLoadingCollection } = useQuery({
    queryKey: ["collections"],
    queryFn: async () => await collectionService.list(),
  });

  const { mutate: onSubmit } = useMutation({
    mutationFn: async (name: string) => await collectionService.create(name),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["collections"],
      });
      toast.success("Coleção cadastrada com sucesso!", {
        position: "top-right",
        autoClose: 5000,
      });
    },
  });

  const handleOpenModal = () => setIsOpenModal(!isOpenModal);

  console.log("isLoadingCollection:", isLoadingCollection);
  return (
    <LibraryContainer
      isLoadingCollection={isLoadingCollection}
      collection={collection}
      onSubmit={onSubmit}
      isOpenModal={isOpenModal}
      onOpenModal={handleOpenModal}
    />
  );
}
