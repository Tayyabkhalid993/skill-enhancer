import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"



export default function Header() {
    return (
        <header className="px-7 py-5">
            <div className="flex justify-between items-center">
                <h1 className="span-color bg-light text-2xl font-bold p-2 rounded-xl">SKILL ENHANCER</h1>
                <nav>
                    <Sheet>
                        <SheetTrigger className="md:hidden px-2"><Menu /></SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetDescription>
                                    <ul>
                                        <li className="font-bold text-lg m-5">Home</li>
                                        <li className="font-bold text-lg m-5">Scholarships</li>
                                        <li className="font-bold text-lg m-5">Free Courses</li>
                                        <li className="font-bold text-lg m-5">About</li>
                                        <li className="font-bold text-lg m-5">Contact</li>
                                    </ul>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                    <ul className="hidden md:flex font-bold">
                        <li className="px-4"><Link href={'./'}>Home</Link></li>
                        <li className="px-4 flex">
                            <DropdownMenu>
                                <DropdownMenuTrigger>Scholarships</DropdownMenuTrigger>
                                <ChevronDown />
                                <DropdownMenuContent>
                                    <DropdownMenuItem className="font-bold">Countries wise</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="font-bold">Duration wise</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="font-bold">Level wise</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                        <li className="px-4"><Link href={'./'}>Free Courses</Link></li>
                        <li className="px-4"><Link href={'./'}>About</Link></li>
                        <li className="px-4"><Link href={'./'}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}






