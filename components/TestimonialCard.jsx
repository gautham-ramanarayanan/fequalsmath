
export default function TestimonialCard({ name, image = "/defaultusericon.png", comment}) {

    return (
        <div className="flex-col sm:flex-row rounded-2xl bg-background shadow-xl sm:p-4 flex my-4">
            <div className="hidden sm:block basis-0 sm:basis-1/5 flex flex-col justify-items items-center mx-auto p-2">
                <img src={image} alt="" className="rounded-full pointer-events-none" />
            </div>
            <div className="basis-full sm:basis-4/5 flex flex-col p-4">
                <p className="font-bold text-txt pt-1">{name}</p>
                <p className="font-medium text-txt py-1">{comment}</p>
            </div>
        </div>
    );
}