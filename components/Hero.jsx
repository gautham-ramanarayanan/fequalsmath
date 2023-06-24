export default function Hero() {
    return (
        <div className="w-screen container flex justify-center items-center">
                <div className="z-10 absolute space-y-4 pt-8">
                    <h1 className="text-5xl text-primary font-bold text-center xl:text-7xl ">
                        Training the Next<br/>Generation of Winners
                        </h1>
                    <p className="xl:text-xl text-md font-semibold text-center text-primary">
                        Summer registration is now open!  Classes begin the week of June 25th.<br /> Summer classes are free!</p>
                </div>
                <img src="/groupphoto.png" alt="" className="object-cover w-full h-full opacity-50 font-bold brightness-110 blur-sm" style={{ "-webkit-filter": "brightness(1.1) blur(4px)",  }} />
        </div>
    );
}
