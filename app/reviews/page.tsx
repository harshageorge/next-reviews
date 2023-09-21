import Link from "next/link";
import Heading from "@/components/Heading";

function ReviewsPage() {
  return (
    <>
      <Heading>Reviews</Heading>
      <p>Here we'll list all the reviews.</p>
      <ul className="flex flex-col gap-3">
        <li className="bg-white border w-80 rounded shadow hover:shadow-xl">
          <Link href="/reviews/hollow-knight">
            <img
              src="/images/hollow-knight.jpg"
              alt=""
              width="320"
              height="180"
              className="rounded-t"
            />
            <h2 className="py-1 text-center">Hollow-knight</h2>
          </Link>
        </li>
        <li className="bg-white border w-80 rounded shadow hover:shadow-xl">
          <Link href="/reviews/stardew-valley">
            <img
              src="/images/stardew-valley.jpg"
              alt=""
              width="320"
              height="180"
              className="rounded-t"
            />
            <h2 className="py-1 text-center">Stardew-valley</h2>
          </Link>
        </li>
      </ul>
    </>
  );
}
export default ReviewsPage;
