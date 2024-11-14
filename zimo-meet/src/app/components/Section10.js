export default function Section10() {

    return (
        <section className='relative h-[600px] flex justify-center items-center'>
            {/* Background Image */}
            <img
                src="/images/zimo-back1.png"
                className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 opacity-5'
                alt="Background"
            />

            {/* Centered Content */}
            <div className='flex flex-col items-center'>
                <img
                    src="/images/zimo-back1.png"
                    className='text-center w-[293px] xl:w-[260px] lg:w-[250px] pb-5'
                    alt="Center image"
                />
                <p className='text-center text-[50px] font-[50] uppercase text-[#BE9F56]'>INTERNSHIP</p>
                <img
                    src="/images/zimo-logo-2.png"
                    className='w-[293px] xl:w-[260px] lg:w-[250px] pt-5'
                    alt="Center image"
                />
            </div>

            {/* Bottom Scroll Indicator */}
            <div className="absolute bottom-[10px] left-1/2 -translate-x-1/2 z-50">
                <a className="h-[60px] w-[30px]">
                    <div className="scroll__animation cursor-pointer" style={{ opacity: 1 }}>
                        <div className="mouse">
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
}



