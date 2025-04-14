import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function Header() {
  return (
    <div className="flex justify-between items-center p-4 h-16 bg-black/50 text-white">
      <nav>
        <Link href="/">
          <h1 className="text-2xl font-bold">LOGO</h1>
        </Link>
      </nav>

      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
