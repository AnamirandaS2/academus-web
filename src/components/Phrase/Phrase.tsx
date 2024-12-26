import Skeleton from "../Skeleton/Skeleton";

export type PhraseProps = {
  author?: string;
  content?: string;
  isLoadingPhrase: boolean;
};

export default function Phrase({
  author,
  content,
  isLoadingPhrase,
}: PhraseProps) {
  return (
    <div className="bg-[#F4F4FF] flex flex-col items-center min-w-28 w-full py-4 px-10 rounded-2xl">
      <div className="text-7xl select-none max-h-10 h-fit self-start text-[#C1C1E1] font-bold leading-none mr-5">
        &ldquo;
      </div>
      <p className="text-left w-full text-[#000066] font-semibold text-lg leading-6 ">
        {isLoadingPhrase ? (
          <div className="flex flex-wrap gap-2">
            <Skeleton className="w-[60%] h-3" />
            <Skeleton className="w-[30%] h-3" />
            <Skeleton className="w-[90%] h-3" />
            <Skeleton className="w-[40%] h-3" />
            <Skeleton className="w-[40%] h-3" />
            <Skeleton className="w-[10%] h-3" />
            <Skeleton className="w-[70%] h-3" />
          </div>
        ) : (
          content
        )}
      </p>
      <div className="text-[#000066] font-bold  w-full text-sm pt-1 self-start items-start flex gap-1">
        <div className="h-full rounded-lg w-1 bg-[#c1c1e1] self-start"></div>
        {isLoadingPhrase ? (
          <div className="flex flex-wrap w-full gap-1">
            <Skeleton className="w-[20%] h-2" />
            <Skeleton className="w-[30%] h-2" />
          </div>
        ) : (
          author
        )}
      </div>
      <div className="text-7xl select-none max-h-10 self-end h-fit text-[#C1C1E1] font-bold leading-none ">
        &rdquo;
      </div>
    </div>
  );
}
