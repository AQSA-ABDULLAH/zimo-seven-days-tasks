import Image from 'next/image';

export default function Section5() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center relative">
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <Image 
        src="/images/background.png" 
        alt="ZIMA Pro Logo" 
        layout="responsive" 
        width={2000} 
        height={1000} 
        className="opacity-75 sm:h-[300px] md:h-[500px] lg:h-[600px] w-full object-cover" 
        priority
      />
    </div>

    {/* Scroll Indicator */}
    <div className="absolute bottom-8 flex flex-col items-center z-10">
      <div className="w-4 h-6 border-2 border-white rounded-full flex items-start">
        <div className="w-1 h-2 bg-white rounded-full animate-bounce mb-1"></div>
      </div>
    </div>
  </section>
  )
}
