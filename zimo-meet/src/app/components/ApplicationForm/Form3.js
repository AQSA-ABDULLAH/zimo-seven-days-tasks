export default function Form3({ onContinue }) {
    return (
        <section>
            <div className="flex items-center justify-center sm:py-16 z-10 mt-[20px] lg:mt-[10px]">
                <form
                    autoComplete="off"
                    className="flex flex-col flex-1 items-center space-y-2 text-[18px] lg:text-[16px]"
                >
                    <div className="w-[90%] max-w-[580px] flex flex-col items-center space-y-2 text-[22px] lg:text-[18px] tracking-[2px]">
                        <h1>aqsaabdullah38403@gmail.com</h1>
                        <div className="py-1"></div>
                        <h1>AQSA Waheed</h1>
                        <div className="py-1"></div>
                    </div>

                    <div className="py-1"></div>

                    <select
                        name="qualifications"
                        className="placeholder:text-[18px] placeholder:md:text-[14px] md:text-[14px] text-[18px] md:tracking-[0px] tracking-[2px] w-[90%] max-w-[580px] outline-none bg-transparent border placeholder:text-center text-center border-gray-500/50 rounded-xl py-3 focus:border-[#BE9F56] border-red-600"
                    >
                        <option value="">QUALIFICATION(S)</option>
                        <option value="BA">BA</option>
                        <option value="BBA">BBA</option>
                        <option value="BSCS">BSCS</option>
                        <option value="BSSE">BSSE</option>
                        <option value="BSIT">BSIT</option>
                        <option value="BFA">BFA</option>
                        <option value="BS. HONS.">BS. HONS.</option>
                        <option value="ACCA">ACCA</option>
                        <option value="OTHER">OTHER</option>
                    </select>

                    <select
                        id="completion"
                        name="completion"
                        className="placeholder:text-[18px] placeholder:md:text-[14px] md:text-[14px] text-[18px] w-[90%] max-w-[580px] outline-none bg-transparent md:tracking-[0px] tracking-[2px] border placeholder:text-center text-center border-gray-500/50 rounded-xl py-3 focus:border-[#BE9F56] border-red-600"
                    >
                        <option value="">YEAR OF COMPLETION</option>
                        {Array.from({ length: 19 }, (_, i) => (
                            <option key={i} value={2028 - i}>{2028 - i}</option>
                        ))}
                    </select>

                    <input
                        type="text"
                        name="university"
                        placeholder="UNIVERSITY"
                        className="placeholder:text-[18px] placeholder:md:text-[14px] md:text-[14px] text-[18px] md:tracking-[0px] placeholder:text-black tracking-[2px] w-[90%] max-w-[580px] outline-none bg-transparent border placeholder:text-center text-center border-gray-500/50 rounded-xl py-3 focus:border-[#BE9F56] border-red-600"
                    />

                    <select
                        name="experience"
                        className="placeholder:text-[18px] placeholder:md:text-[14px] md:text-[14px] text-[18px] md:tracking-[0px] tracking-[2px] w-[90%] max-w-[580px] outline-none bg-transparent border placeholder:text-center text-center border-gray-500/50 rounded-xl py-3 focus:border-[#BE9F56] border-red-600"
                    >
                        <option value="">EXPERIENCE</option>
                        <option value="NO EXPERIENCE">NO EXPERIENCE</option>
                        <option value="LESS THAN 1 Year">LESS THAN 1 YEAR</option>
                        {Array.from({ length: 7 }, (_, i) => (
                            <option key={i} value={`${i + 1} YEARS`}>{`${i + 1} YEARS`}</option>
                        ))}
                        <option value="MORE THAN 7 YEARS">MORE THAN 7 YEARS</option>
                    </select>

                    <select
                        id="employement"
                        name="employement"
                        className="placeholder:text-[18px] placeholder:md:text-[14px] md:text-[14px] text-[18px] md:tracking-[0px] tracking-[2px] w-[90%] max-w-[580px] outline-none bg-transparent border placeholder:text-center text-center border-gray-500/50 rounded-xl py-3 focus:border-[#BE9F56] border-red-600"
                    >
                        <option value="">CURRENT EMPLOYMENT STATUS</option>
                        <option value="STUDENT">STUDENT</option>
                        <option value="UNEMPLOYED">UNEMPLOYED</option>
                        <option value="PART TIME">EMPLOYED (PART TIME)</option>
                        <option value="FULL TIME">EMPLOYED (FULL TIME)</option>
                        <option value="INTERNSHIP">EMPLOYED (INTERNSHIP)</option>
                        <option value="OTHER">OTHER</option>
                    </select>

                    <section className="space-y-1 w-[90%] max-w-[580px] relative">
                        <div className="flex-col flex justify-center items-center">
                            <label
                                htmlFor="resume"
                                className="text-black font-normal text-[18px] md:text-[14px] md:tracking-[0px] tracking-[2px] w-full text-center uppercase bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none cursor-pointer"
                            >
                                CV / Résumé
                            </label>
                            <input type="file" id="resume" required accept=".pdf,.docx" className="hidden" />
                            <p className="text-[10px] absolute text-red-400 -bottom-2.5 w-full text-center"></p>
                        </div>

                        <div className="flex flex-col items-center gap-1">
                            <button
                                className="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium block opacity-75 border-0 right-6 top-1/2 -translate-y-1/2 z-20 sm:right-4 focus:outline-none text-black rounded text-xs css-1hmxbfw"
                                type="button"
                                title="CLICK TO UPLOAD"
                            >
                                <img src="assets/UploadIcon.png" alt="" className="w-[18px]" />
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="lg:hidden h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] absolute bottom-0 right-[-200px] rounded-xl flex items-center text-center justify-center disabled:animate-pulse"
                        >
                            SUBMIT
                        </button>

                        <button
                            type="button"
                            className="lg:hidden h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] absolute top-[-200px] right-[-200px] rounded-xl flex items-center text-center flex-col uppercase"
                        >
                            <span className="text-[10px] opacity-70 my-2">optional</span>
                            <p className="text-[14px]">ADD Supporting Statement</p>
                        </button>
                    </section>

                    <p className="tracking-[2px] md:tracking-[0px] text-[14px] text-center text-[#737373] uppercase">
                        UPLOAD YOUR Résumé IN ENGLISH AS DOCX OR PDF ONLY.
                    </p>

                    <div className="flex justify-around w-full">
                        <button
                            type="submit"
                            className="lg:flex items-center justify-center hidden h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] rounded-lg text-center disabled:animate-pulse"
                        >
                            SUBMIT
                        </button>

                        <button
                            type="button"
                            className="lg:flex h-[120px] w-[120px] bg-black hidden text-white tracking-widest text-[14px] rounded-xl items-center text-center flex-col uppercase"
                            onClick={onContinue} 
                        >
                            <span className="text-[10px] opacity-70 my-2">optional</span>
                            <p className="text-[14px]">ADD Supporting Statement</p>
                        </button>
                    </div>

                    <p className="tracking-[2px] md:tracking-[0px] text-center text-[12px] text-[#737373] w-[90%] max-w-[580px] px-8 lg:px-0 pt-8 lg:pt-4 hidden lg:block">
                        By proceeding, you are confirming that you agree to the information you have provided to be used in accordance with ZIMO's application processes.
                    </p>
                </form>
            </div>
        </section>
    );
}

