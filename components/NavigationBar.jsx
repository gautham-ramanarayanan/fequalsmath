import Link from "next/link";
export default function NavigationBar() {

    return (
            <header className="bg-background text-txt sticky top z-10">
            <section className="max-w-7xl mx-auto p-6 flex justify-between items-center">
                <h1 className="text-3xl font-bold">
                    <a href="#main">F=Math</a>
                </h1>
                <button className="md:hidden text-3xl">&#9776;</button>
                <nav className="hidden md:inline space-x-8">
                    <Link href="#Instructors" className="hover:opacity-70">Our Team</Link>
                    <Link href="#Curriculum" className="hover:opacity-70">Curriculum</Link>
                    <Link href="#Testimonal" className="hover:opacity-70">Testimonial</Link>
                    <Link href="#Events" className="hover:opacity-70">Events</Link>
                    <Link href="/FAQ" className="hover:opacity-70">FAQ</Link>
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

