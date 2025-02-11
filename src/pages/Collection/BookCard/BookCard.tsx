import { Book } from "../../../entities/Book.entity";
import { Link } from "react-router-dom";

export type BookCardProps = {
  data: Book;
};

export function BookCard({ data }: BookCardProps) {
  const bookCover = data.bookCoverUrl;

  return (
    <Link to={`livro/${data.uuid}`}>
      <div className="flex flex-col gap-1 items-start max-w-[160px] w-full max-h-[220px] min-h-[220px] h-full hover:scale-95 hover:ease-in-out hover:duration-300 cursor-pointer">
        <img
          src={bookCover}
          alt="Capa do livro"
          className="object-cover w-full h-full rounded-md"
        />
        <div className="flex flex-col items-start">
          <p
            className="uppercase self-start text-blue-900 max-w-[160px] text-sm font-semibold truncate"
            style={{
              fontSize: "clamp(0.8rem, 0.8vw, 1rem)",
              whiteSpace: "nowrap",
            }}
          >
            {data.title}
          </p>
          <p
            className="text-black uppercase max-w-[160px] self-start text-xs truncate"
            style={{
              fontSize: "clamp(0.8rem, 0.8vw, 1rem)",
              whiteSpace: "nowrap",
            }}
          >
            {data.publisher}
          </p>
        </div>
      </div>
    </Link>
  );
}
