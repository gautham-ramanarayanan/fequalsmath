import Link from "next/link";
export default function NavigationBar() {

    return (
            <header className="bg-background text-txt sticky top-0 z-10" style={{ position: "-webkit-sticky" }}>
            <section className="max-w-7xl mx-auto p-6 flex justify-between items-center">
                <h1 className="text-3xl font-bold">
                    <Link href="#main" className="scroll-smooth">F=Math</Link>
                </h1>
                <button className="md:hidden text-3xl">&#9776;</button>
                <nav className="hidden md:inline space-x-8">
                    <Link href="#Instructors" className="hover:opacity-70 scroll-smooth">Our Team</Link>
                    <Link href="#Curriculum" className="hover:opacity-70 scroll-smooth">Curriculum</Link>
                    <Link href="#Testimonial" className="hover:opacity-70 scroll-smooth">Testimonial</Link>
                    <Link href="#Events" className="hover:opacity-70 scroll-smooth">Events</Link>
                    <Link href="/FAQ" className="hover:opacity-70 scroll-smooth">FAQ</Link>
                    <Link href="#Enroll">
                        <div className="text-txt-light inline bg-primary px-8 py-4 rounded-xl">
                            <p className="font-bold inline">Enroll</p>
                        </div>
                    </Link>
                </nav>
                
            </section>
        </header>
    );
}

