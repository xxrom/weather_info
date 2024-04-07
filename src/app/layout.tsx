import type { Metadata } from "next";
import "./globals.css";
import { ErrorBoundary } from "../components/ErrorBoundary";

export const metadata: Metadata = {
  title: "Nikita Chernyshov",
  description: "Weather info widgets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <body className="bg-slate-0">{children}</body>
      </ErrorBoundary>
    </html>
  );
}
