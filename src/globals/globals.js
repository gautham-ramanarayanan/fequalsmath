export const links = [
    {
        displayName: "Our Team",
        link: "/#Instructors"
    },
    {
        displayName: "Classes",
        link: "/#Curriculum"
    },
    {
        displayName: "Testimonials",
        link: "/#Testimonial"
    },
    /* {
        displayName: "Events",
        link: "#Events"
    }, */
    {
        displayName: "FAQ",
        link: "/FAQ"
    },
    {
        displayName: "Enroll",
        link: "/#Enroll",
        highlight: true
    },
]

export const carouselImages = [
    "/groupphoto.png", 
    "studentseating.png"
];

export const whoweare = "F=Math is a non-profit math competition preparation program taught by winners and qualifiers of the USA Junior Math Olympiad. The curriculum is designed not only to prepare students for math competitions, but also for their school math classes. 100% of the program fee will be donated to non-profit organizations.";

export const instructors = [
    {
        name: "Kevin Wang",
        img: "/kavnwang3.png",
        description:"Kevin is an rising senior attending Lebanon Trail High School. He has years of experience competing at the highest level of math competitions, culminating in a top 24 win at this year's junior national olympiad. Furthermore, he has taught English and math competition courses for over two years, and currently works as a teaching assistant for USA IMO coach Po-Shen Loh. Kevin is incredibly passionate about the success and education of his students, and will work to ensure that every student can reach their fullest potential."
    },
    {
        name: "Leo Li",
        img: "/leoli.png",
        description: "Leo is a rising sophomore at Centennial High School. He has qualified for the AIME 3 times and received distinction twice in the AMC 10. In his free time, Leo dabbles in the Physics Olympiad and plays soccer with friends. Leo will be teaching Algebra this summer session."
    },
    {
        name: "Nikhil Reddy",
        img: "/nikhilreddy.jpg",
        description: "Nikhil is an rising Sophomore at Wakeland High School. He scored a 6 on this year's AIME and is currently studying Multivariable Calculus and Differential Equations. Nikhil also pursues mathematics thru the Euler Circle Program, led by a former Stanford professor. Nikhil will be teaching Number Theory this summer sessions"
    },
    {
        name: "Yu-Hsiang Yeh",
        img: "/defaultusericon.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
        name: "Sohum Uttamchandani",
        img: "/defaultusericon.png",
        description: "Sohum is a high schooler in California. He has qualified for AIME and nearly Junior Math Olympiad, gotten AMC 10 Distinguished Honor Roll, and a earned a perfect score in the most recent AMC 8. In his spare time, Sohum likes to do math, play chess, and practice badminton. Sohum will be teaching Counting and Probability this summer session." 
    },
];

export const testimonials = [ // Will only display the first 3 testimonials
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

export const currentClasses = [
    {
        name: "Counting & Probability",
        cost: "FREE",
        instructor: "Sohum Uttamchandani",
        schedule: "Tue 7-8 CDT",
        location: "Online",
        description: "Combinatorics for AMC 8 level students",
        registrationOpen: true,
    },
    {
        name: "Geometry",
        cost: "FREE",
        instructor: "",
        schedule: "Thursday 7-8 CDT",
        location: "Online",
        description: "Geometry for AMC 8 level students",
        registrationOpen: true,
    },
    {
        name: "Algebra",
        cost: "FREE",
        instructor: "Leo Li",
        schedule: "Friday 7-8 CDT",
        location: "Online",
        description: "Algebra for AMC 8 level students",
        registrationOpen: true,
    },
    {
        name: "Number Theory",
        cost: "FREE",
        instructor: "Nikhil Reddy",
        schedule: "Sat 7-8 CDT",
        location: "Online",
        description: "Number Theory for AMC 8 level students",
        registrationOpen: true,
    },
]

export const currentFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfQAA5b6LN7IvLlBHYCBm6NIjV4p-rDXSNdeCjXVTbp55Qf2A/viewform?embedded=true";

export const faqQuestions = [
    {
        identifier: "Contact Us",
        qas: [
            {
                question: "Contact Us",
                answer: "Welcome to the FAQ Page. Here you can find the answers to some questions commonly asked by parents. If your question is not answered here, you may contact us by emailing fequalsmath@gmail.com. We will try our best to respond as quickly as possible."
            },
        ],
    },
    {
        identifier: "Missed class",
        qas: [
            {
                question: "What will happen if my child misses a class?",
                answer: "For paid sessions, we likely cannot offer a refund after payment has been submitted. If your child has a conflict and cannot attend a class, we will send them the homework problem set. If your child will miss multiple classes, please let us know in advance and we can offer a discount depending on the situation. However, do note that in this case, we will not give you class material or a recorded lecture for missed classes.\n\nFor free sessions, we will send them the homework problem set and recorded lectures for missed classes."
            },
        ],
    },
    {
        identifier: "Refund policy",
        qas: [
            {
                question: "What is the refund policy?",
                answer: "Unfortunately, because of how our payment system operates, it is difficult for us to have a clear refund policy. We recommend parents to make sure that their child is able to attend the majority of the lessons before registering. If you or your child is not satisfied by our program in any way, please let us know and we will work to improve it.",
            },
        ],
    },
    {
        identifier: "Class Difficulty",
        qas: [
            {
                question: "Is the AMC 8/AMC 10 class too easy for me?",
                answer: "In the past, most students have found our classes to be challenging, even if they were initially worried that the class would be too easy. Our AMC 8 class tackles many of the AMC 8 Final Five, and the AMC 10 class takes many problems from the AMC 10 Final Five and the AIME. More likely than not, our classes will not be too easy; however, if you do have this concern, please contact us with your specific situation.",
            },
            {
                question: "My child has not studied Pre-algebra or taken the AMC 8 officially before. Is the AMC 8 class too hard for them?",
                answer: "We expect all of our students to be algebra-ready before taking our AMC 8 class. In this situation, please check out the AoPS diagnostic found below. Your child should aim for a near-perfect score on the Fundamentals section.",
            },
        ],
        links: [
            {
                display: "Diagnostic Test",
                link: "https://www.google.com/url?q=https%3A%2F%2Fdata.artofproblemsolving.com%2Fcourse-docs%2Fdiagnostics%2Falgebra-a-pretest.pdf&sa=D&sntz=1&usg=AOvVaw1wgUqmpx0TzMt-PiwlCfnq",
            },
        ]
    },
    /* {
        identifier: "",
        qas: [
            {

            },
        ],
    } */
]
