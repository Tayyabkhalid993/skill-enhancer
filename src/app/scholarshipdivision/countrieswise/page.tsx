'use client'
import Link from "next/link"
import Image from "next/image"
interface countriesType {
    name: string,
    imageUrl: string,
    slug : string
}

export default function CountriesWise() {

    const asianCountries: countriesType[] = [
        { name: "China", slug: "china" , imageUrl: "/flagsofcountries/flag-of-China.png" },
        { name: "Japan", slug: "japan", imageUrl: "/flagsofcountries/flag-of-Japan.png" },
        { name: "Saudi Arabia", slug:"saudi-arabia", imageUrl: "/flagsofcountries/flag-of-Saudi-Arabia.png" },
        { name: "Singapore", slug:"singapore", imageUrl: "/flagsofcountries/flag-of-Singapore.png" },
        { name: "Thailand", slug:"thailand", imageUrl: "/flagsofcountries/flag-of-Thailand.png" },
        { name: "UAE", slug: "uae", imageUrl: "/flagsofcountries/flag-of-United-Arab-Emirates.png" },
    ];

    const africanCountries: countriesType[] = [
        { name: "Africa", slug: "africa" , imageUrl: "/flagsofcountries/flag-of-South-Africa.png" },
    ];

    const australianCountries: countriesType[] = [
        { name: "New Zealand", slug: "new-zealand" , imageUrl: "/flagsofcountries/flag-of-New-Zealand.png" },
        { name: "Australia", slug: "australia" , imageUrl: "/flagsofcountries/flag-of-Australia.png" },
    ];

    const northAmericanCountries: countriesType[] = [
        { name: "Canada", slug: "canada" , imageUrl: "/flagsofcountries/flag-of-Canada.png" },
        { name: "USA", slug: "usa" , imageUrl: "/flagsofcountries/flag-of-United-States-of-America.png" },
    ];

    const europeCountries: countriesType[] = [
        { name: "Austria", slug: "austria" , imageUrl: "/flagsofcountries/flag-of-Austria.webp" },
        { name: "Belgium", slug: "belgium" , imageUrl: "/flagsofcountries/flag-of-Belgium.webp" },
        { name: "Denmark", slug: "denmark" , imageUrl: "/flagsofcountries/flag-of-Denmark.png" },
        { name: "France", slug: "france" , imageUrl: "/flagsofcountries/flag-of-France.png" },
        { name: "Germany", slug: "germany" , imageUrl: "/flagsofcountries/flag-of-Germany.png" },
        { name: "Hungry", slug: "hungry" , imageUrl: "/flagsofcountries/flag-of-Hungary.png" },
        { name: "Ireland", slug: "ireland" , imageUrl: "/flagsofcountries/flag-of-Ireland.png" },
        { name: "Italy", slug: "italy" , imageUrl: "/flagsofcountries/flag-of-Italy.png" },
        { name: "Netherlands", slug: "netherlands" , imageUrl: "/flagsofcountries/flag-of-Netherlands.png" },
        { name: "Norway", slug: "norway" , imageUrl: "/flagsofcountries/flag-of-Norway.png" },
        { name: "Poland", slug: "poland" , imageUrl: "/flagsofcountries/flag-of-Poland.png" },
        { name: "Romania", slug: "romania" , imageUrl: "/flagsofcountries/flag-of-Romania.png" },
        { name: "Spain", slug: "spain" , imageUrl: "/flagsofcountries/flag-of-Spain.png" },
        { name: "Sweden", slug: "sweden" , imageUrl: "/flagsofcountries/flag-of-Sweden.png" },
        { name: "Switzerland", slug: "switzerland" , imageUrl: "/flagsofcountries/flag-of-Switzerland.png" },
        { name: "Turkey", slug: "turkey" , imageUrl: "/flagsofcountries/flag-of-Turkey.png" },
        { name: "UK", slug: "uk" , imageUrl: "/flagsofcountries/flag-of-United-Kingdom.png" },
    ];


    return (
        <div>
            <h1 className="font-bold text-lg sm:text-2xl px-8 py-2 mt-10 underline decoration-orange-300 decoration-4 underline-offset-8">Countries wise Scholarships</h1>

                {/* ----------------Asia-------------- */}

            <section>
                <div className="px-8 py-4">
                    <h2 className="font-bold text-lg sm:text-2xl px-8 py-2 mt-10 underline decoration-orange-300 decoration-4 underline-offset-8">Asia</h2>
                </div>

                <div className="m-4 flex flex-col items-center">
                    <div className=" grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                        {asianCountries.map((country, idx) => (
                            <Link key={idx} href={`/scholarshipdivision/countrieswise/scholarships/country/${country.slug}`}>
                                <div className="cursor-pointer my-6 mx-2">
                                    <Image width={200} height={200} src={country.imageUrl} alt={country.name} className="ease-in duration-300 hover:scale-105" />
                                    <h3 className="font-bold text-center text-lg">{country.name}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

                        {/* --------------Africa---------------- */}


            <section>
                <div className="px-8 py-4">
                    <h2 className="font-bold text-lg sm:text-2xl px-8 py-2 mt-10 underline decoration-orange-300 decoration-4 underline-offset-8">Africa</h2>
                </div>

                <div className="m-4 flex flex-col items-center">
                    <div className=" grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                        {africanCountries.map((country, idx) => (
                            <Link key={idx} href={`/scholarshipdivision/countrieswise/scholarships/country/${country.slug}`}>
                                <div className="cursor-pointer my-6 mx-2">
                                    <Image width={200} height={200} src={country.imageUrl} alt={country.name} className="ease-in duration-300 hover:scale-105" />
                                    <h3 className="font-bold text-center text-lg">{country.name}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

                    {/* ---------------Australia------------ */}
                        

            <section>
                <div className="px-8 py-4">
                    <h2 className="font-bold text-lg sm:text-2xl px-8 py-2 mt-10 underline decoration-orange-300 decoration-4 underline-offset-8">Australia</h2>
                </div>

                <div className="m-4 flex flex-col items-center">
                    <div className=" grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                        {australianCountries.map((country, idx) => (
                            <Link key={idx} href={`/scholarshipdivision/countrieswise/scholarships/country/${country.slug}`}>
                                <div className="cursor-pointer my-6 mx-2">
                                    <Image width={200} height={200} src={country.imageUrl} alt={country.name} className="ease-in duration-300 hover:scale-105" />
                                    <h3 className="font-bold text-center text-lg">{country.name}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>


                        {/* -------------Europe------------ */}

            <section>
                <div className="px-8 py-4">
                    <h2 className="font-bold text-lg sm:text-2xl px-8 py-2 mt-10 underline decoration-orange-300 decoration-4 underline-offset-8">Europe</h2>
                </div>

                <div className="m-4 flex flex-col items-center">
                    <div className=" grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                        {europeCountries.map((country, idx) => (
                            <Link key={idx} href={`/scholarshipdivision/countrieswise/scholarships/country/${country.slug}`}>
                                <div className="cursor-pointer my-6 mx-2">
                                    <Image width={200} height={200} src={country.imageUrl} alt={country.name} className="ease-in duration-300 hover:scale-105" />
                                    <h3 className="font-bold text-center text-lg">{country.name}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

                  {/* -------------North America------------ */}

             <section>
                <div className="px-8 py-4">
                    <h2 className="font-bold text-lg sm:text-2xl px-8 py-2 mt-10 underline decoration-orange-300 decoration-4 underline-offset-8">North America</h2>
                </div>

                <div className="m-4 flex flex-col items-center">
                    <div className=" grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                        {northAmericanCountries.map((country, idx) => (
                            <Link key={idx} href={`/scholarshipdivision/countrieswise/scholarships/country/${country.slug}`}>
                                <div className="cursor-pointer my-6 mx-2">
                                    <Image width={200} height={200} src={country.imageUrl} alt={country.name} className="ease-in duration-300 hover:scale-105" />
                                    <h3 className="font-bold text-center text-lg">{country.name}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
