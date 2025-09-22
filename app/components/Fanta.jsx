"use client"
import Image from "next/image";
import fanta from "@/images/fanta.png"
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";




gsap.registerPlugin(ScrollTrigger)

export function Fanta() {

    const imgRef =  useRef(null)

    useGSAP(() => {
        gsap.to(imgRef.current, {
            y: 0,
            x: -350,
            
            // scale: 1,
            // opacity: 0,
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                endTrigger: "#about",
                end: "top top",
                scrub: true,
                markers: true,
            }
        })

    gsap.to(imgRef.current, {
        opacity: 0,
        delay: 0.5,
        scrollTrigger: {
            trigger: "#services",
            start: "top bottom",
            end: "top center",
            scrub: true,
            markers: true,
        }
    })

}, [])

        

    return(

        <div ref={imgRef} 
        className="fixed top-40 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
        >
            <Image src={fanta} width={250} height={250} alt="fanta" className=""/>
        </div>
    )
}