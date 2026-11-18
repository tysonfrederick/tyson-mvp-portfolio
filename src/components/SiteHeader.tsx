import Image from "next/image";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 md:px-12">
        <Link href="/" className="shrink-0" aria-label="Tyson Frederick, home">
          <Image
            src="/tf-logo.png"
            alt="Tyson Frederick"
            width={48}
            height={48}
            priority
            className="h-10 w-10 sm:h-12 sm:w-12"
          />
        </Link>
        <SiteNav />
      </div>
    </header>
  );
}
