import { useQuery } from "@tanstack/react-query";
import { BookContainer } from "./";
import { BookContainerProps } from "./BookContainer";
import { bookService } from "../../useCases/bookService";
import { useParams } from "react-router-dom";

export type BookPageProps = {};

export function BookPage() {
  const { bookId } = useParams() as { bookId: string };

  const { data: bookdetails } = useQuery({
    queryKey: [`books`, bookId],
    queryFn: async () => await bookService.show(bookId),
  });

  console.log(bookdetails);

  return (
    <div>
      <BookContainer data={bookdetails} />
    </div>
  );
}
