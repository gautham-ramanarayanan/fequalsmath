"use client";
import { faqQuestions } from "@/globals/globals";
import NavigationBar from "../../../components/NavigationBar";
import { useState } from "react";

export default function FAQPage() {
    const [active, setActive] = useState(0);

    return (
        <>
            <NavigationBar />
            <main className="min-h-fit bg-background" id="main">
                <section className="bg-background max-w-4xl pt-8 flex flex-col items-center mx-auto h-screen">
                    <h1 className="text-4xl font-bold text-txt">FAQ</h1>
                    <section className="m-4 max-w-4xl mx-auto flex flex-row justify-center -nowrap mb-24 flex-grow rounded-2xl">
                        <section className="p-4 space-y-1 min-w-fit rounded-xl basis-1/5 h-full flex flex-col bg-background-second">
                            {faqQuestions.map((q, index) => <button key={q.identifier} id={index} className="hover:bg-background hover:opacity-80 rounded-xl -no-wrap p-4" onClick={(e) => setActive(e.target.id)}>
                                {q.identifier}
                            </button>)}
                        </section>
                        <section className="p-4 h-full flex flex-col basis-4/5 space-y-2">
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
                        </section>
                    </section>
                </section>
            </main>
        </>
    );
}