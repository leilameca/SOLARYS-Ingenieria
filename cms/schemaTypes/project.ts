import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Proyectos",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Categoría",
      type: "string",
      options: {
        list: [
          { title: "Solar Fotovoltaica", value: "solar" },
          { title: "Bombeo Solar", value: "bombeo" },
          { title: "Electromecánica", value: "electromecanica" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Ubicación",
      type: "string",
    }),
    defineField({
      name: "equipos",
      title: "Equipos utilizados",
      type: "string",
    }),
    defineField({
      name: "image",
      title: "Imagen principal",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Fecha",
      type: "datetime",
    }),
  ],
});
