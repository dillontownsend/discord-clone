import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

const pages = [
  {
    name: "Download",
    url: "/",
  },
  {
    name: "Nitro",
    url: "/",
  },
  {
    name: "Discover",
    url: "/",
  },
  {
    name: "Safety",
    url: "/",
  },
  {
    name: "Support",
    url: "/",
  },
  {
    name: "Blog",
    url: "/",
  },
  {
    name: "Careers",
    url: "/",
  },
];

const Navbar = () => {
  const { data: sessionData } = useSession();

  return (
    <nav
      className={
        "mx-auto flex h-20 max-w-[1260px] items-center justify-between px-10"
      }
    >
      <Link href={"/"}>
        <Image
          src={"/discord-logo-white.svg"}
          alt={"discord"}
          width={124}
          height={34}
          className={"h-[34px] w-[124px]"}
        />
      </Link>

      <div>
        {pages.map((page) => (
          <Link
            key={page.name}
            href={page.url}
            className={
              "m-[10px] p-[10px] text-base font-semibold text-white hover:underline"
            }
          >
            {page.name}
          </Link>
        ))}
      </div>

      <div className={"flex w-[124px] justify-end"}>
        <button
          type={"button"}
          className={
            "rounded-[40px] bg-white px-4 py-[7px] text-[14px] font-medium leading-6 text-[#23272a] transition-all duration-200 hover:text-[#5865f2] hover:shadow-xl"
          }
          onClick={
            sessionData
              ? () => void console.log("Open Discord")
              : () => void signIn()
          }
        >
          {sessionData ? "Open Discord" : "Login"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
