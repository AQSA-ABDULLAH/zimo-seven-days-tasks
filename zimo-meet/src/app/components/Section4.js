import Image from 'next/image';

export default function Section4() {
    return (
        <section>
            <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center text-black p-8 gap-4 font-semibold text-lg relative">

                {/* Image with fade-up animation */}
                <div className="flex flex-col items-center">
                    <Image src="/images/zimo-ai.png" width={600} height={60} alt="ZIMA AI Logo"/>
                </div>

                {/* Text with fade-up animation */}
                <p className="uppercase 3xl:text-[14px] text-[20px] tracking-[2px] text-[#737373] mb-8 md:mb-4 mt-20 font-[400]">
                    Artificial Intelligence for Everyone
                </p>

                <div className="absolute right-8 bottom-16">
                    <Image src="/images/zimo-brick-ai.png" width={200} height={60} alt="ZIMA AI Logo" />
                </div>

                <div className="absolute bottom-8 flex flex-col items-center">
                    <div className="w-4 h-6 border-2 border-black rounded-full flex items-start">
                        <div className="w-1 h-2 bg-black rounded-full animate-bounce mb-1"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
