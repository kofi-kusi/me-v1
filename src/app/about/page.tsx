import { Metadata } from "next";
import Me from "@/components/about/me"
import Certs from "@/components/about/certifications";

export const metadata: Metadata = {
  title: 'About',
  description: 'Kofi Kusi is a computer science student at Kumasi Technical University and a software engineer.'

}

export default function About() {
  return (
    <div className="my-4 flex flex-col gap-4">
      <Me />
      <Certs />
    </div>
  );
}
