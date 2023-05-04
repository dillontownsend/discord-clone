import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { type ReactNode } from "react";
import Mark from "public/branding/discord-mark-white.png";
import React from "react";
import Image from "next/image";

const Loading = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#2B2D31]">
      <div
      //initial={{
      //  rotate: 0,
      //}}
      //animate={{
      //  rotate: 720,
      //}}
      //transition={{
      //  repeat: Infinity,
      //  repeatDelay: 0.3,
      //  duration: 1,
      //  type: "spring",
      //}}
      >
        <Image
          src={Mark}
          alt={"mark"}
          width={70}
          height={53.047}
          className="py-14"
        />
      </div>

      <div className="max-w-[300px] text-center text-[#f2f3f5]">
        <div className="mb-2 text-xs font-semibold uppercase">Did you know</div>
        <div className="text-base leading-5 text-[#dbdee1]">
          Discord used to only run in the browser!
        </div>
      </div>
    </div>
  );
};

interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  const { status } = useSession();
  const { push } = useRouter();

  if (status === "loading") return <Loading />;

  if (status === "unauthenticated") {
    void push("/");
    return <Loading />;
  }

  return (
    <>
      <div>hello from layout</div>
      {children}
    </>
  );
};

export default AppLayout;
