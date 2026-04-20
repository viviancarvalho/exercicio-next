import { Country } from "../types/country";

type Props = {
    country: Country;
};

export default function CountryCard({ country }: Props) {
    return (
        <div className="bg-[#547792] shadow-md rounded-2xl p-4 w-90 hover:scale-105 transition">
            <h3 className="text-lg font-semibold mb-2 text-[#FAB95B]">
                {country.name.common}
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-300">
                <span className="text-white"><strong>Capital:</strong></span> {country.capital?.[0] || "N/A"}
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-300">
                <span className="text-white"><strong>Moeda:</strong></span>{" "}
                {Object.values(country.currencies || {})[0]?.name || "N/A"}
            </p>
        </div>
    );
}