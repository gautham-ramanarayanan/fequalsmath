import Carousel from "../../components/Carousel";
import Instructors from "../../components/Instructors";
import NavigationBar from "../../components/NavigationBar";
import Testimonials from "../../components/Testimonials";
import Hero from "../../components/Hero";
import { carouselImages, whoweare, instructors, testimonials, currentClasses } from "../globals/globals";
import Courses from "../../components/Courses";
import SignUpForm from "../../components/SignUpForm";


export default function Home() {

  return (
    <>
    <NavigationBar />
    <main className="min-h-fit bg-background" id="main">
            <div className="block ">
                <section className="max-h-96 flex flex-col justify-center -nowrap mb-24">
                    <section className="flex max-h-96 mx-auto">
                        <Hero className="flex-grow basis-full" />
                    </section>
                    <h1 className="font-bold text-3xl mx-auto p-4 text-center text-primary">Summer Session registration is open! <br /> Summer classes are free!</h1>
                </section>
            </div>
            <div className="p-4 py-8 mx-auto flex flex-col items-center justify-center max-w-4xl">
                <h1 className="text-4xl text-txt font-bold p-2">
                    What is F=Math?
                </h1>
                <p className="text-lg text-txt font-medium p-4">
                    {whoweare}
                </p>
            </div>   
    </main>
    <main className="min-h-min bg-background-second" id="Instructors">
        <div className="p-8 mx-auto flex flex-col items-center justify-center max-w-4xl">
            <h1 className="text-4xl text-txt font-bold p-2">
                Our Team
            </h1>
            <Instructors instructors={instructors} />
        </div>
    </main>
    <main className="min-h-min bg-background" id="Curriculum">
        <div className="py-8 mx-auto flex flex-col items-center justify-center min-h-fit">
            <h1 className="text-4xl text-txt font-bold p-2 pb-4">
                Current Courses
            </h1>
            <Courses classes={currentClasses} />
        </div>
    </main>
    <main className="min-h-min bg-background-second" id="Testimonial">
        <div className="p-8 mx-auto flex flex-col items-center justify-center max-w-4xl">
            <h1 className="text-4xl text-txt font-bold p-4">
                Testimonials
            </h1>
            <Testimonials testimonials={testimonials} maxCount={3} />
        </div>
    </main>
    <main className="min-h-min bg-background" id="Enroll">
        <div className="mx-auto p-8 my-8 flex flex-col items-center justify-center max-w-4xl rounded-xl shadow-xl">
            <h1 className="text-4xl text-txt font-bold p-4">
                Enroll
            </h1>
            <SignUpForm />

        </div>
    </main>
    
    </>
      )
}
