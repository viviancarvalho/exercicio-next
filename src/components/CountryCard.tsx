import { Country } from "../types/country";

type Props = {
  country: Country;
};

export default function CountryCard({ country }: Props) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition w-full max-w-sm">
      
      <div className="flex items-center gap-3 mb-3">
        <img
          src={country.flags?.png}
          alt={country.name.common}
          className="w-10 h-6 object-cover rounded-sm"
        />

        <h3 className="text-lg font-semibold text-gray-800">
          {country.name.common}
        </h3>
      </div>

      <div className="flex flex-col gap-1 text-sm text-gray-600">
        <p>
          <span className="font-medium text-gray-700">Capital:</span>{" "}
          {country.capital?.[0] || "N/A"}
        </p>

        <p>
          <span className="font-medium text-gray-700">Moeda:</span>{" "}
          {Object.values(country.currencies || {})[0]?.name || "N/A"}
        </p>
       </div>

    </div>
  );
}