import React, { useState } from 'react';

export default function Form1({ onContinue }) {
    const [formData, setFormData] = useState({
        email: '',
        confirmEmail: '',
        firstName: '',
        lastName: '',
        dob: '',
        phone: '',
        zarCode: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <section>
            <div className='flex items-center justify-center sm:py-16 z-10 mt-[20px] lg:mt-[10px]'>
            <form
                    autoComplete="off"
                    className="flex flex-col flex-1 items-center space-y-2 text-[18px] lg:text-[16px]"
                >
                    <input
                        id="email"
                        name="email"
                        placeholder="EMAIL ADDRESS"
                        className="tracking-[2px] md:tracking-[0px] w-[90%] placeholder:text-black placeholder:font-normal 
                        placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] 
                        placeholder:md:tracking-[0px] max-w-[580px] text-center bg-transparent border 
                        placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent 
                        outline-none"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <div className="w-[90%] max-w-[580px] relative">
                        <input
                            type="email"
                            name="confirmEmail"
                            placeholder="CONFIRM EMAIL ADDRESS"
                            className="tracking-[2px] md:tracking-[0px] placeholder:text-black placeholder:font-normal 
                            placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] 
                            placeholder:md:tracking-[0px] w-full text-center focus:bg-transparent bg-transparent border 
                            placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
                            value={formData.confirmEmail}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="py-1"></div>

                    <div className="relative flex flex-col w-[90%] max-w-[580px]">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="FIRST NAME"
                            className="tracking-[2px] md:tracking-[0px] placeholder:text-black placeholder:font-normal 
                            placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] 
                            placeholder:md:tracking-[0px] focus:bg-transparent w-full text-center bg-transparent border 
                            placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>

                    <input
                        type="text"
                        name="lastName"
                        placeholder="LAST NAME (INCLUDING MIDDLE NAME)"
                        className="tracking-[2px] md:tracking-[0px] placeholder:text-black placeholder:font-normal 
                        placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] 
                        placeholder:md:tracking-[0px] w-[90%] max-w-[580px] text-center bg-transparent border 
                        placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none 
                        focus:bg-transparent"
                        value={formData.lastName}
                        onChange={handleChange}
                    />

                    <div className="py-1"></div>

                    <div className="w-[90%] max-w-[580px]">
                        <input
                            type="date"
                            name="dob"
                            title="Date of Birth"
                            max="2050-12-25"
                            step="1"
                            className="w-full tracking-[2px] md:tracking-[0px] font-normal placeholder:text-black 
                            placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] 
                            placeholder:tracking-[2px] placeholder:md:tracking-[0px] text-center uppercase bg-transparent border
                            placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none 
                            focus:bg-transparent"
                            value={formData.dob}
                            onChange={handleChange}
                        />
                    </div>

                    <p className="text-black font-normal text-[18px] md:text-[12px] tracking-[2px] 
                    w-[90%] max-w-[580px] outline-none bg-transparent border placeholder:text-center text-center 
                    border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] uppercase">
                        Brazil
                    </p>

                    <div className="py-1"></div>

                    <div className="flex w-[90%] max-w-[580px] text-center items-center gap-2 h-14 relative focus:bg-transparent">
                        <div className="w-[200px] p-[4px] text-sm outline-none bg-transparent text-gray-500 border 
                        placeholder:text-center text-center border-gray-500/50 rounded-xl focus:border-[#BE9F56]">
                            <div
                                className="w-full py-[2px] css-b62m3t-container"
                                id="countryCode">
                                <div className="css-zpnzg2-control">
                                    <div className="css-hlgwow">
                                        <div className="css-1dimb5e-singleValue">
                                            <div className="flex justify-around items-center gap-x-2">
                                                <img
                                                    src="https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimo%2Fcategories%2F1684473963507.png?alt=media&token=57b4fb02-e4f4-4b83-98f6-ff4f8f2bcac8"
                                                    alt="Brazil"
                                                    className="w-[18px] object-contain"
                                                />
                                                <span className="flex text-[18px] lg:text-[14px] items-center">
                                                    +55
                                                </span>
                                            </div>
                                        </div>
                                        <input
                                            className="border-0 bg-transparent w-full"
                                            autoCapitalize="none"
                                            autoComplete="off"
                                            autoCorrect="off"
                                            id="react-select-2-input"
                                            spellCheck="false"
                                            type="text"
                                            style={{ color: "inherit", opacity: 1 }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="PHONE NUMBER"
                            className="tracking-[2px] md:tracking-[0px] placeholder:text-black 
                            placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] 
                            placeholder:tracking-[2px] placeholder:md:tracking-[0px] w-full text-center  
                            bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl 
                            p-3 focus:border-[#BE9F56] outline-none focus:bg-transparent"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        <button type="submit"
                            className="lg:hidden h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] 
                            absolute bottom-0 right-[-200px] rounded-lg flex items-center text-center justify-center uppercase">
                            CONTINUE
                        </button>
                    </div>

                    <div className="w-[90%] max-w-[580px] lg:pb-4">
                        <div className="py-1"></div>
                        <p className="text-[14px] md:text-[12px] text-[#737373] text-center uppercase">
                            ZIMO Ambassador REFERRAL CODE (ZAR CODE)
                        </p>
                        <div className="relative">
                            <input
                                type="text"
                                name="zarCode"
                                placeholder="ZAR CODE (OPTIONAL)"
                                className="tracking-[2px] md:tracking-[0px] placeholder:text-black placeholder:font-normal 
                                placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] 
                                placeholder:md:tracking-[0px] w-full max-w-[580px] text-center 
                                bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 
                                focus:border-[#BE9F56] outline-none focus:bg-transparent"
                                value={formData.zarCode}
                                onChange={handleChange}
                            />
                        </div>
                       
                    </div>

                    <button
                        type="button"
                        className='h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] rounded-lg flex items-center text-center justify-center uppercase'
                        onClick={onContinue}
                    >
                        CONTINUE
                    </button>
                </form>
            </div>
        </section>
    );
}


