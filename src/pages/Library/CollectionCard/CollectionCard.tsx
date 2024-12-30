type CollectionCardProps = {
  bookCovers: string[];
  name: string;
};

export const CollectionCard: React.FC<CollectionCardProps> = ({
  bookCovers,
  name,
}) => {
  const displayedCovers = bookCovers.slice(0, 3);

  return (
    <div className="flex cursor-pointer max-w-[140px] w-full max-h-[240px] h-full hover:scale-95 hover:ease-in-out hover:duration-300 flex-col gap-5 items-center relative">
      <div
        className="w-full h-full relative"
        style={{ transform: `translate(0, 20px)` }}
      >
        {displayedCovers.map((cover, index) => (
          <img
            key={index}
            src={cover}
            alt={`Capa do livro ${index + 1}`}
            className="absolute w-full h-full rounded-md shadow-md"
            style={{
              right: `${index * 10}px`,
              bottom: `${index * 10}px`,
              zIndex: 10 - index,
            }}
          />
        ))}
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
  );
};
