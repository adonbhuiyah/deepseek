import { assets } from "@/public/assets";
import Image from "next/image";
import React, { useState } from "react";
import { useClerk, UserButton } from "@clerk/nextjs";
import { useAppContext } from "@/context/AppContext";
import ChatLabel from "./ChatLabel";
import handleNewChat from "@/ExportFunc";

const Sidebar = ({ expand, setExpand }) => {
  const { openSignIn, openUserProfile } = useClerk();

  const { user, chats, createNewChat } = useAppContext();
  const [openMenu, setOpenMenu] = useState({ id: 0, open: false });

  return (
    <div
      className={`z-50 flex flex-col justify-between bg-[#212327] pt-7 transition-all max-md:absolute max-md:h-screen ${
        expand ? "w-64 p-4" : "w-0 max-md:overflow-hidden md:w-20"
      }`}
    >
      <div>
        <div
          className={`flex ${
            expand ? "flex-row gap-10" : "flex-col items-center gap-8"
          }`}
        >
          <Image
            className={expand ? "w-36" : "w-10"}
            src={expand ? assets.logo_text : assets.logo_icon}
            alt={expand ? "logo_text" : "logo_icon"}
          />

          <div
            onClick={() => (expand ? setExpand(false) : setExpand(true))}
            className="group relative flex aspect-square h-9 w-9 cursor-pointer items-center justify-center rounded-lg transition-all duration-300 hover:bg-gray-500/20"
          >
            <Image
              src={assets.menu_icon}
              alt="menu icon"
              className="md:hidden"
            />
            <Image
              src={expand ? assets.sidebar_close_icon : assets.sidebar_icon}
              alt={expand ? "sidebar_close_icon" : "sidebar_icon"}
              className="hidden w-7 md:block"
            />
            <div
              className={`absolute w-max ${
                expand ? "top-12 left-1/2 -translate-x-1/2" : "-top-12 left-0"
              } pointer-events-none rounded-lg bg-black px-3 py-2 text-sm text-white opacity-0 shadow-lg transition group-hover:opacity-100`}
            >
              {expand ? "Close sidebar" : "Open sidebar"}
              <div
                className={`absolute h-3 w-3 rotate-45 bg-black ${
                  expand
                    ? "-top-1.5 left-1/2 -translate-x-1/2"
                    : "-bottom-1.5 left-4"
                }`}
              ></div>
            </div>
          </div>
        </div>

        <button
          onClick={() => handleNewChat({ user, createNewChat })}
          className={`mt-8 flex cursor-pointer items-center justify-center ${
            expand
              ? "bg-primary w-max gap-2 rounded-2xl p-2.5 hover:opacity-90"
              : "group relative mx-auto h-9 w-9 rounded-lg hover:bg-gray-500/30"
          }`}
        >
          <Image
            className={expand ? "w-6" : "w-7"}
            src={expand ? assets.chat_icon : assets.chat_icon_dull}
            alt={expand ? "chat_icon" : "chat_icon_dull"}
          />
          <div className="shaow-lg pointer-events-none absolute -top-12 -right-12 w-max rounded-lg bg-black px-3 py-2 text-sm text-white opacity-0 transition group-hover:opacity-100">
            New chat
            <div className="absolute -bottom-1.5 left-4 h-3 w-3 rotate-45 bg-black"></div>
          </div>
          {expand && <p className="text font-medium text-white">New chat</p>}
        </button>

        <div
          className={`mt-8 text-sm text-white/25 ${
            expand ? "block" : "hidden"
          }`}
        >
          <p className="my-1">Recents</p>
          {chats.map((chat, index) => (
            <ChatLabel
              key={index}
              name={chat.name}
              id={chat._id}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
            />
          ))}
        </div>
      </div>

      <div>
        <div
          className={`group relative flex cursor-pointer items-center ${
            expand
              ? "border-primary cursor-pointer gap-1 rounded-lg border p-2.5 text-sm text-white/80 hover:bg-white/10"
              : "mx-auto h-10 w-10 rounded-lg hover:bg-gray-500/30"
          }`}
        >
          <Image
            className={expand ? "w-5" : "mx-auto w-6.5"}
            src={expand ? assets.phone_icon : assets.phone_icon_dull}
            alt={expand ? "phone_icon" : "phone_icon_dull"}
          />
          <div
            className={`absolute -top-60 pb-8 ${
              !expand && "-right-40"
            } hidden opacity-0 transition group-hover:block group-hover:opacity-100`}
          >
            <div className="relative w-max rounded-lg bg-black p-3 text-sm text-white shadow-lg">
              <Image className="w-44" src={assets.qrcode} alt="qrcode" />
              <p>Scan to get DeepSeek App</p>
              <div
                className={`absolute h-3 w-3 rotate-45 bg-black ${
                  expand ? "right-1/2" : "left-4"
                } -bottom-1.5`}
              ></div>
            </div>
          </div>
          {expand && (
            <>
              {" "}
              <span>Get App</span> <Image src={assets.new_icon} alt="" />{" "}
            </>
          )}
        </div>

        <div
          onClick={() => (user ? openUserProfile() : openSignIn())}
          className={`flex items-center ${
            expand ? "rounded-lg hover:bg-white/10" : "w-full justify-center"
          } mt-2 cursor-pointer gap-3 p-2 text-sm text-white/60`}
        >
          {user ? (
            <UserButton />
          ) : (
            <Image
              src={assets.profile_icon}
              alt="profile_icon"
              className="w-7"
            />
          )}

          {expand && !user ? (
            <span>Login DeepSeek</span>
          ) : (
            expand && user && <span>Profile</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
