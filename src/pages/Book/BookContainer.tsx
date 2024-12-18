import { ArrowLeft, FileText, Star, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ProgressCircular } from "../../components/Progress/ProgressCircular";

export type BookContainerProps = {
  user: {
    uuid: string;
    name: string;
    avatarUrl: string;
  };
  book: {
    uuid: string;
    title: string;
    author: string;
    edition: string;
    year: number;
    publisher: string;
    pagesTotal: number;
    coverUrl: string;
    rating: number;
    reviewsCount: number;
    readersCount: number;
    synopsis: string;
  };
  progress: {
    percentage: number;
    pagesRead: number;
    lastUpdated: string;
    startDate: string;
    goalDate: string;
  };
  comment: {
    uuid: string;
    content: string;
    createdAt: string;
    likes: number;
    userProgress: number;
  };
  readingDetails: {
    description: string;
    createdAt: string;
  };
};

export function BookContainer({
  book,
  comment,
  progress,
  readingDetails,
  user,
}: BookContainerProps) {
  return (
    <div className="w-full  flex flex-col items-start gap-3 overflow-auto pr-20">
      <Link to="/biblioteca" className="flex font-medium text-base">
        <ArrowLeft /> Voltar
      </Link>
      <div className="flex gap-5">
        <div className="flex flex-col items-start ">
          <div className="min-w-[240px] w-[240px] flex flex-col items-start gap-2">
            <img
              src={book.coverUrl}
              alt="capa livro"
              className="w-[240px] h-[360px] rounded-xl object-cover"
            />
            <div className="flex flex-col gap-3">
              <div className="flex flex-col text-left items-start  text-text-gray">
                <p className="uppercase text-base font-bold">{book.title}</p>
                <p className="uppercase text-sm font-medium">{book.author}</p>
                <p className="text-sm text-left ">
                  {book.publisher} | {book.edition}
                </p>
                <p className="text-sm text-left">2011</p>
              </div>
              <div className="w-full flex items-center justify-between">
                <div className="text-sm flex flex-col items-start text-black">
                  <div className="flex items-center gap-1">
                    <Star size={16} /> {book.reviewsCount} avaliações{" "}
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText size={16} /> {book.pagesTotal} páginas
                  </div>
                  <div className="flex items-center gap-1">
                    <UserRound size={16} /> {book.readersCount} leitores
                  </div>
                </div>
                <div className="bg-green-500 text-[#fff] rounded-lg flex items-center justify-center font-bold p-4 text-2xl">
                  {book.rating}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="text-justify">{book.synopsis}</div>
          <div className="flex flex-col items-start w-[60%]  p-5">
            <h2 className="text-blue-700 text-3xl font-bold">Progresso</h2>
            <div className="w-[60%] bg-[#fff]/70  border-2 border-black-10 rounded-xl shadow-[0_4px_8px_rgba(0,0,0,0.1)] backdrop-blur-lg flex items-center justify-center gap-3">
              <ProgressCircular percentage={progress.percentage} />
              <div className="flex flex-col gap-1">
                <p className="text-blue-700 text-sm font-bold">páginas lidas</p>
                <div className="bg-blue-700 px-10 py-1 rounded-full bg-gradient-to-r from-blue-700 to-blue-500">
                  <p className="flex items-end  text-xl font-bold text-[#fff]">
                    {progress.pagesRead}/{" "}
                    <span className="text-base font-medium">
                      {book.pagesTotal}
                    </span>
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
