import type { Metadata } from 'next';
import Heading from "@/components/Heading";

export const metadata: Metadata = {
  title: 'About',
};
function AboutPage() {
    return (
      <>
        <Heading>About</Heading>
        <p>
          Here we'll list all the reviews.
        </p>
      </>
    );
  }
  export default AboutPage;