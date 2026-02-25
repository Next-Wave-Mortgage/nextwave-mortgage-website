import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculators",
  description: "Mortgage calculators to help you plan your home purchase.",
};

export default function CalculatorsPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h1 className="text-3xl font-bold">Calculators</h1>
      <p className="mt-4 text-gray-600">Calculators coming soon.</p>
    </section>
  );
}
