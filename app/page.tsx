import Link from "next/link";
import Heading from "@/components/Heading";

export default function HomePage() {
    return (
      <>
        <Heading>Indie Gamer</Heading>
        <p className="pb-3">
          Only the best indie games, reviewed for you.
        </p>
        <div className="bg-white border rounded w-80 sm:w-full shadow hover:shadow-xl">
          <Link href="/reviews/stardew-valley" className="flex flex-col sm:flex-row">
            <img
              src="/images/stardew-valley.jpg"
              alt=""
              width="320"
              height="180"
              className="rounded-t sm:rounded-l sm:rounded-r-none"
            />
            <h2 className="py-1 font-orbitron font-semibold text-center sm:px-2">Stardew-valley</h2>
          </Link>
        </div>
      </>
    );
  }