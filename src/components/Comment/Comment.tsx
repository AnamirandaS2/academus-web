import { PlayCircleIcon } from "lucide-react";
import { Avatar } from "../Avatar/Avatar";
import { BiSolidLike } from "react-icons/bi";

import ProgressBar from "../Progress/ProgressBar";

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
};

export default function Comment({
  book,
  comment,
  likes,
  progress,
  readingDetails,
  user,
}: CommentProps) {
  return (
    <div className="w-full border border-gray-200 rounded-lg flex flex-col justify-between p-3 gap-5">
      <div className="flex flex-col gap-1">
        <div className="flex items-start justify-between ">
          <div className="flex items-center justify-start gap-1">
            <Avatar size="sm" src={user.avatarUrl} />
            <div className="flex flex-col items-start">
              <h4 className="text-sm font-medium">{user.name}</h4>
              <p className="flex items-center text-xs gap-1">
                <PlayCircleIcon size={12} color="#EE4C01" /> estou lendo{" "}
                <span className="font-semibold">{book.title}</span>
              </p>
            </div>
          </div>
          <p className="text-xs font-light text-gray-200">
            {comment.createdAt}
          </p>
        </div>
        <div className="flex w-60 items-center justify-start gap-1">
          <p className="text-xs w-[75%] flex items-start font-medium">
            Meu progresso:
          </p>
          <ProgressBar percentage={progress.percentage} />
          <span className="text-xs font-light">{progress.percentage}%</span>
        </div>
      </div>
      <div className="w-full flex flex-col items-start gap-4">
        <div className="w-full flex flex-col items-start gap-1">
          <p className="text-left text-base font-medium font-dmSans">
            {comment.content}
          </p>
          <div
            className="rounded-2xl w-full flex items-center justify-start gap-5 text-xs px-8 pt-2 pb-4 text-justify"
            style={{ backgroundColor: "rgba(69, 66, 87, 0.123)" }}
          >
            <img
              src={book.coverUrl}
              className="w-16 h-24 object-cover"
              alt="foto livro"
            />
            <div className="pt-2">{readingDetails.description}</div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-1">
          <button className="border-2 border-blue-700 rounded-full w-7 h-7 flex items-center justify-center">
            <BiSolidLike className="text-blue-700" />
          </button>
          <p className="text-blue-700">{likes.count}</p>
        </div>
      </div>
    </div>
  );
}
