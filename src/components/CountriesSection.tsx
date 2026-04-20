import { getCountries } from "../services/countries";
import CountryCard from "../components/CountryCard";

export default async function CountriesSection() {
    const countries = await getCountries();
    const firstFive = countries.slice(0, 5);

    return (
        <section className="flex flex-col items-center gap-6 mt-10">
            <h2 className="text-[#1A3263] text-2xl font-bold">Países</h2>
            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {firstFive.map((country, index) => (
                        <CountryCard key={index} country={country} />
                    ))}
                </div>
        </section>
    );
}