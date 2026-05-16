const images = [
  {
    src: "/gallery/1.jpg",
    title: "Kids Education on field for the Hope",
    category: "EGGMPIRE",
  },
  {
    src: "/gallery/2.jpg",
    title: "Boat for River Communities",
    category: "EGGMPIRE",
  },
  {
    src: "/gallery/3.jpg",
    title: "Every Week Eggs for Healtier Communities",
    category: "EGGMPIRE",
  },
  {
    src: "/gallery/4.jpg",
    title: "Egg Farm Inspection",
    category: "EGGMPIRE",
  },
  {
    src: "/gallery/5.jpg",
    title: "Reforest at Disaster Zones",
    category: "EGGMPIRE",
  },
  {
    src: "/gallery/6.jpg",
    title: "Close Cooperation with Local Governments",
    category: "EGGMPIRE",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#c8960f] uppercase tracking-[0.3em] mb-4">
            Eggmpire Visual Archive
          </p>

          <h1 className="text-5xl md:text-7xl font-bold">
            Gallery
          </h1>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Moments, ecosystem activities, sustainability actions,
            and the evolution of Eggmpire.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-[#c8960f]/20 bg-black/40"
            >
              <img
                src={image.src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-[#c8960f] text-sm uppercase tracking-widest">
                  Eggmpire
                </p>

                <h2 className="text-2xl font-bold text-white mt-2">
                  Sustainability Movement
                </h2>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}