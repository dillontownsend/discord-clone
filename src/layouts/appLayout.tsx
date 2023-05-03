import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  const { status } = useSession();
  const { push } = useRouter();

  if (status === "loading") return <div>session status loading</div>;

  if (status === "unauthenticated") {
    void push("/");
    return <div>session status unauthenticated</div>;
  }

  return (
    <>
      <div>hello from layout</div>
      {children}
    </>
  );
};

export default AppLayout;
