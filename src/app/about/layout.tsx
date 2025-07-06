export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        {children}
      </div>
    </section>
  );
}
