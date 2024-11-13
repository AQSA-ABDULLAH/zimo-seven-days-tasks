export default function Section9() {
    return (
        <div className="min-h-screen flex flex-col justify-center xl:text-center items-center relative px-8 bg-black text-white overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: 'url("images/map-dot.webp")' }}
            ></div>

            <div className="absolute top-[50px] flex flex-col items-center">
                <h4 className="tracking-[2px] text-[14px] uppercase sm:text-left text-center md:ml-4">
                    WORK ON OUR INNOVATIVE SOFTWARE PRODUCTS.
                </h4>

                <h4 className="tracking-[2px] pt-8 3xl:text-left text-[16px] text-center uppercase md:ml-4">
                    DESIGN AND BUILD THE SYSTEMS THAT ARE CHANGING THE WORLD.
                </h4>
            </div>

            <img src="/images/zimo-career.png" className="max-w-[293px] sm:w-[200px]" alt="Description" />

            <div className="absolute left-[3rem] 3xl:px-18 xl:left-0 bottom-[3.5rem] text-left xl:pl-14 pl-0">
                <h3 className="tracking-[3px] uppercase text-[20px]">GLOBAL vision</h3>
                <h4 className="tracking-[2px] text-left text-[14px] pt-6 uppercase">
                    With a remote culture, diversity is naturally in our DNA.
                </h4>
                <h4 className="tracking-[2px] text-left text-[14px] uppercase mt-2">
                    Based across THE GLOBE, making up over 23 different nationalities.
                </h4>
            </div>

            <div className="absolute items-center bottom-[10px]">
                <a className="h-[60px] w-[30px] invert">
                    <div className="scroll__animation cursor-pointer opacity: 1">
                        <div className="mouse">
                            ::before ::after
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

