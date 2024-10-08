import Link from "next/link";

export default function Header (){
    return (
        <header className="px-10 py-5">
           <div className="flex justify-between items-center">
            <h1 className="span-color bg-light text-2xl font-bold p-2 rounded-xl">SKILL ENHANCER</h1>
            <nav>
            <ul className="flex font-bold">
                <li className="px-4"><Link href={'./'}>Home</Link></li>
                <li className="px-4"><Link href={'./'}>Scholarships</Link></li>
                <li className="px-4"><Link href={'./'}>Free Courses</Link></li>
                <li className="px-4"><Link href={'./'}>About</Link></li>
                <li className="px-4"><Link href={'./'}>Contact</Link></li>
            </ul>
            </nav>
           </div>
        </header>
    )
}






