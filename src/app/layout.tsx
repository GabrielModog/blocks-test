"use client";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";

import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"flex flex-col justify-between min-h-screen"}>
        <QueryClientProvider client={queryClient}>
          <Header />
          {children}
          <Footer />
        </QueryClientProvider>
      </body>
    </html>
  );
}
