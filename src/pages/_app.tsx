import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import localFont from "next/font/local";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const ggSans = localFont({
  src: [
    {
      path: "../../public/ggsans-Normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/ggsans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/ggsans-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/ggsans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/ggsans-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-ggSans",
});
const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <main className={`${ggSans.variable} font-ggSans`}>
        <Component {...pageProps} />
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
