import { assets } from "@/public/assets";
import Image from "next/image";
import React, { useEffect } from "react";
import Markdown from "react-markdown";
import Prism from "prismjs";
import toast from "react-hot-toast";

const Message = ({ role, content }) => {
  const copyMessage = () => {
    navigator.clipboard.writeText(content);
    toast.success("Message copied to clipboard");
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [content]);

  return (
    <div className="flex w-full max-w-3xl flex-col items-center text-sm">
      <div
        className={`mb-8 flex w-full flex-col ${
          role === "user" && "items-end"
        }`}
      >
        <div
          className={`group relative flex max-w-2xl rounded-xl py-3 ${
            role === "user" ? "bg-[#414158] px-5" : "gap-3"
          }`}
        >
          <div
            className={`absolute opacity-0 group-hover:opacity-100 ${
              role === "user" ? "top-2.5 -left-16" : "-bottom-6 left-9"
            } transition-all`}
          >
            <div className="flex items-center gap-2 opacity-70">
              {role === "user" ? (
                <>
                  <Image
                    onClick={copyMessage}
                    src={assets.copy_icon}
                    alt="copy icon"
                    className="w-4 cursor-pointer"
                  />
                  <Image
                    src={assets.pencil_icon}
                    alt="pencil icon"
                    className="w-4.5 cursor-pointer"
                  />
                </>
              ) : (
                <>
                  <Image
                    onClick={copyMessage}
                    src={assets.copy_icon}
                    alt="copy icon"
                    className="w-4.5 cursor-pointer"
                  />
                  <Image
                    src={assets.regenerate_icon}
                    alt="regenerate icon"
                    className="w-4 cursor-pointer"
                  />
                  <Image
                    src={assets.like_icon}
                    alt="like icon"
                    className="w-4 cursor-pointer"
                  />
                  <Image
                    src={assets.dislike_icon}
                    alt="dislike icon"
                    className="w-4 cursor-pointer"
                  />
                </>
              )}
            </div>
          </div>
          {role === "user" ? (
            <span className="text-white/90">{content}</span>
          ) : (
            <>
              <Image
                src={assets.logo_icon}
                alt="logo icon"
                className="h-9 w-9 rounded-full border border-white/15 p-1"
              />
              <div className="w-full space-y-4 overflow-scroll">
                <Markdown>{content}</Markdown>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
