"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function Section6() {
    const [isHovered, setIsHovered] = useState(false);
    const [isInView, setIsInView] = useState(false);
  return (
    <section
      className={`relative py-16 px-10 w-screen flex flex-col gap-4 min-h-screen uppercase font-semibold text-lg transition-colors duration-500 ${isHovered ? 'bg-gray-400 text-white' : 'bg-white text-black'}`}
    >
      {/* Logo Image with Zoom Animation */}
      <div className={`flex flex-col ${isInView ? 'animate-zoomInUp' : ''}`}>
        <Image
          src={isHovered ? "/images/zemo-meet2.png" : "/images/zemo-meet1.png"}
          width={200}
          height={40}
          alt="ZIMA Meet Logo"
          className="w-[200px] lg:w-[400px] 2xl:w-[524px]"
        />
      </div>

      {/* Meeting Features with Fade-in Animation */}
      <div className={`flex flex-col gap-1 tracking-wider text-xs 2xl:text-sm mt-10 ${isInView ? 'animate-fadeInTop' : ''}`}>
        <p>PREMIUM VIDEO MEETINGS</p>
        <p>END-TO-END ENCRYPTION</p>
        <p>LOBBY MODE</p>
        <p>PASSWORD PROTECTED MEETINGS</p>
        <p>CUSTOMISED LINKS</p>
        <p>RECORDINGS</p>
        <p>FREE FOR EVERYONE</p>
      </div>

      <a
        href="https://zimomeet.com"
        target="_blank"
        rel="noreferrer"
        className={`lg:absolute left-[45%] top-[53%] lg:-translate-x-1/2 lg:-translate-y-1/2 z-20 flex items-center ${isInView ? 'animate-zoomInUp' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image src="/images/zemo meet.png" width={230} height={60} alt="Visit ZIMO Meet" className="w-30 lg:w-56 2xl:w-96" />
        <span className="lg:absolute text-sm left-[95%] top-[80%] tracking-wider">visit</span>
      </a>


      <article className={`flex flex-col tracking-wider mt-8 ${isInView ? 'animate-fadeInTop' : ''}`}>
        <h4 className="text-lg lg:text-xl 2xl:text-2xl">discover</h4>
        <h2 className="text-xl lg:text-2xl 2xl:text-3xl pt-3">one platform</h2>
        <p className="text-gray-400 tracking-wide text-xs lg:text-sm 2xl:text-base pt-3">
          together, we create and build a better world.
        </p>
      </article>

      {/* Responsive Screen Images */}
      <div className="hidden lg:flex absolute top-10 right-8">
        <div className={`flex mr-[-24px] 2xl:mr-[-48px] ${isInView ? 'animate-zoomInUp' : ''}`}>
          {/* Image 1 */}
          <img src="/images/zimomeetscreen1.svg" className="lg:h-52 lg:w-24 xl:h-52 xl:w-24 2xl:h-64 2xl:w-32" alt="Screen 1" />

          {/* Image 2 */}
          <img src="/images/zimomeetscreen2.svg" className="lg:h-52 lg:w-24 xl:h-52 xl:w-24 2xl:h-64 2xl:w-32 mt-16" alt="Screen 2" />

          {/* Image 3 */}
          <img src="/images/zimomeetscreen3.svg" className="lg:h-52 lg:w-24 xl:h-52 xl:w-24 2xl:h-64 2xl:w-32 mt-28" alt="Screen 3" />
        </div>

        {/* {isHovered && (
          <div className={`flex mr-[-24px] 2xl:mr-[-48px] ${isInView ? 'animate-zoomInUp' : ''}`}>

            <img src="/images/zimomeetscreen4.svg" className="lg:h-52 lg:w-24 xl:h-52 xl:w-24 2xl:h-64 2xl:w-32 mt-16" alt="Screen 4" />

            <img src="/images/zimomeetscreen5.svg" className="lg:h-52 lg:w-24 xl:h-52 xl:w-24 2xl:h-64 2xl:w-32 mt-16" alt="Screen 5" />

            <img src="/images/zimomeetscreen6.svg" className="lg:h-52 lg:w-24 xl:h-52 xl:w-24 2xl:h-64 2xl:w-32 mt-16" alt="Screen 6" />
          </div>
        )} */}

        {/* Download Buttons */}
        <div className="flex flex-col items-center">
          <button className="mb-3 h-11 w-36 animate-zoomInUp">
            <img src="/images/GooglePlay.png" className="h-full w-full" alt="Download on Google Play" />
          </button>
          <button className="w-36 h-12 animate-zoomInUp">
            <img src="/images/app-store.png" className="h-full w-full" alt="Download on App Store" />
          </button>
        </div>
      </div>


      <footer className="flex justify-between items-end relative pt-10">
        <div className="flex items-center gap-2">
          <Image src="/images/lock.png" width={25} height={11} alt="Encryption" />
          <p className="tracking-wider text-xs lg:text-sm">end-to-end ENCRYPTION</p>
        </div>

        {/* Conditionally Render Large Lock Image */}
        {!isHovered && (
          <Image src="/images/large-lock.png" width={96} height={96} alt="Meet Lock" className={`w-10 lg:w-24 absolute right-0 bottom-0 ${isInView ? 'animate-zoomInUp' : ''}`} />
        )}
      </footer>

      <div className="absolute bottom-8 flex flex-col items-center">
        <div className="w-4 h-6 border-2 border-black rounded-full flex items-start animate-bounce">
          <div className="w-1 h-2 bg-black rounded-full"></div>
        </div>
      </div>
    </section>
  )
}
