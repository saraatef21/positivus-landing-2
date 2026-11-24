import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const font = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Positivus",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.className}>
      <body>{children}</body>
    </html>
  );
}
