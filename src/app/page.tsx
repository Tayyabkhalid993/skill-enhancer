import Image from "next/image";
import Link from "next/link";
import { FlagsCard, Heading } from "./components/card";
import { Card } from "@/components/ui/card";
import { client, urlFor } from "@/sanity/lib/client";

export const revalidate = 30; // revalidate every 30 seconds

interface dataType {
  heading : string,
  image: any,
  currentSlug: string,
  isRecommended: boolean
}

export const getLatestScholarshipCard = async()=>{
 const res = await client.fetch(`*[_type=='scholarship'] | order(_createdAt desc){
  heading,
  image,
  'currentSlug':slug.current,
  isRecommended
}`);
 return res
}
export const getRecScholarshipCard = async()=>{
 const res = await client.fetch(`*[_type=='scholarship'  && isRecommended == true] | order(_createdAt desc){
  heading,
  image,
  'currentSlug':slug.current,
  isRecommended
}`);
 return res
}

export default async function Home() {
  
  
  const data:dataType[] = await getLatestScholarshipCard();

  const recData:dataType[]= await getRecScholarshipCard();

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
            priority
          ></Image>
        </div>
      </main>

      {/*  Recommended Scholarships  */}

    <section>
    <Heading heading="Recommended Scholarships"></Heading>
    <div className="border-b-4 max-w-64 md:max-w-80 ml-7 border-orange-300 rounded"></div>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 py-6 gap-5">

    {recData.map((post,idx)=> (
      <Link key={idx} href={`scholarship/${post.currentSlug}`}>
  <Card className="min-h-64 p-2 hover:transition-transform">
    <Image src={urlFor(post.image).url()} alt="image" width={300} height={300} className="w-full"></Image>
  <h3 className="font-bold mt-2">{post.heading}</h3>
  </Card>
      </Link>
))}

   
    </div>
    </section>
    
      {/* Popular Countries Image Section */}

    <section className="p-5 rounded-3xl my-5 mt-16">
    <Heading heading="Popular Countries"></Heading>
    <div className="border-b-4 max-w-44 sm:max-w-52 ml-7 border-orange-300 rounded"></div>
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] px-6 py-10 gap-5">
    <Link href=""><FlagsCard imageUrl="/flagsofcountries/flag-of-United-States-of-America.png" countryName="USA"></FlagsCard></Link>
    <Link href=""><FlagsCard imageUrl="/flagsofcountries/flag-of-Canada.png" countryName="Canada"></FlagsCard></Link>
    <Link href=""><FlagsCard imageUrl="/flagsofcountries/flag-of-Germany.png" countryName="Germany"></FlagsCard></Link>
    <Link href=""><FlagsCard imageUrl="/flagsofcountries/flag-of-United-Kingdom.png" countryName="United Kingdom"></FlagsCard></Link>
    <Link href=""><FlagsCard imageUrl="/flagsofcountries/flag-of-Australia.png" countryName="Australia"></FlagsCard></Link>
   </div>
      </section>

      {/* Latest Posts Section*/}
    <section>
    <Heading heading="Just Landed"></Heading>
    <div className="border-b-4 max-w-28 sm:max-w-36 ml-7 border-orange-300 rounded"></div>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-6 py-6 gap-5">
    {data.map((post,idx)=> (
      <Link key={idx} href={`scholarship/${post.currentSlug}`}>
      <Card className="min-h-64 p-2">
        <Image src={urlFor(post.image).url()} alt="image" width={300} height={300} className="object-cover"></Image>
      <h3 className="font-bold mt-2">{post.heading}</h3>
      </Card>
      </Link>
    ))}
    </div>
    </section>
    </div>
  );
}
