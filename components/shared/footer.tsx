import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black/50 text-white py-4">
      <div className="container mx-auto px-4">
        <p className="text-center">
          Made with ❤️ by{" "}
          <Link
            href="https://github.com/yourusername"
            className="font-bold italic text-blue-500"
          >
            Chloe
          </Link>
        </p>
      </div>
    </footer>
  );
}
