import { Metadata } from "next";
import Articles from "@/components/writing/articles";

export const metadata: Metadata = {
  title: 'Writings',
  description: "Read technical articles and blog posts by Kofi Kusi covering web development, AI/ML, computer science, and reflections on university life.",

}

export default function Writing() {
  return (
    <>
    <Articles />
    </>
  );
}
