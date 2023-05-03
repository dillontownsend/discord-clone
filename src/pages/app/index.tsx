import { signOut } from "next-auth/react";
import { type ReactElement } from "react";
import { type NextPageWithLayout } from "../_app";
import AppLayout from "~/layouts/appLayout";

const Index: NextPageWithLayout = () => {
  return (
    <>
      <div>hello from index</div>
      <button onClick={() => void signOut()}>sign out</button>
    </>
  );
};

Index.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export default Index;
