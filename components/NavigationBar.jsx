"use client";

import { links } from "@/globals/globals";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavigationBar() {
    const [ isOpen, setIsOpen ] = useState(false);
    
    useEffect(() => {
        const handleResize = () => setIsOpen(false);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    });
    return (
        <>
            <header className="block bg-background text-txt top-0 w-screen z-20 sticky" style={{ position: "-webkit-sticky" }}>
            <section className="max-w-7xl mx-auto p-6 flex justify-between items-center ">
                <h1 className="text-3xl font-bold">
                    <Link href="#main" className="scroll-smooth">F=Math</Link>
                </h1>
                <button className="md:hidden text-3xl" onClick={() => setIsOpen(!isOpen)}>&#9776;</button>
                
                <nav className="hidden md:inline space-x-8">
                        {links
                            .map((link) => {
                                if (link.highlight) {
                                    return (
                                        <Link key={link.displayName} href={link.link} onClick={() => setIsOpen(false)} className="hover:opacity-70 scroll-smooth">
                                            <div className="text-txt-light inline bg-primary px-8 py-4 rounded-xl">
                                                <p className="font-bold inline">{link.displayName}</p>
                                            </div>
                                        </Link>
                                    );
                                }
                                return (
                                    <Link key={link.displayName} href={link.link} onClick={() => setIsOpen(false)} className="hover:opacity-70 scroll-smooth">{link.displayName}</Link>
                                );
                            })}
                </nav>
                
            </section>
        </header>
            {isOpen && <header className="block bg-background text-txt top-0 w-screen z-20 fixed">
            <section className="max-w-7xl mx-auto p-6 flex justify-between items-center ">
                <h1 className="text-3xl font-bold">
                    <Link href="#main" className="scroll-smooth">F=Math</Link>
                </h1>
                <button className="md:hidden text-3xl" onClick={() => setIsOpen(!isOpen)}>&#9776;</button>
            </section>
                <div className="block sm:hidden bg-background text-txt top-0 w-screen pt-0 p-4 z-20">
                <ul>
                    {links.map((link) => (
                        <li key={link.displayName} className="pb-4">
                            <Link href={link.link} onClick={() => setIsOpen(false)} className="block hover:opacity-70 scroll-smooth">{link.displayName}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            </header>
            }
        {isOpen && <div className="w-screen h-screen opacity-50 bg-txt fixed z-10" onClick={() => setIsOpen(false)}></div>}
        </>
    );
}

