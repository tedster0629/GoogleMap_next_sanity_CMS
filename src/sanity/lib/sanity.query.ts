import { groq, SanityClient } from "next-sanity";
import { client } from "./client";

export async function getBlog() {
  return client.fetch(
    groq`*[_type == "blog"]{
      _id,
      title,
      place,
      image {alt, "image": asset->url}
    }`
  );
}

// export async function getLocation() {
//   return client.fetch(
//     groq`*[_type == "location"]{
//       _id,
//       title,
//       name,
//       type,
//       validation
//     }`
//   );
// }

export async function fetchLocations() {
  const query =
    '*[_type == "location"]{title, latitude, longitude, coordinates ,icon}';
  return await client.fetch(query);
}
