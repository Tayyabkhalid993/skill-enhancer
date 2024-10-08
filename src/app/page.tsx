import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    // HomePage

    <div>
      <main className="sm:grid grid-cols-2 min-h-16 mx-6">
        <div className="text-3xl h-64 sm:text-5xl sm:h-full bg-light flex items-center px-5 rounded-3xl">
          <h1>
            Your <span className="span-color font-bold">skill-enhanced</span> journey leads to growth and opportunity.
          </h1>
        </div>
        <div className="justify-self-center">
          <Image src={'/landing-page-image.png'} height={450} width={450} alt="image"></Image>
        </div>
      </main>

      {/*  Recommended Scholarships  */}

      <section className="sm:p-5 rounded-3xl my-5">
        <h2 className="font-bold text-2xl my-8 border-b-4 border-orange-300 max-w-80">Recommended Scholarships</h2>
        <div className="flex flex-wrap justify-start">
          <div className="shadow-lg p-5 rounded-3xl max-w-72 mx-3 my-4">
            <Image src={'/American-University.webp'} height={200} width={200} alt="course image 1"></Image>
            <h3 className="text-xl font-bold my-2">Course Title 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum facilisis.</p>
          </div>
          <div className="shadow-lg p-5 rounded-3xl max-w-72 mx-3 my-4">
            <Image src={'/American-University.webp'} height={200} width={200} alt="course image 1"></Image>
            <h3 className="text-xl font-bold my-2">Course Title 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum facilisis.</p>
          </div>
          <div className="shadow-lg p-5 rounded-3xl max-w-72 mx-3 my-4">
            <Image src={'/American-University.webp'} height={200} width={200} alt="course image 1"></Image>
            <h3 className="text-xl font-bold my-2">Course Title 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum facilisis.</p>
          </div>
          <div className="shadow-lg p-5 rounded-3xl max-w-72 mx-3 my-4">
            <Image src={'/American-University.webp'} height={200} width={200} alt="course image 1"></Image>
            <h3 className="text-xl font-bold my-2">Course Title 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum facilisis.</p>
          </div>
          <div className="shadow-lg p-5 rounded-3xl max-w-72 mx-3 my-4">
            <Image src={'/American-University.webp'} height={200} width={200} alt="course image 2"></Image>
            <h3 className="text-xl font-bold my-2">Course Title 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum facilisis.</p>
          </div>
          <div className="shadow-lg p-5 rounded-3xl max-w-72 mx-3 my-4">
            <Image src={'/American-University.webp'} height={200} width={200} alt="course image 2"></Image>
            <h3 className="text-xl font-bold my-2">Course Title 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum facilisis.</p>
          </div>
        </div>
      </section>

      {/*  Recommended Courses  */}

<section className="sm:p-5 rounded-3xl my-5">
  <h2 className="font-bold text-2xl my-8 border-b-4 border-orange-300 max-w-72">Recommended Courses</h2>
  <div className="flex flex-wrap justify-start">
    <div className="shadow-lg p-5 rounded-3xl max-w-72 mx-3 my-4">
      <Image src={'/American-University.webp'} height={200} width={200} alt="course image 1"></Image>
      <h3 className="text-xl font-bold my-2">Course Title 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum facilisis.</p>
    </div>
    <div className="shadow-lg p-5 rounded-3xl max-w-72 mx-3 my-4">
      <Image src={'/American-University.webp'} height={200} width={200} alt="course image 1"></Image>
      <h3 className="text-xl font-bold my-2">Course Title 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum facilisis.</p>
    </div>
    <div className="shadow-lg p-5 rounded-3xl max-w-72 mx-3 my-4">
      <Image src={'/American-University.webp'} height={200} width={200} alt="course image 1"></Image>
      <h3 className="text-xl font-bold my-2">Course Title 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum facilisis.</p>
    </div>
    <div className="shadow-lg p-5 rounded-3xl max-w-72 mx-3 my-4">
      <Image src={'/American-University.webp'} height={200} width={200} alt="course image 1"></Image>
      <h3 className="text-xl font-bold my-2">Course Title 1</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum facilisis.</p>
    </div>
    <div className="shadow-lg p-5 rounded-3xl max-w-72 mx-3 my-4">
      <Image src={'/American-University.webp'} height={200} width={200} alt="course image 2"></Image>
      <h3 className="text-xl font-bold my-2">Course Title 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum facilisis.</p>
    </div>
    <div className="shadow-lg p-5 rounded-3xl max-w-72 mx-3 my-4">
      <Image src={'/American-University.webp'} height={200} width={200} alt="course image 2"></Image>
      <h3 className="text-xl font-bold my-2">Course Title 2</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum facilisis.</p>
    </div>
  </div>
