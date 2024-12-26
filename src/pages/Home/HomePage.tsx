import { useQuery } from "@tanstack/react-query";
import { HomeContainer } from "./";
import { phraseService } from "../../useCases/phraseService";

export function HomePage() {
  const { data: phrase, isLoading: isLoadingPhrase } = useQuery({
    queryKey: ["phrases/random"],
    queryFn: async () => await phraseService.random(),
  });
  return (
    <HomeContainer
      isLoadingComment={isLoadingPhrase}
      isLoadingPhrase={isLoadingPhrase}
      phrase={phrase}
    />
  );
}
