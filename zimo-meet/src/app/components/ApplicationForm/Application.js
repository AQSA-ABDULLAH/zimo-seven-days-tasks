import React, { useState } from "react";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Statement from "./Statment";

export default function Application() {
    const [currentForm, setCurrentForm] = useState(1);

    const handleContinue = () => {
        setCurrentForm((prevForm) => prevForm + 1);
    };

    const handleCancel = () => {
        setCurrentForm(3); // Go back to Form3
    };

    return (
        <section>
            <header className="uppercase lg:px-2 grid grid-cols-3 lg:grid-cols-3 my-8 lg:my-8 mb-16 tracking-widest text-[20px] lg:text-[16px] mx-8 mr-24">
                <div>
                    <h2>APPLY</h2>
                    <button className="flex flex-1 mt-2 sm:absolute left-0 sm:px-2 cursor-pointer items-center gap-2 mx-8
                        uppercase tracking-widest text-[20px] lg:text-[16px]">
                        <img src="/images/arrow.png" alt="keyback" className="w-[18px]" />
                        <span>Back</span>
                    </button>
                </div>

                <section className="flex flex-col text-center items-center lg:items-end sm:text-[14px] md:text-[28px] sm:text-end md:text-end ">
                    <h1>YOUR APPLICATION</h1>
                    <div className="flex items-center justify-end gap-x-5 mt-7 mr-16">
                        <div className="bg-[#BE9f56] h-[2px] w-[80px] lg:w-[46px]"></div>
                        <div className="bg-black h-[2px] w-[60px] lg:w-[46px]"></div>
                        <div className="bg-black h-[2px] w-[60px] lg:w-[46px]"></div>
                    </div>
                </section>

                <div></div>
            </header>

            {/* Conditional rendering based on current form state */}
            {currentForm === 1 && <Form1 onContinue={handleContinue} />}
            {currentForm === 2 && <Form2 onContinue={handleContinue} />}
            {currentForm === 3 && <Form3 onContinue={handleContinue} />}
            {currentForm === 4 && <Statement onCancel={handleCancel} />}

            <footer className="flex justify-between items-end px-8 md:pt-20 pb-8 mt-4 pr-[55px] 2xl:pr-8">
                <div className="flex-1">
                    <img src="/images/app-team.png" alt="zimo-team-logo" className="w-[318px] 3xl:w-[300px]" />
                </div>

                <div className="flex-1">
                    <img src="/images/internship.png" alt="zimo-intern-logo" className="w-[147px] 3xl:w-[90px] ml-auto" />
                </div>
            </footer>
        </section>
    );
}






