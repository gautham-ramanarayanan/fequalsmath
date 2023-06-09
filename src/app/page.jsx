import Image from 'next/image'

export default function Home() {
  return (
    <>
    <header className="bg-gray-800 text-white sticky top z-10">
            <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
                <h1 className="text-3xl font-medium">
                    <a href="#main">F=Math</a>
                </h1>
                <button className="md:hidden text-3xl">&#9776;</button>
                <nav className="hidden md:inline space-x-8">
                    <a href="#Instructors" className="hover:opacity-80">Instructors</a>
                    <a href="#Curriculum" className="hover:opacity-90">Curriculum</a>
                    <a href="#Testimonials" className="hover:opacity-80">Testimonials</a>
                    <a href="#Past Events" className="hover:opacity-90">Past Events</a>
                    <a href="#Upcoming" className="hover:opacity-90">Upcoming</a>
                    <a href="#FAQ" className="hover:opacity-90">FAQ</a>
                </nav>
                
            </section>
        </header>
    <main className="min-h-screen bg-slate-50 dark:bg-black dark:text-white">
        
    </main>

    </>
      )
}
