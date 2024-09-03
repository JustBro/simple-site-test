"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import "@/styles/index.scss";
import Header from "@/components/header/header";
import Scrollbar from "smooth-scrollbar";
import { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
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
