export default function SectionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 xs:px-6 overflow-hidden text-white">
      {/* Background image */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/bg-2.webp')" }}
      />
      <div className="fixed inset-0 -z-10 bg-black/55 pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full flex flex-col items-center md:items-start gap-8 sm:gap-10 relative z-10">
        {children}
      </div>
    </div>
  );
}
