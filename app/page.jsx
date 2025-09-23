"use client";
import { assets } from "@/public/assets";
import Message from "@/components/Message";
import PromptBox from "@/components/PromptBox";
import Sidebar from "@/components/Sidebar";
import { useAppContext } from "@/context/AppContext";
import handleNewChat from "@/ExportFunc";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { selectedChat, createNewChat, user } = useAppContext();
  const containerRef = useRef(null);

  useEffect(() => {
    if (selectedChat) {
      setMessages(selectedChat.messages);
    }
  }, [selectedChat]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <div>
      <div className="flex h-screen">
        <Sidebar expand={expand} setExpand={setExpand} />
        <div className="relative flex flex-1 flex-col items-center justify-center bg-[#292a2d] px-4 pb-8 text-white">
          <div className="absolute top-6 flex w-full items-center justify-between px-4 md:hidden">
            <Image
              onClick={() => (expand ? setExpand(false) : setExpand(true))}
              className="rotate-180"
              src={assets.menu_icon}
              alt="menu icon"
            />
            <Image
              onClick={() => handleNewChat({ user, createNewChat })}
              className="opacity-70"
              src={assets.chat_icon}
              alt="chat icon"
            />
          </div>

          {messages.length === 0 ? (
            <>
              <div className="flex-center flex flex-col gap-2">
                <div className="flex flex-col items-start justify-start gap-2 lg:flex-row lg:items-center lg:justify-center">
                  <Image
                    src={assets.logo_icon}
                    width={60}
                    alt=""
                    className="lg:-mt-2 lg:w-12"
                  />
                  <p className="mb-2 text-2xl font-bold">Hi, I'm DeepSeek.</p>
                </div>

                <p className="mb-6 text-xl font-light text-gray-400">
                  How can i help you today?
                </p>
              </div>
            </>
          ) : (
            <div
              ref={containerRef}
              className="relative mt-20 flex max-h-screen w-full flex-col items-center justify-start overflow-y-auto"
            >
              <p className="fixed top-8 mb-6 rounded-lg border border-transparent px-2 py-1 font-semibold hover:border-gray-500/50">
                {selectedChat.name}
              </p>
              {messages.map((msg, index) => (
                <Message key={index} role={msg.role} content={msg.content} />
              ))}
              {isLoading && (
                <div className="flex w-full max-w-3xl gap-4 py-3">
                  <Image
                    className="h-9 w-9 rounded-full border border-white/15 p-1"
                    src={assets.logo_icon}
                    alt="Logo"
                  />
                  <div className="loader flex items-center justify-center gap-1">
                    <div className="h-1 w-1 animate-bounce rounded-full bg-white"></div>
                    <div className="h-1 w-1 animate-bounce rounded-full bg-white"></div>
                    <div className="h-1 w-1 animate-bounce rounded-full bg-white"></div>
                  </div>
                </div>
              )}
            </div>
          )}
          <PromptBox isLoading={isLoading} setIsLoading={setIsLoading} />
        </div>
      </div>
    </div>
  );
}
