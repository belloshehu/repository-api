import Header from "./components/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Repositories",
  description: "Web application with list of all repositories",
  keywords: "web, application, programming, html, javascript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="p-5 lg:p-20">{children}</main>
      </body>
    </html>
  );
}
