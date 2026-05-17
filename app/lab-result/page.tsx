const results = [
  {
    src: "/lab/1.png",
    title: "Lab Test Sucofindo Omega 3, Omega 6, and Omega 9",
    description: "Complete analysis of omega fatty acid content in EGGCOLOGIC EGGS.",
  },
  {
    src: "/lab/2.png",
    title: "SIG Lab Test Minerals Content Analysis",
    description: "There is 12 Types of Mineral inside EGGCOLOGIC EGGS.",
  },
  {
    src: "/lab/3.jpg",
    title: "SIG Lab Test of Vitamin, Omega and Amino Acid page 1",
    description: "18 Amino Acids and 9 of it Essential (Not produce from Human Bosy)",
  },
  {
    src: "/lab/4.jpg",
    title: "SIG Lab Test of Vitamin, Omega and Amino Acid page 2",
    description: "Omega 3, 6 and 9 + Vitamin A, B2, B5, D3, E, K1.",
  },
  {
    src: "/lab/5.png",
    title: "BPMSPH (Balai Pengujian Mutu dan Sertifikasi Produk Hewan) Lab Test of Food Security",
    description: "Omega 3, 6 and 9 + Vitamin A, B2, B5, D3, E, K1.",
  },
  {
    src: "/lab/6.png",
    title: "BPMSPH Lab Test of Alt Enumerasi",
    description: "Negative Result (Perfect Score).",
  },
  {
    src: "/lab/7.png",
    title: "BPMSPH Lab Test of Enterobacteriaceae Enumerasi",
    description: "Negative Result (Perfect Score).",
  },
  {
    src: "/lab/8.png",
    title: "BPMSPH Lab Test Residue of Antibiotics",
    description: "Negative Result (Perfect Score).",
  },
  {
    src: "/lab/9.png",
    title: "BPMSPH Lab Test of Salmonella",
    description: "Negative Result (Perfect Score).",
  },
];
export default function LabResultPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#c8960f] uppercase tracking-[0.3em] mb-4">
            Eggcologic Laboratory
          </p>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Lab Results
          </h1>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed">
            Every batch of EGGM is rigorously tested in our EGGCOLOGIC laboratories
            to ensure premium quality, food safety, and sustainability standards.
          </p>
        </div>

        {/* Lab Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {results.map((item, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-[#c8960f]/20 rounded-3xl overflow-hidden hover:border-[#c8960f]/50 transition-all duration-500"
            >

              {/* A4 Image */}
              <div className="bg-white p-4">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full aspect-[210/297] object-cover rounded-xl"
                />
              </div>

              {/* Caption */}
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">
                  {item.title}
                </h2>

                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </main>
  );
}