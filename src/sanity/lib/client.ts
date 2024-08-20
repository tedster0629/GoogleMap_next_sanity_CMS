import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export const fetchLocations = async () => {
  const query = `*[_type == "location"]{name, coordinates}`;
  return await client.fetch(query);
};
