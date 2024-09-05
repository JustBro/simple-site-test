"use client";

import { ReactNode, useEffect, useRef } from "react";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import Scrollbar from "smooth-scrollbar";

import Header from "@/components/header/header";

import "@/styles/index.scss";

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const scrollRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scrollbar = Scrollbar.init(scrollRef.current!);

    return () => {
      scrollbar.destroy();
    };
  }, []);

  return (
    <html lang="ru">
      <Provider store={store}>
        <body>
          <Header />
          <main ref={scrollRef}>
            <div>{children}</div>
          </main>
        </body>
      </Provider>
    </html>
  );
}
