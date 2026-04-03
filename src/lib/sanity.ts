import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ImageUrlBuilder = ReturnType<typeof imageUrlBuilder>;

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});

// Bild-URL Helper
const builder = imageUrlBuilder(sanityClient);
export function urlFor(source: any): ImageUrlBuilder {
  return builder.image(source);
}

// ============================================
// GROQ Queries – hier alle Abfragen zentral
// ============================================

export async function getServices() {
  return await sanityClient.fetch(
    `*[_type == "service"] | order(order asc) {
      _id, title, description, icon, image
    }`
  );
}

export async function getTeamMembers() {
  return await sanityClient.fetch(
    `*[_type == "teamMember"] | order(order asc) {
      _id, name, role, bio, image
    }`
  );
}

export async function getBlogPosts() {
  return await sanityClient.fetch(
    `*[_type == "blogPost"] | order(publishedAt desc) {
      _id, title, slug, excerpt, publishedAt, mainImage,
      "author": author->name
    }`
  );
}

export async function getBlogPost(slug: string) {
  return await sanityClient.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id, title, slug, body, publishedAt, mainImage,
      "author": author->name
    }`,
    { slug }
  );
}

export async function getOpeningHours() {
  return await sanityClient.fetch(
    `*[_type == "openingHours"] | order(dayOrder asc) {
      _id, day, dayOrder, from, to, closed
    }`
  );
}

export async function getFAQs() {
  return await sanityClient.fetch(
    `*[_type == "faq"] | order(order asc) {
      _id, question, answer
    }`
  );
}

export async function getTestimonials() {
  return await sanityClient.fetch(
    `*[_type == "testimonial"] | order(_createdAt desc) {
      _id, name, role, quote, image, rating
    }`
  );
}

export async function getSiteSettings() {
  return await sanityClient.fetch(
    `*[_type == "siteSettings"][0] {
      title, description, logo, ogImage
    }`
  );
}
