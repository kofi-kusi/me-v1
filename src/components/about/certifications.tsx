import Badge from "@/components/ui/badge";

export default function Certs() {
  return (
    <section>
      <h2>Certifications:</h2>
      <ul className="ml-6 my-4">
        <Badge
          url="https://www.credly.com/badges/ce735840-2053-4b7e-95b9-2abaf73b0e77/public_url"
          imgUrl="/badges/fastapi-backend-dev.png"
          name="FastAPI & Backend Dev"
          from="O'Reilly"
        />

        <Badge
          url="https://www.credly.com/badges/740cc9f3-2f79-457c-a372-ca501814440b/public_url"
          imgUrl="/badges/data-structures-algorithms.4.png"
          name="Data structures and algorithms"
          from="O'Reilly"
        />
      </ul>
    </section>
  );
}