</section>

      {/* Popular Countries Image Section */}

      <section className="p-5 rounded-3xl my-5 mt-16">
        <h2 className="font-bold text-2xl my-8 border-b-4 border-orange-300 max-w-96">
          Popular Countries Scholarships
        </h2>
        <div className="mx-5">
          <ul className="sm:flex space-x-4 gap-8">
            <li className="shadow-xl duration-500 hover:-translate-y-5 my-8">
              <Link href={'./about'} target="_blank">
                <div className="flex justify-center w-auto">
                  <Image src={'/flagsofcountries/flag-of-United-States-of-America.png'} height={150} width={150}
                    alt="Canadian Flag Image" />
                </div>
              </Link>
              <div className="text-center m-2 font-bold">USA</div>
            </li>
            <li className="shadow-xl duration-500 hover:-translate-y-5 my-8">
              <Link href={'./about'} target="_blank">
                <div className="flex justify-center w-auto">
                  <Image src={'/flagsofcountries/flag-of-Canada.png'} height={150} width={150} alt="Canadian Flag Image" />
                </div>
              </Link>
              <div className="text-center m-2 font-bold">Canada</div>
            </li>
            <li className="shadow-xl duration-500 hover:-translate-y-5 my-8">
              <Link href={'./about'} target="_blank">
                <div className="flex justify-center w-auto">
                  <Image src={'/flagsofcountries/flag-of-Germany.png'} height={150} width={150} alt="Flag of Germany" />
                </div>
              </Link>
              <div className="text-center m-2 font-bold">Germany</div>
            </li>
            <li className="shadow-xl duration-500 hover:-translate-y-5 my-8">
              <Link href={'./about'} target="_blank">
                <div className="flex justify-center w-auto">
                  <Image src={'/flagsofcountries/flag-of-United-Kingdom.png'} height={150} width={150} alt="UK Flag Image" />
                </div>
              </Link>
              <div className="text-center m-2 font-bold">United-Kingdom</div>
            </li>
            <li className="shadow-xl duration-500 hover:-translate-y-5 my-8">
              <Link href={'./about'} target="_blank">
                <div className="flex justify-center">
                  <Image src={'/flagsofcountries/flag-of-Australia.png'} height={150} width={150} alt="Flag of France" />
                </div>
              </Link>
              <div className="text-center m-2 font-bold">Australia</div>
            </li>
          </ul>
        </div>
      </section>

      {/* Latest Posts Section*/}
      <section className="p-5 rounded-3xl">
        <h2 className="font-bold text-2xl my-8 border-b-4 border-orange-300 max-w-40">Just Landed</h2>
        <div className="flex flex-wrap justify-start">
          <div className="shadow-lg p-5 rounded-3xl max-w-72 mx-3 my-4">
            <Image src={'/American-University.webp'} height={200} width={200} alt="course image 1"></
            Image>
            <h3 className="text-xl font-bold my-2">Course Title 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum
              facilisis.</p>
          </div>
          <div className="shadow-lg p-5 rounded-3xl max-w-72 mx-3 my-4">
            <Image src={'/American-University.webp'} height={200} width={200} alt="course image 1"></
            Image>
            <h3 className="text-xl font-bold my-2">Course Title 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum
              facilisis.</p>
          </div>
          <div className="shadow-lg p-5 rounded-3xl max-w-72 mx-3 my-4">
            <Image src={'/American-University.webp'} height={200} width={200} alt="course image 1"></
            Image>
            <h3 className="text-xl font-bold my-2">Course Title 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum
              facilisis.</p>
          </div>
          <div className="shadow-lg p-5 rounded-3xl max-w-72 mx-3 my-4">
            <Image src={'/American-University.webp'} height={200} width={200} alt="course image 1"></
            Image>
            <h3 className="text-xl font-bold my-2">Course Title 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum
              facilisis.</p>
          </div>
          <div className="shadow-lg p-5 rounded-3xl max-w-72 mx-3 my-4">
            <Image src={'/American-University.webp'} height={200} width={200} alt="course image 2"></
            Image>
            <h3 className="text-xl font-bold my-2">Course Title 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum
              facilisis.</p>
          </div>
          <div className="shadow-lg p-5 rounded-3xl max-w-72 mx-3 my-4">
            <Image src={'/American-University.webp'} height={200} width={200} alt="course image 2"></
            Image>
            <h3 className="text-xl font-bold my-2">Course Title 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum
              facilisis.</p>
          </div>
          <div className="shadow-lg p-5 rounded-3xl max-w-72 mx-3 my-4">
            <Image src={'/American-University.webp'} height={200} width={200} alt="course image 2"></
            Image>
            <h3 className="text-xl font-bold my-2">Course Title 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum
              facilisis.</p>
          </div>
          <div className="shadow-lg p-5 rounded-3xl max-w-72 mx-3 my-4">
            <Image src={'/American-University.webp'} height={200} width={200} alt="course image 2"></
            Image>
            <h3 className="text-xl font-bold my-2">Course Title 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum
              facilisis.</p>
          </div> <div className="shadow-lg p-5 rounded-3xl max-w-72 mx-3 my-4">
            <Image src={'/American-University.webp'} height={200} width={200} alt="course image 2"></
            Image>
            <h3 className="text-xl font-bold my-2">Course Title 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum
              facilisis.</p>
          </div>
          <div className="shadow-lg p-5 rounded-3xl max-w-72 mx-3 my-4">
            <Image src={'/American-University.webp'} height={200} width={200} alt="course image 2"></
            Image>
            <h3 className="text-xl font-bold my-2">Course Title 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet orci id nisi dictum
              facilisis.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
