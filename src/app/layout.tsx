import type { Metadata } from "next";
import "./globals.css";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { ThemeProvider } from "context/themeProvider";

export const metadata: Metadata = {
  title: "Nikita Chernyshov",
  description: "Weather info widgets",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <ThemeProvider storageKey="next-ui-theme">
        <body>{children}</body>
      </ThemeProvider>
    </ErrorBoundary>
  </html>
);

export default RootLayout;
