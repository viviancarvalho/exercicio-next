export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-b from-[#E8E2DB] to-white py-20">

        <div className="max-w-2xl mx-auto flex flex-col items-center text-center px-4">
            
            <h1 className="text-4xl font-bold text-gray-800 leading-tight">
            Explore países ao redor do mundo
            </h1>

            <p className="mt-4 text-gray-600 text-lg">
            Descubra informações essenciais como capital e moeda de forma rápida e intuitiva.
            </p>

            <button className="mt-6 bg-[#547792] text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition">
            Explorar países
            </button>

        </div>

    </section>
  );
}