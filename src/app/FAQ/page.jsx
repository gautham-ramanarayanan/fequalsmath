"use client";
import { faqQuestions } from "@/globals/globals";
import NavigationBar from "../../../components/NavigationBar";
import { useState } from "react";

export default function FAQPage() {
    const [active, setActive] = useState(0);
    const showSideBar = faqQuestions.length >= 7;
    const faqRenderer = () => {
        if (showSideBar) {
            return (
                <>
                    {faqQuestions[active].qas.map((qa) => (
                        <>
                            <h1 className="text-2xl font-bold">{qa.question}</h1>
                            <p className="font-medium">{qa.answer}</p>
                            <br />
                        </>
                    ))}
                    {faqQuestions[active].links?.map((link) => (
                        <a href={link.link} key={link.display} className="underline text-primary hover:opacity-80 font-bold">
                            {link.display}
                        </a>
                    ))}
                </>
            )
        } else {
            return (
                <>
                    {faqQuestions.map((faq) => {
                        return (
                            <>
                                {faq.qas.map((qa) => (
                                    <>
                                        <h1 className="text-2xl font-bold">{qa.question}</h1>
                                        <p className="font-medium">{qa.answer}</p>
                                        <br />
                                    </>
                                ))}
                                {faq.links?.map((link) => (
                                    <a href={link.link} key={link.display} className="underline text-primary hover:opacity-80 font-bold">
                                        {link.display}
                                    </a>
                                ))}
                            </>
                        )
                    })}
                </>
            )
        }
    }

    return (
        <>
            <NavigationBar />
            <main className="min-h-fit bg-background" id="main">
                <section className="bg-background max-w-7xl pt-8 flex flex-col items-center mx-auto">
                    <h1 className="text-4xl font-bold text-txt">FAQ</h1>
                    <section className="m-4 max-w-4xl mx-auto flex flex-row justify-center mb-24 flex-grow rounded-2xl h-screen sm:h-auto">
                        {showSideBar && <section className="p-1 pl-4 sm:p-4 space-y-1 min-w-fit rounded-xl basis-1/5 h-full flex flex-col bg-background-second">
                            {faqQuestions.map((q, index) => <button key={q.identifier} id={index} className="hover:bg-background hover:opacity-80 rounded-xl p-2 sm:p-4" onClick={(e) => setActive(e.target.id)}>
                                {q.identifier}
                            </button>)}
                        </section>}
                        <section className="p-0 sm:p-4 h-full flex flex-col basis-4/5 space-y-2 m-4">
                            {
                                faqRenderer()
                            }
                            
                        </section>
                    </section>
                </section>
            </main>
        </>
    );
}