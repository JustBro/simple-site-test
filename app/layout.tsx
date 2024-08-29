"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import "@/styles/index.scss";
import Header from "@/components/header/header";
import Scrollbar from "smooth-scrollbar";
import { useEffect, useRef } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const scroll = useRef<HTMLElement>(null);

  useEffect(() => {
    const scrollbar = Scrollbar.init(scroll.current!);

    return () => {
      scrollbar.destroy();
    };
  }, []);

  return (
    <html lang="ru">
      <Provider store={store}>
        <body>
          <Header />
          <main ref={scroll}>
            <div className="wrapper">
              {children}
            </div>
          </main>
        </body>
      </Provider>
    </html>
  );
}
