import { PlayCircleIcon } from "lucide-react";
import { Avatar } from "../Avatar/Avatar";
import { BiSolidLike } from "react-icons/bi";

import ProgressBar from "../Progress/ProgressBar";
import Skeleton from "../Skeleton/Skeleton";
import dayjs from "dayjs";

export type CommentProps = {
  user: {
    uuid: string;
    name: string;
    avatarUrl: string;
  };
  book: {
    uuid: string;
    title: string;
    coverUrl: string;
  };
  progress: {
    percentage: number;
    lastUpdated: string;
  };
  comment: {
    uuid: string;
    content: string;
    createdAt: string;
  };
  likes: {
    count: number;
    usersWhoLiked: {
      uuid: string;
      name: string;
    }[];
  };
  readingDetails: {
    description: string;
    createdAt: string;
  };
  isLoading: boolean;
};

export default function Comment({
  book,
  comment,
  likes,
  progress,
  readingDetails,
  user,
  isLoading,
}: CommentProps) {
  const createdAt = comment.createdAt;
  const todayDate = new Date();
  const createdAtDate = dayjs(todayDate).diff(createdAt, "months");

  return (
    <div className="w-full  border border-gray-200 rounded-lg  flex flex-col justify-between p-3 gap-5">
      <div className="flex flex-col w-full gap-1">
        <div className="flex w-full items-start justify-between ">
          <div className="flex items-center w-full justify-start gap-1">
            {isLoading ? (
              <Skeleton className="min-w-10 min-h-10 rounded-[100%]" />
            ) : (
              <Avatar size="sm" src={user.avatarUrl} />
            )}
            <div className="flex flex-col w-full gap-1 items-start">
              {isLoading ? (
                <Skeleton className="w-20 h-2 rounded-md " />
              ) : (
                <h4 className="text-sm font-medium">{user.name}</h4>
              )}
              {isLoading ? (
                <div className="flex flex-wrap w-full gap-1">
                  <Skeleton className="w-[30%] h-1 rounded" />
                </div>
              ) : (
                <p className="flex items-center  text-xs gap-1">
                  <PlayCircleIcon size={12} color="#EE4C01" /> estou lendo
                  <span className="font-semibold">{book.title}</span>
                </p>
              )}
            </div>
          </div>
          {isLoading ? (
            <Skeleton className="w-16 h-3 rounded-md" />
          ) : (
            <p className="text-xs font-light text-right w-full text-gray-200">
              {createdAtDate} meses atrás
            </p>
          )}
        </div>
        {isLoading ? (
          <div className="flex flex-wrap gap-1">
            <Skeleton className="w-[40%] h-2 rounded" />
          </div>
        ) : (
          <div className="flex w-60 items-center justify-start gap-1">
            <p className="text-xs w-[75%] flex items-start font-medium">
              Meu progresso:
            </p>
            <ProgressBar percentage={progress.percentage} />
            <span className="text-xs font-light">{progress.percentage}%</span>
          </div>
        )}
      </div>
      <div className="w-full flex flex-col items-start gap-4">
        <div className="w-full flex flex-col items-start gap-1">
          {isLoading ? (
            <div className="flex w-full flex-wrap gap-1 pb-1">
              <Skeleton className="w-[80%] h-3 rounded" />
              <Skeleton className="w-[15%] h-3 rounded" />
              <Skeleton className="w-[20%] h-3 rounded" />
              <Skeleton className="w-[70%] h-3 rounded" />
              <Skeleton className="w-[80%] h-3 rounded" />
            </div>
          ) : (
            <p className="text-left text-base font-medium font-dmSans">
              {comment.content}
            </p>
          )}
          <div
            className="rounded-2xl w-full  flex items-center justify-start gap-5 text-xs px-8 pt-2 pb-4 text-justify"
            style={{ backgroundColor: "rgba(69, 66, 87, 0.123)" }}
          >
            {isLoading ? (
              <Skeleton className="min-w-16 h-24 rounded-lg " />
            ) : (
              <img
                src={book.coverUrl}
                className="w-16 h-24 object-cover"
                alt="foto livro"
              />
            )}
            {isLoading ? (
              <div className="flex w-full gap-1 flex-wrap">
                <Skeleton className="w-full h-2 rounded-md" />
                <Skeleton className="w-[80%] h-2 rounded-md" />
                <Skeleton className="w-[10%] h-2 rounded-md" />
                <Skeleton className="w-[40%] h-2 rounded-md" />
                <Skeleton className="w-[50%] h-2 rounded-md" />
                <Skeleton className="w-[80%] h-2 rounded-md" />
                <Skeleton className="w-[10%] h-2 rounded-md" />
                <Skeleton className="w-[40%] h-2 rounded-md" />
                <Skeleton className="w-[30%] h-2 rounded-md" />
              </div>
            ) : (
              <div className="pt-2">{readingDetails.description}</div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center gap-1">
          {isLoading ? (
            <Skeleton className="min-w-7 min-h-7 rounded-full" />
          ) : (
            <button className="border-2 border-blue-700 rounded-full w-7 h-7 flex items-center justify-center">
              <BiSolidLike className="text-blue-700" />
            </button>
          )}
          {isLoading ? (
            <Skeleton className="w-10 h-2 rounded-md " />
          ) : (
            <p className="text-blue-700">{likes.count}</p>
          )}
        </div>
      </div>
    </div>
  );
}
