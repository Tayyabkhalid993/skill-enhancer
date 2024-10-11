import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-light rounded-lg mb-2 text-gray-700 text-center p-4 sm:flex sm:flex-row-reverse sm:justify-around items-center lg:justify-between lg:px-8">
            <div className="flex justify-center">
                <div className="p-2"><a href={'/'}>About Us</a></div>
                <div className="p-2"><a href={'/'}>Contact Us</a></div>
                <div className="p-2"><a href={'/'}>Disclaimer</a></div>
                <button className="border px-2 rounded-lg scroll-smooth">
                    <Link href={'#top'}><ArrowUp/></Link>
                </button>
            </div>
            <div className="m-3">
                &copy; 2024 SkillEnhancer.pk | All rights reserved.
            </div>
        </div>
    )
}
