import { Rule } from "sanity";

export type LocationType = {
  _id: string;
  title: string;
  name: string;
  type: Document;
  validation: Rule;
};
