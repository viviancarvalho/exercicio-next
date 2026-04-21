import { Country } from "../types/country";

export async function getCountries(): Promise<Country[]> {
    const res = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,capital,currencies,flags"
    );

    const data = await res.json();

    return data;
}

