import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    DropdownMenuSub,
    DropdownMenuSubTrigger,
    DropdownMenuSubContent
} from "@/components/ui/dropdown-menu";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


export default function Header() {
    return (
        <header id="top" className="px-5 py-5">
            <div className="flex justify-between items-center">
                <h1 className="span-color bg-light text-2xl md:text-base lg:text-2xl font-bold p-2 rounded-xl">
                    <Link href={'/'}>SKILL ENHANCER</Link>
                </h1>
                <nav>
                    <Sheet modal={false} >
                        <SheetTrigger className="md:hidden px-2"><Menu /></SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetDescription>
                                    <ul>
                                        <li className="font-bold text-lg p-3"><Link href={'/'}>Home</Link></li>
                                        <li className=""><Accordion type="single" collapsible>
                                            <AccordionItem className="border-none " value="item-1">
                                                <AccordionTrigger className="font-bold text-lg p-3">Scholarships</AccordionTrigger>
                                                <AccordionContent className="font-bold">
                                                    Countries wise 
                                                </AccordionContent>
                                                <AccordionContent className="font-bold">
                                                    Level Wise
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                        </li>
                                        <li className="font-bold text-lg p-3"><Link href={'/freecourses'}>Free Courses</Link></li>
                                        <li className="font-bold text-lg p-3"><Link href={'/about'}>About</Link></li>
                                        <li className="font-bold text-lg p-3"><Link href={'/contact'}>Contact</Link></li>
                                    </ul>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                    <ul className="hidden md:flex font-bold">
                        <li className="px-4"><Link href={'/'}>Home</Link></li>
                        <li className="pl-2 flex outline-none">
                            <DropdownMenu modal={false}>
                                <DropdownMenuTrigger className="flex items-center">
                                    Scholarships <ChevronDown className="ml-2" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem className="font-bold">Countries wise</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    {/* Duration wise with a Submenu */}
                                    <DropdownMenuSub>
                                        <DropdownMenuSubTrigger className="font-bold">Level wise</DropdownMenuSubTrigger>
                                        <DropdownMenuSubContent>
                                            <DropdownMenuItem className="font-bold">Undergraduate</DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem className="font-bold">Postgraduate</DropdownMenuItem>
                                        </DropdownMenuSubContent>
                                    </DropdownMenuSub>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                        <li className="px-4"><Link href={'/freecourses'}>Free Courses</Link></li>
                        <li className="px-4"><Link href={'/about'}>About</Link></li>
                        <li className="px-4"><Link href={'/contact'}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
