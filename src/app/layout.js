import "bootstrap/dist/css/bootstrap.min.css";
import MainHeader from "@/components/main-header/main-header";
import { Quicksand } from "next/font/google";
import "./_globals.scss";

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata = {
  title: "NextLevel Food",
  description: "A Next.js food app with a sleek UI and robust backend.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-dark ${quicksand.variable}`}>
        <MainHeader />
        <main className="min-vh-100">{children}</main>
      </body>
    </html>
  );
}
