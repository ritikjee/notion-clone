import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center p-5 md:p-0">
      {children}
    </div>
  );
}

export default Layout;
