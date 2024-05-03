import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      {children}
    </div>
  );
}

export default Layout;
