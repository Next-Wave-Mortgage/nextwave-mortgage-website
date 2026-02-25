import { siteConfig } from "@/lib/site";

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        {siteConfig.name}
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
        {siteConfig.description}
      </p>
    </section>
  );
}
