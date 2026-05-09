"use client";

import { useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import PageLoader from "./PageLoader";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      // small delay = smoother UX
      setTimeout(() => setLoading(false), 300);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {/* Loader Overlay */}
      <div
        className={`
          fixed inset-0 z-9999
          transition-opacity duration-700 ease-out
          ${loading ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        <PageLoader />
      </div>

      {/* Page Content */}
      <div
        className={`
          min-h-screen flex flex-col
          transition-opacity duration-700 ease-out
          ${loading ? "opacity-0" : "opacity-100"}
        `}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
