import Carousel from "../../components/Carousel";
import Instructors from "../../components/Instructors";
import NavigationBar from "../../components/NavigationBar";
import Testimonials from "../../components/Testimonials";
import Hero from "../../components/Hero";
import { carouselImages, whoweare, instructors, testimonials, currentClasses, currentFormUrl, syllabusLink } from "../globals/globals";
import Courses from "../../components/Courses";
import SignUpForm from "../../components/SignUpForm";
import GoogleSignUpForm from "../../components/GoogleSignUpForm";


export default function Home() {

  return (
    <>
    <NavigationBar />
    <main className="min-h-fit bg-background" id="main">
            <div className="block ">
                <section className="max-h-96 flex flex-col justify-center -nowrap mb-12">
                    <section className="flex max-h-96 mx-auto mb-12">
                        <Hero className="flex-grow basis-full" />
                    </section>
                </section>
            </div>
            <div className="p-4 py-8 mx-auto flex flex-col items-center justify-center max-w-4xl mb-16">
                <h1 className="text-4xl text-txt font-bold p-2">
                    Why F=Math?
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
            <Courses classes={currentClasses} syllabusLink={syllabusLink} />
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
        <div className="mx-auto p-8 flex flex-col items-center justify-center max-w-4xl rounded-xl shadow-xl">
            <h1 className="text-4xl text-txt font-bold p-4">
                Enroll
            </h1>
            {/* <SignUpForm currentClasses={currentClasses} /> */}
            <GoogleSignUpForm />
        </div>
    </main>
    
    </>
      )
}
