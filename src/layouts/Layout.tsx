import React, { type ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
declare global {
  interface Window {
    _userJson: any;
  }
}

const Layout = (props: IProps) => {
  const { children } = props;

  return (
    <div className="h-screen w-screen bg-slate-800">
      <React.Suspense
        fallback={
          <div className="flex justify-center items-center">Đang tải...</div>
        }
      >
        {children}
      </React.Suspense>
    </div>
  );
};

export default Layout;
