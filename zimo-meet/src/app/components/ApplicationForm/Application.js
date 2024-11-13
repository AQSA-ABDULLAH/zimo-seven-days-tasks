import Form1 from "./Form1";

export default function Application() {
    return (
        <section>
            <header className="uppercase px-8 lg:px-2 grid grid-cols-3 lg:grid-cols-2 my-8 lg:my-8 mb-16 tracking-widest text-[20px] lg:text-[16px]">
                <div>
                    <h2>APPLY</h2>
                    <button className="flex flex-1 mt-2 sm:absolute left-0 sm:px-2 cursor-pointer items-center gap-2 
                        uppercase tracking-widest text-[20px] lg:text-[16px]">
                        <img src="/assets/keyback.png" alt="keyback" className="w-[18px]" />
                        <span>BacK</span>
                    </button>
                </div>

                <section className="flex flex-col text-center items-center lg:items-end sm:text-[14px] md:text-[14px] sm:text-end  md:text-end ">
                    <h1>YOUR APPLICATION</h1>
                    <div className="flex items-center justify-end gap-x-2 mt-7">
                        <div className="bg-[#BE9f56] h-[2px] w-[60px] lg:w-[20px]"></div>
                        <div className="bg-black h-[2px] w-[60px] lg:w-[20px]"></div>
                        <div className="bg-black h-[2px] w-[60px] lg:w-[20px]"></div>
                    </div>
                </section>
            </header>

            <Form1 />

            <footer className="flex justify-between items-end px-8  sm:py-16 md:py-16 md:pt-20 pb-8 mt-4 pr-[55px] 2xl:pr-8">
                <div className="flex-1">
                    <img src="/assets/zimo-team-black.png" alt="zimo-team-logo" className="w-[318px] 3xl:w-[300px]" />
                </div>

                <div className="flex-1">
                    <img src="/assets/zimoInternship.png" alt="zimo-intern-logo" className="w-[147px] 3xl:w-[90px] ml-auto" />
                </div>
            </footer>
        </section>
    )
}
