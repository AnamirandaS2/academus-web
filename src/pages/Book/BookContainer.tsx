import {
  ArrowLeft,
  CalendarDays,
  FileText,
  Star,
  UserRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import "react-circular-progressbar/dist/styles.css";
import { ProgressCircular } from "../../components/Progress/ProgressCircular";
import dayjs from "dayjs";
import NewCommentInput from "../../components/Comment/NewCommentInput";
import { useRef } from "react";
import { BookDetails } from "../../entities/BookDetails.entity";

export type BookContainerProps = {
  data: BookDetails;
};

export function BookContainer({ data }: BookContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const startDate = data?.progress?.startDate;
  const startedDateDay = dayjs(startDate).format("DD");
  const startedDateMonthYear = dayjs(startDate).format("MM/ YYYY");

  const goalDate = data?.progress?.goalDate;
  const goalDateDay = dayjs(goalDate).format("DD");
  const goalDateMonthYear = dayjs(goalDate).format("MM/ YYYY");

  return (
    <div className="w-full flex flex-col items-start gap-3 overflow-auto pr-20">
      <Link to="/biblioteca" className="flex font-medium text-base">
        <ArrowLeft /> Voltar
      </Link>
      <div className="flex gap-5">
        <div className="flex flex-col items-start">
          <div className="min-w-[240px] w-[240px] flex flex-col items-start gap-2">
            <img
              src={data.book.coverUrl}
              alt="capa livro"
              className="w-[240px] h-[360px] rounded-xl object-cover"
            />
            <div className="flex flex-col gap-3">
              <div className="flex flex-col text-left items-start text-text-gray">
                <p className="uppercase text-base font-bold">
                  {data.book.title}
                </p>
                <p className="uppercase text-sm font-medium">
                  {data.book.author}
                </p>
                <p className="text-sm text-left ">
                  {data.book.publisher} | {data.book.edition}
                </p>
                <p className="text-sm text-left">2011</p>
              </div>
              <div className="w-full flex items-center justify-between">
                <div className="text-sm flex flex-col items-start text-black">
                  <div className="flex items-center gap-1">
                    <Star size={16} /> {data.book.reviewsCount} avaliações
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText size={16} /> {data.book.pagesTotal} páginas
                  </div>
                  <div className="flex items-center gap-1">
                    <UserRound size={16} /> {data.book.readersCount} leitores
                  </div>
                </div>
                <div className="bg-green-500 text-[#fff] rounded-lg flex items-center justify-center font-bold p-4 text-2xl">
                  {data.book.rating}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5 items-start">
          <div className="text-justify">{data.book.synopsis}</div>
          <div className="flex flex-col w-full gap-2">
            <h2 className="text-blue-700 text-3xl font-bold">Progresso</h2>
            <div className="flex w-full gap-4">
              <div className="w-fit h-[60%] bg-[#fff]/70 border-2 border-black-10 rounded-xl shadow-[0_4px_8px_rgba(0,0,0,0.1)] backdrop-blur-lg flex items-center justify-between pr-10 pl-5">
                <ProgressCircular
                  percentage={85} //{data?.progress?.percentage}
                  className="w-[50%] h-full flex items-center justify-center"
                />
                <div className="flex flex-col gap-1">
                  <p className="text-blue-700 text-sm font-bold">
                    páginas lidas
                  </p>
                  <div className="bg-blue-700 px-10 py-1 rounded-full bg-gradient-to-r from-blue-700 to-blue-500">
                    <p className="flex items-end text-xl font-bold text-[#fff]">
                      {data?.progress?.pagesRead}/{" "}
                      <span className="text-base font-medium">
                        {data.book.pagesTotal}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-fit h-[60%] px-10 py-20 bg-blue-700 rounded-xl shadow-[0_4px_8px_rgba(0,0,0,0.1)] backdrop-blur-lg flex items-center justify-between">
                <div className="flex w-full gap-5">
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-[#fff] text-sm text-center w-[70%]">
                      Início da leitura
                    </p>
                    <div className="flex flex-col">
                      <div className="text-[#fff] text-6xl flex font-bold items-baseline">
                        <CalendarDays size={30} color="#fff" />
                        {startedDateDay}
                      </div>
                      <p className="text-[#fff] text-lg">
                        {startedDateMonthYear}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-[#fff] text-sm text-center w-[70%]">
                      Meta de leitura
                    </p>
                    <div className="flex flex-col">
                      <div className="text-[#fff] text-6xl flex font-bold items-baseline">
                        <CalendarDays size={30} color="#fff" />
                        {goalDateDay}
                      </div>
                      <p className="text-[#fff] text-lg">{goalDateMonthYear}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
            <div
              ref={containerRef}
              className="flex flex-col max-h-full h-full overflow-auto"
              style={{ minHeight: "150px" }}
            >
              <NewCommentInput avatarUrl="https://avatars.githubusercontent.com/u/128877022?v=4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
