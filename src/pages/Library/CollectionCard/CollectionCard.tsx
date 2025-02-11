import { Link } from "react-router-dom";
import EmptyPng from "../../../assets/empty-300x240.jpg";
import { Collection } from "../../../entities/Collection.entity";

type CollectionCardProps = {
  bookCovers: string[];
  data: Collection;
  isLoading: boolean;
};

export const CollectionCard: React.FC<CollectionCardProps> = ({
  bookCovers,
  data,
}) => {
  const { name, uuid } = data;
  const displayedCovers = bookCovers.slice(0, 3);
  const defaultCover = EmptyPng;

  return (
    <Link to={`colecao/${uuid}`} className="flex w-fit h-fit ">
      <div className="flex cursor-pointer w-[140px] h-[240px] hover:scale-95 hover:ease-in-out hover:duration-300 flex-col gap-5 items-center relative">
        <div
          className="w-full h-full relative"
          style={{ transform: `translate(0, 20px)` }}
        >
          {displayedCovers.length > 0 ? (
            displayedCovers.map((cover, index) => (
              <img
                key={index}
                src={cover}
                alt={`Capa do livro ${index + 1}`}
                className="absolute min-w-full min-h-full rounded-md shadow-md"
                style={{
                  right: `${index * 10}px`,
                  bottom: `${index * 10}px`,
                  zIndex: 10 - index,
                }}
              />
            ))
          ) : (
            <img
              src={defaultCover}
              alt="Sem capas disponíveis"
              className="absolute object-cover w-full h-full rounded-md shadow-md"
            />
          )}
        </div>

        <span
          className="mt-1 text-sm self-start font-medium text-gray-700 max-w-[140px] truncate"
          style={{
            fontSize: "clamp(0.8rem, 0.8vw, 1rem)",
            whiteSpace: "nowrap",
          }}
        >
          {name}
        </span>
      </div>
    </Link>
  );
};
