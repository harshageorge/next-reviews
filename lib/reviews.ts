import { readdir, readFile } from 'node:fs/promises';
import { marked } from 'marked';
import qs from 'qs';

const CMS_URL = 'http://localhost:1337';
export interface Review {
  slug: string;
  title: string;
  date: string;
  image: string;
  body: string;
}

export interface FullReview extends Review {
  body: string;
}
export async function getFeaturedReview(){
  const reviews = await getReviews();
return reviews[0];
}

export async function getReview(slug: string): Promise<Review> {
  // const text = await readFile(`./content/reviews/${slug}.md`, 'utf8');
  // const { content, data: { title, date, image } } = matter(text);
  // const body = marked(content);
  // return { slug,title, date, image, body };
  const url = `${CMS_URL}/api/reviews?` + qs.stringify({
    filters:{slug:{$eq:slug}},
    fields: ['slug', 'title', 'subtitle', 'publishedAt','body'],
    populate: { image: { fields: ['url'] } },
  
  pagination: { pageSize: 1, withCount:false },
  }, { encodeValuesOnly: true });
  console.log('getReview:', url);
  
  const response = await fetch(url);
  const { data } = await response.json();
  const attributes = data[0];
  console.log(attributes.attributes);
  
  
  return {
    slug: attributes.attributes.slug,
    title: attributes.attributes.title,
    date: attributes.attributes.publishedAt,
    image: CMS_URL + attributes.attributes.image.data.attributes.url,
    body: marked(attributes.attributes.body)
  }
}

export async function getReviews(): Promise<Review[]> {
  const url = `${CMS_URL}/api/reviews?` + qs.stringify({
    fields: ['slug', 'title', 'subtitle', 'publishedAt'],
    populate: { image: { fields: ['url'] } },
    sort: ['publishedAt:desc'],
    pagination: { pageSize: 6 },
  }, { encodeValuesOnly: true });
  const response = await fetch(url);
  const { data } = await response.json();
  console.log(data);
  
  return data.map(({ attributes }) => ({
    slug: attributes.slug,
    title: attributes.title,
    date: attributes.publishedAt.slice(0, 'yyyy-mm-dd'.length),
    image: CMS_URL + attributes.image.data.attributes.url,
  }));
  // const files = await readdir('./content/reviews');
  //  const slugs = await getSlugs();
  // const reviews: Review[] = [];
  // for (const slug of slugs) {
  //   const review = await getReview(slug);
  //   reviews.push(review);
  // }
  // reviews.sort((a,b)=>b.date.localeCompare(a.date));
  // return reviews;
  return []
}

export async function getSlugs(): Promise<string[]> {
  const files = await readdir('./content/reviews');
  return files.filter((file) => file.endsWith('.md'))
    .map((file) => file.slice(0, -'.md'.length));
}