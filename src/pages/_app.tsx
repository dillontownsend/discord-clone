import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import localFont from "next/font/local";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

export const ggSans = localFont({
  src: [
    {
      path: "../../public/fonts/ggsans-Normal.woff2",
      weight: "400",
      style: "regular",
    },
    {
      path: "../../public/fonts/ggsans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ggsans-Semibold.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../../public/fonts/ggsans-Bold.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../../public/fonts/ggsans-ExtraBold.woff2",
      weight: "800",
      style: "extrabold",
    },
  ],
  variable: "--font-ggSans",
});

const antiqueOlive = localFont({
  src: [
    {
      path: "../../public/fonts/aqct.ttf",
      weight: "800",
      style: "extrabold",
    },
  ],
  variable: "--font-antiqueOlive",
});

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <SessionProvider session={session as Session | null}>
      <main
        className={`${ggSans.variable} font-ggSans ${antiqueOlive.variable}`}
      >
        {getLayout(<Component {...pageProps} />)}
      </main>
      <ReactQueryDevtools initialIsOpen={false} />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
