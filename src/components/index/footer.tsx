import { IoChevronDownOutline } from "react-icons/io5";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookSquare,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { type Session } from "next-auth";
import { signIn } from "next-auth/react";
import { env } from "~/env.mjs";
import { useRouter } from "next/router";

const categories = [
  {
    title: "Product",
    links: ["Download", "Nitro", "Status"],
  },
  {
    title: "Company",
    links: ["About", "Jobs", "Branding", "Newsroom"],
  },
  {
    title: "Resources",
    links: [
      "College",
      "Support",
      "Safety",
      "Blog",
      "Feedback",
      "Build",
      "StreamKit",
      "Creators",
      "Community",
    ],
  },
  {
    title: "Policies",
    links: [
      "Terms",
      "Privacy",
      "Cookie Settings",
      "Guidelines",
      "Acknowledgements",
      "Licenses",
      "Moderation",
    ],
  },
];

interface Props {
  sessionData: Session | null;
}

const Footer = ({ sessionData }: Props) => {
  const { push } = useRouter();

  return (
    <footer
      className={
        "flex w-full flex-col items-center bg-[#23272a] pb-16 pt-20 text-white"
      }
    >
      <div
        className={
          "grid w-full max-w-[1260px] grid-cols-4 gap-[0_20px] px-6 md:grid-cols-8 md:px-10  lg:grid-cols-12"
        }
      >
        <div className="col-span-4 mb-14 flex flex-col md:col-span-3 md:row-span-2">
          <div className="font-antiqueOlive text-[32px] uppercase leading-[95%] text-[#5875f2]">
            Imagine a place
          </div>
          <div className="mt-6 flex cursor-pointer items-center gap-2">
            <img src="/index/america.png" alt="america" className="h-4 w-6" />
            <div className="text-[14px] leading-[18px]">English, USA</div>
            <IoChevronDownOutline size={11} />
          </div>
          <div className="mt-6 flex items-center gap-6">
            <FaTwitter size={24} className="cursor-pointer" />
            <FaInstagram size={24} className="cursor-pointer" />
            <FaFacebookSquare size={24} className="cursor-pointer" />
            <FaYoutube size={24} className="cursor-pointer" />
            <FaTiktok size={24} className="cursor-pointer" />
          </div>
        </div>

        <div className="hidden grid-cols-[0] md:col-span-1 md:row-span-2 md:block"></div>

        {categories.map((category) => (
          <div key={category.title} className="col-span-2 mb-10">
            <div className="pt-2 text-base text-[#5865f2]">
              {category.title}
            </div>
            {category.links.map((link) => (
              <div
                key={link}
                className="mt-2 cursor-pointer text-base hover:underline"
              >
                {link}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div
        className={
          "grid w-full max-w-[1260px] grid-cols-4 gap-[0_20px] px-6 md:grid-cols-8 md:px-10"
        }
      >
        <div className="col-span-4 md:col-span-8">
          <div className="mb-8 h-[1px] w-full bg-[#5865f2]"></div>
          <div className="flex items-center justify-between">
            <img
              src="/branding/discord-logo-white.svg"
              alt="discord"
              className="h-[34px] w-[124px] cursor-pointer"
            />
            <button
              type={"button"}
              className={
                "rounded-[40px] bg-[#5865f2] px-4 py-[7px] text-[14px] font-medium leading-6 text-white transition-all duration-200 hover:bg-[#7983F5] hover:shadow-xl"
              }
              onClick={
                sessionData
                  ? () => void push("/app")
                  : () =>
                    void signIn(undefined, {
                      callbackUrl: `${env.NEXT_PUBLIC_APPLICATION_URL}/app`,
                    })
              }
            >
              {sessionData ? "Open Discord" : "Sign up"}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
