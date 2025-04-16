"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import { Audiowide } from "next/font/google";
import Link from "next/link";
const audioWide = Audiowide({
  subsets: ["latin"],
  weight: ["400"],
});

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/50 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative w-36 h-8">
            <h3 className={audioWide.className}>CARENZA</h3>
          </div>
        </Link>

        {isMobile ? (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        ) : (
          <nav className="flex items-center gap-8">
            <Link
              href="#features"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-300 hover:text-white transition-colors"
            >
              How it Works
            </Link>
            <SignedOut>
              <Link href={`/sign-in`}>
                <Button
                  variant="outline"
                  className="text-white border-gray-700 w-full"
                >
                  Sign In
                </Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <Link href={`/dashboard`}>
                <Button
                  variant="outline"
                  className="text-white border-gray-700 w-full"
                >
                  Dashboard
                </Button>
              </Link>
            </SignedIn>
          </nav>
        )}

        {isMobile && isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-black/50 backdrop-blur-md shadow-lg py-4 px-4 flex flex-col gap-4">
            <Link
              href="#features"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How it Works
            </Link>
            <SignedOut>
              <Link href={`/sign-in`}>
                <Button
                  variant="outline"
                  className="text-white border-gray-700 w-full"
                >
                  Sign In
                </Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <Link href={`/dashboard`}>
                <Button
                  variant="outline"
                  className="text-white border-gray-700 w-full"
                >
                  Dashboard
                </Button>
              </Link>
            </SignedIn>
          </div>
        )}
      </div>
    </header>
  );
}
