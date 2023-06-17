import Carousel from "../../components/Carousel";
import InstructorCard from "../../components/InstructorCard";
import Instructors from "../../components/Instructors";
import NavigationBar from "../../components/NavigationBar";
import 'fs';
import TestimonialCard from "../../components/TestimonialCard";
import Testimonials from "../../components/Testimonials";


export default function Home() {
    const images = ["/groupphoto.png", "/teaching.png", "studentseating.png"];

    const whoweare = "F=Math is a non-profit math competition preparation program taught by winners and qualifiers of the USA Junior Math Olympiad. The curriculum is designed not only to prepare students for math competitions, but also for their school math classes. 100% of the program fee will be donated to non-profit organizations.";

    const instructors = [
        {
            name: "Kevin Wang",
            img: "/kavnwang3.png",
            description:"Kevin is an upcoming senior attending Lebanon Trail High School. He has years of experience competing at the highest level of math competitions, culminating in a top 24 win at this year's junior national olympiad. Furthermore, he has taught English and math competition courses for over two years, and currently works as a teaching assistant for USA IMO coach Po-Shen Loh. Kevin is incredibly passionate about the success and education of his students, and will work to ensure that every student can reach their fullest potential."
        },
        {
            name: "Kevin Wang 2 (Placeholder)",
            img: "/kavnwang.png",
            description: "Aaron is an upcoming junior attending Plano West Senior High School. He has earned numerous accolades at the national level in math competitions, being a four-time AMC 10 DHR awardee (top 1%) and a USAJMO Honorable Mention. Furthermore, he has experience teaching AMC 10 and Math Counts for Magic Math Plano and Fantastic Mathletes."
        },
        {
            name: "Kevin Wang 3 (Placeholder)",
            img: "/kavnwang2.png",
            description: "Daniel is a talented high school junior who wishes to use his talents in math to benefit his community. His notable achievements include being a USAJMO winner and scoring a 12 on the 2022 AIME. Furthermore, he has tutored high school math for a nonprofit organization named Ace Academy. He looks forward to meeting everyone in class!"
        },
        {
            name: "Placeholder",
            img: "/fakesourceimg.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ];

    const testimonials = [
        {
            name: "Parent of 9th grade student",
            comment: "A teenage instructor will surprise you with his passion and dedication to math. Your kids will not only sharpen their mathematics skills but also get to know an inspiring role model!"
        },
        {
            name: "Jenny C.",
            comment: "This summer camp has great handouts and I learned a lot from the lecturing and work and help we did! It really enriches math and preps for you."
        },
        {
            name: "Allen T.",
            comment: "The summer camp was fun and engaging. I learned a lot. The teacher made the learning fun."
        },

    ]

  return (
    <>
    <NavigationBar />
    <main className="min-h-fit bg-background" id="main">
            <div className="block max-h-min">
                <section className="p-4 mx-auto flex justify-center -nowrap justify-center">
                    <div className="relative max-w-max xl:w-1/2 2xl:w-1/2">
                        <Carousel images={
                            images
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
