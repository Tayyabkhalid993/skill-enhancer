import Image from "next/image";
import Link from "next/link";
import Card, { FlagsCard, Heading } from "./components/card";
import Footer from "./components/footer";

export default function Home() {
  return (
    // HomePage

    <div>
      <main className="grid grid-cols-1 md:grid-cols-2 min-h-16 mx-6">
        <div className="text-3xl h-64 sm:text-4xl  xl:text-5xl md:h-full bg-light flex items-center px-5 rounded-3xl">
          <h1>
            Your <span className="span-color font-bold">skill-enhanced</span>{" "}
            journey leads to growth and opportunity.
          </h1>
        </div>
        <div className="justify-self-center">
          <Image
            src={"/landing-page-image.png"}
            height={450}
            width={450}
            alt="image"
          ></Image>
        </div>
      </main>

      {/*  Recommended Scholarships  */}

    <section>
    <Heading heading="Recommended Scholarships"></Heading>
    <div className="border-b-4 max-w-64 md:max-w-80 ml-7 border-orange-300 rounded"></div>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 py-6 gap-5">
    <Card imageUrl="/American-University.webp" title="New Card 01" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum "></Card>
    <Card imageUrl="/American-University.webp" title="New Card 02" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum"></Card>
    <Card imageUrl="/American-University.webp" title="New Card 03" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum"></Card>
    <Card imageUrl="/American-University.webp" title="New Card 04" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum"></Card>
    <Card imageUrl="/American-University.webp" title="New Card 05" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum"></Card>
    <Card imageUrl="/American-University.webp" title="New Card 06" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum"></Card>
    </div>
    </section>

      {/*  Recommended Courses  */}

    <section>
    <Heading heading="Recommended Courses"></Heading>
    <div className="border-b-4 max-w-56 sm:max-w-72 ml-7 border-orange-300 rounded"></div>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 py-6 gap-5">
    <Card imageUrl="/American-University.webp" title="New Card 01" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum "></Card>
    <Card imageUrl="/American-University.webp" title="New Card 02" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum"></Card>
    <Card imageUrl="/American-University.webp" title="New Card 03" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum"></Card>
    <Card imageUrl="/American-University.webp" title="New Card 04" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum"></Card>
    <Card imageUrl="/American-University.webp" title="New Card 05" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum"></Card>
    <Card imageUrl="/American-University.webp" title="New Card 06" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum"></Card>
    </div>
    </section>

      {/* Popular Countries Image Section */}

    <section className="p-5 rounded-3xl my-5 mt-16">
    <Heading heading="Popular Countries"></Heading>
    <div className="border-b-4 max-w-44 sm:max-w-52 ml-7 border-orange-300 rounded"></div>
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] px-6 py-10 gap-5">
    <Link href=""><FlagsCard imageUrl="/flagsofcountries/flag-of-United-States-of-America.png" countryName="USA"></FlagsCard></Link>
    <Link href=""><FlagsCard imageUrl="/flagsofcountries/flag-of-Canada.png" countryName="Canda"></FlagsCard></Link>
    <Link href=""><FlagsCard imageUrl="/flagsofcountries/flag-of-Germany.png" countryName="Germany"></FlagsCard></Link>
    <Link href=""><FlagsCard imageUrl="/flagsofcountries/flag-of-United-Kingdom.png" countryName="United KIngdom"></FlagsCard></Link>
    <Link href=""><FlagsCard imageUrl="/flagsofcountries/flag-of-Australia.png" countryName="Australia"></FlagsCard></Link>
   </div>
      </section>

      {/* Latest Posts Section*/}
    <section>
    <Heading heading="Just Landed"></Heading>
    <div className="border-b-4 max-w-28 sm:max-w-36 ml-7 border-orange-300 rounded"></div>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 py-6 gap-5">
    <Card imageUrl="/American-University.webp" title="New Card 01" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum "></Card>
    <Card imageUrl="/American-University.webp" title="New Card 02" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum"></Card>
    <Card imageUrl="/American-University.webp" title="New Card 03" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum"></Card>
    <Card imageUrl="/American-University.webp" title="New Card 04" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum"></Card>
    <Card imageUrl="/American-University.webp" title="New Card 05" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum"></Card>
    <Card imageUrl="/American-University.webp" title="New Card 06" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum"></Card>
    </div>
    </section>
    <Footer/>
    </div>
  );
}
