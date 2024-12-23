import { useRef, useState } from "react";
import { Avatar } from "../Avatar/Avatar";

export type NewCommentInputProps = {
  avatarUrl: string;
};

export default function NewCommentInput({ avatarUrl }: NewCommentInputProps) {
  return (
    <div className="w-full border border-gray-200 rounded-lg flex flex-col justify-between p-3 gap-2">
      <div className="flex gap-2">
        <div className="flex w-fit">
          <Avatar size="sm" src={avatarUrl} />
        </div>
        <div className="flex flex-col gap-3 w-full flex-grow">
          <textarea
            placeholder="Comente aqui"
            className="max-w-full  break-all border-none resize-none outline-none overflow-auto"
          ></textarea>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-blue-700 text-white rounded-full p-2 px-5">
          Postar
        </button>
      </div>
    </div>
  );
}
