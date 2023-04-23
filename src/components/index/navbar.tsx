import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { TfiMenu } from "react-icons/tfi";
import * as Dialog from "@radix-ui/react-dialog";
import * as Separator from "@radix-ui/react-separator";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { TbDownload } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";
import { ggSans } from "~/pages/_app";

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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeDialogOnLargeScreen = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", closeDialogOnLargeScreen);

    return () => window.removeEventListener("resize", closeDialogOnLargeScreen);
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <nav
        className={
          "mx-auto flex h-20 max-w-[1260px] items-center justify-between px-6 md:px-10"
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

        <div className={"hidden lg:block"}>
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

        <div className={"flex min-w-[124px] items-center justify-end gap-5"}>
          <button
            type={"button"}
            className={
              "rounded-[40px] bg-white px-4 py-[7px] text-[14px] font-medium leading-6 text-[#23272a] transition-all duration-200 hover:text-[#5865f2] hover:shadow-xl"
            }
            onClick={sessionData ? () => void signOut() : () => void signIn()}
          >
            {sessionData ? "Open Discord" : "Login"}
          </button>
          <Dialog.Trigger>
            <TfiMenu size={28} className={"text-white lg:hidden"} />
          </Dialog.Trigger>
        </div>
      </nav>

      <AnimatePresence>
        {open ? (
          <Dialog.Portal forceMount={true}>
            <Dialog.Overlay asChild={true}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className={"fixed inset-0 bg-black/30"}
              />
            </Dialog.Overlay>
            <Dialog.Content asChild={true}>
              <motion.div
                initial={{ x: 330 }}
                animate={{ x: 0 }}
                exit={{ x: 330 }}
                transition={{ duration: 0.2 }}
                className={
                  "fixed inset-y-0 right-0  flex w-[330px] flex-col justify-between rounded-bl-lg rounded-tl-lg bg-white p-6"
                }
              >
                <div className={"flex items-start"}>
                  <div className={"basis-full overflow-y-auto"}>
                    <Image
                      src={"/discord-logo-black.svg"}
                      alt={"discord"}
                      width={124}
                      height={34}
                      className={"h-[34px] w-[124px]"}
                    />
                    <Separator.Root
                      className={"mb-4 mt-6 h-[1px] bg-[#ebedef]"}
                    />
                    <nav>
                      <Link
                        href={"/"}
                        className={`${ggSans.variable} block rounded-lg bg-[#f6f6f6] px-4 py-2 font-ggSans text-base font-normal leading-6 text-[#00b0f4] hover:underline`}
                      >
                        Home
                      </Link>
                      {pages.map((page) => (
                        <Link
                          href={page.url}
                          key={page.name}
                          className={`${ggSans.variable} block px-4 py-2 font-ggSans text-base font-normal leading-6 text-[#23272a] hover:underline`}
                        >
                          {page.name}
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <Dialog.Close>
                    <IoCloseOutline size={28} className={"text-[#23272a]"} />
                  </Dialog.Close>
                </div>
                <button
                  className={
                    "flex items-center justify-center gap-2 rounded-[40px] bg-[#5865f2] px-4 py-[7px] text-[14px] font-normal leading-6 text-white"
                  }
                >
                  <TbDownload size={24} />
                  <div className={`${ggSans.variable} font-ggSans font-medium`}>
                    Download for Mac
                  </div>
                </button>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default Navbar;
