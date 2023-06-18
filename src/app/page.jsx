import Carousel from "../../components/Carousel";
import InstructorCard from "../../components/InstructorCard";
import Instructors from "../../components/Instructors";
import NavigationBar from "../../components/NavigationBar";
import Testimonials from "../../components/Testimonials";
import { carouselImages, whoweare, instructors, testimonials } from "../globals/globals";


export default function Home() {

  return (
    <>
    <NavigationBar />
    <main className="min-h-fit bg-background" id="main">
            <div className="block max-h-min">
                <section className="p-4 mx-auto flex justify-center -nowrap justify-center">
                    <div className="relative max-w-max xl:w-1/2 2xl:w-1/2">
                        <Carousel images={
                            carouselImages
                        } />
                    </div>
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
        <div id="placeholder" className="h-96"></div>
    </main>
    <main className="min-h-min bg-background-second" id="Testimonial">
        <div className="p-8 mx-auto flex flex-col items-center justify-center max-w-4xl">
            <h1 className="text-4xl text-txt font-bold p-4">
                Testimonials
            </h1>
            <Testimonials testimonials={testimonials} maxCount={3} />
        </div>
    </main>
    
    </>
      )
}
