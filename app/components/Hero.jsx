// "use client"

// import Image from "next/image";
// import fanta from "@/images/fanta.png"
// import { useRef } from "react";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger)

export function Hero() {

    // const imgRef = useRef(null)
    // const containerRef = useRef(null)
    

    // useGSAP(() => {
    //     gsap.to(imgRef.current, {
    //     x: -300,
    //     ScrollTrigger: {
    //         trigger: imgRef.current,
    //         start: "top center",
    //         end: "+=300",
    //         scrub: true
    //     }
    // })

    // }, {scope: containerRef})

    return(
            <div id="hero" className="w-full h-screen bg-gradient-to-b from-orange-400 to-yellow-400 flex justify-center items-center gap-8">
                
                
                {/* <Image ref={imgRef} src={fanta} width={250} height={250} alt="hero" className="absolute z-10" /> */}
            
                <h1 className="text-orange-500 text-9xl transform scale-x-150 tracking-wider font-bold">FANTA</h1>
            </div>
        
    )
}