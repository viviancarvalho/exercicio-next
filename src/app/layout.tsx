import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Countries App",
  description: "Explore informações sobre países ao redor do mundo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
