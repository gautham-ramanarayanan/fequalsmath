import Carousel from "../../components/Carousel";
import NavigationBar from "../../components/NavigationBar";
import 'fs';


export default function Home() {
    const images = ["/groupphoto.png", "/teaching.png", "studentseating.png"];

    const whoweare = "F=Math is a non-profit math competition preparation program taught by winners and qualifiers of the USA Junior Math Olympiad. The curriculum is designed not only to prepare students for math competitions, but also for their school math classes. 100% of the program fee will be donated to non-profit organizations.";

    const instructors = [
        {
            name: "Kevin Wang",
            description:"Kevin is an upcoming junior attending Lebanon Trail High School. He has years of experience competing at the highest level of math competitions, culminating in a top 24 win at this year's junior national olympiad. Furthermore, he has taught English and math competition courses for over a year, and currently works as a teaching assistant for USA IMO coach Po-Shen Loh. Kevin is incredibly passionate about the success and education of his students, and will work to ensure that every student can reach their fullest potential."
        },
        {
            name: "Aaron Zhou",
            description: "Aaron is an upcoming junior attending Plano West Senior High School. He has earned numerous accolades at the national level in math competitions, being a four-time AMC 10 DHR awardee (top 1%) and a USAJMO Honorable Mention. Furthermore, he has experience teaching AMC 10 and Math Counts for Magic Math Plano and Fantastic Mathletes."
        },
        {
            name: "Daniel Wang",
            description: "Daniel is a talented high school junior who wishes to use his talents in math to benefit his community. His notable achievements include being a USAJMO winner and scoring a 12 on the 2022 AIME. Furthermore, he has tutored high school math for a nonprofit organization named Ace Academy. He looks forward to meeting everyone in class!"
        }
    ];


  return (
    <>
    <NavigationBar />
    <main className="min-h-screen bg-background" id="main">
            <div className="block max-h-min">
                <section className="p-4 mx-auto flex justify-center -nowrap justify-center">
                    <div className="relative max-w-max xl:w-1/2 2xl:w-1/2">
                        <Carousel images={
                            images
                        } />
                    </div>
                </section>
            </div>
            <div className="p-4 mx-auto flex flex-col items-center justify-center max-w-4xl">
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
                Instructors
            </h1>
            <ul>
                {instructors.map((instructor, index) => (
                    <li key={instructor.name} className="flex max-w-6xl items-center justify-between min-h-full">
                        <img src="/fakesource.png" width={300} height={300} className="rounded-full basis-1/3 p-4" />
                        <div className="basis-2/3 flex flex-col">
                            <p className="px-4 py-1 text-lg text-txt font-bold">{instructor.name}</p>
                            <p className="px-4 py-1 text-md text-txt font-medium">
                                {instructor.description}
                            </p>
                        </div>
                    </li>
                ))}
                
            </ul>
        </div>
    </main>
    
    </>
      )
}
