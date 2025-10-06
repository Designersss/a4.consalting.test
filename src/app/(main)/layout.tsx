import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../../styles/global.css";

const montseratt = Montserrat({
    subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "a4.consalting.test",
  description: "a4.consalting.test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${montseratt.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
