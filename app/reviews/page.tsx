import Link from 'next/link';

function ReviewsPage() {
    return (
      <>
        <h1>Reviews</h1>
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