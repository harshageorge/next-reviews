import Link from 'next/link';
import Heading from '@/components/Heading';

function ReviewsPage() {
    return (
      <>
        <Heading>Reviews</Heading>
        <p>
          Here we'll list all the reviews.
        </p>
        <ul>
              <li>
                <Link href='/reviews/hollow-knight'>Hollow-knight</Link>
              </li>
              <li>
                <Link href='/reviews/stardew-valley'>Stardew-valley</Link>
              </li>
             
            </ul>
      </>
    );
  }
  export default ReviewsPage;