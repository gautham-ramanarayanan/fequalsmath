import TestimonialCard from "./TestimonialCard";

export default function Testimonials({ testimonials, maxCount }) {
    return (
        <ul>
            {testimonials
                .slice(0, maxCount)
                .map((testimonial, index) => {
                    if (index % 2 === 0) {
                        return (
                            <div className="flex" key={testimonial.name}>
                                <TestimonialCard name={testimonial.name} image={testimonial.image} comment={testimonial.comment} />
                                <div className="hidden sm:block basis-1/3" />
                            </div>
                        );
                    }
                    return (
                        <div className="flex">
                            <div className="hidden sm:block basis-1/3" />
                            <TestimonialCard name={testimonial.name} image={testimonial.image} comment={testimonial.comment} />
                        </div>
                    );
                }
            )}
        </ul>
    )
}