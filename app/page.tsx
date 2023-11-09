
import Link from "next/link";
import Heading from "@/components/Heading";
import { getFeaturedReview } from "@/lib/reviews";



export default async function HomePage() {
  const featuredReview = await getFeaturedReview();
    return (
      <>
      <Heading>Indie Gamer</Heading>
        <p className="pb-3">
          Only the best indie games, reviewed for you.
        </p>
        <div className="bg-white border rounded w-80 sm:w-full shadow hover:shadow-xl">
          <Link href={`/reviews/${featuredReview.slug}`} className="flex flex-col sm:flex-row">
            <img
              src={featuredReview.image}
              alt=""
              width="320"
              height="180"
              className="rounded-t sm:rounded-l sm:rounded-r-none"
            />
            <h2 className="py-1 font-orbitron font-semibold text-center sm:px-2">{featuredReview.title}</h2>
          </Link>
        </div>
      </>
    );
  }