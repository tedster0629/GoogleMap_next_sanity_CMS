import { groq } from "next-sanity";
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