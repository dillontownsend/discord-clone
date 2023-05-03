import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AppLayout = ({ children }: Props) => {
  return (
    <>
      <div>hello from layout</div>
      {children}
    </>
  );
};

export default AppLayout;
