import { CheckmarkIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

// export const location = defineType({
//   name: "location",
//   title: "Location",
//   type: "document",
//   icon: CheckmarkIcon,
//   fields: [
//     defineField({
//       title: "Name",
//       name: "name",
//       type: "string",
//       validation: (Rule) => Rule.required(),
//     }),
//     defineField({
//       title: "Coordinates",
//       name: "image",
//       type: "geopoint",
//       validation: (Rule) => Rule.required(),
//     }),
//   ],
// });

export const locationSchema = defineType({
  name: "location",
  title: "Location",
  type: "document",
  icon: CheckmarkIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "latitude",
      title: "Latitude",
      type: "number",
    },
    {
      name: "longitude",
      title: "Longitude",
      type: "number",
    },
    {
      name: "position",
      title: "Coordinates",
      type: "geopoint",
    },
    {
      name: "icon",
      title: "Icon",
      type: "image",
    },
  ],
});
