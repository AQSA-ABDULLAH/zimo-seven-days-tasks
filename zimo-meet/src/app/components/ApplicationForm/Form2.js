import React, { useState } from 'react';

export default function Form2({ onContinue }) {
  const [formData, setFormData] = useState({
    cnic: '',
    addressOne: '',
    addressTwo: '',
    city: '',
    stateRegion: '',
    zipcode: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <section>
      <div className='flex items-center justify-center sm:py-16 z-10 mt-[20px] lg:mt-[10px]'>
        <form 
          autoComplete="off" 
          className="flex flex-col flex-1 items-center space-y-2 relative text-[18px] lg:text-[16px]"
        >
          <div className="w-[90%] max-w-[580px] text-center flex flex-col items-center space-y-2 text-[22px] lg:text-[18px] tracking-[2px]">
            <h1>aqsaabdullah38403@gmail.com</h1>
            <div className="py-1"></div>
            <h1>AQSA Waheed</h1>
            <div className="py-1"></div>
          </div>

          <input 
            type="text" 
            name="cnic" 
            placeholder="NATIONAL ID NUMBER (CNIC)" 
            className="placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] w-[90%] max-w-[580px] text-center bg-transparent text-black border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
            value={formData.cnic}
            onChange={handleChange}
          />
          <div className="py-1"></div>

          <input 
            type="text" 
            name="addressOne" 
            placeholder="ADDRESS 1" 
            className="placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] :tracking-[2px] placeholder:md:tracking-[0px] w-[90%] max-w-[580px] text-center bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
            value={formData.addressOne}
            onChange={handleChange}
          />
          <input 
            type="text" 
            name="addressTwo" 
            placeholder="ADDRESS 2 (APARTMENT, SUITE, ETC.)" 
            className="placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] w-[90%] max-w-[580px] text-center bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
            value={formData.addressTwo}
            onChange={handleChange}
          />
          <input 
            type="text" 
            name="city" 
            placeholder="CITY" 
            className="placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] w-[90%] max-w-[580px] text-center bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
            value={formData.city}
            onChange={handleChange}
          />
          <input 
            type="text" 
            name="stateRegion" 
            placeholder="STATE / REGION" 
            className="placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] w-[90%] max-w-[580px] text-center bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
            value={formData.stateRegion}
            onChange={handleChange}
          />
          <div className="relative w-[90%] max-w-[580px]">
            <input 
              type="text" 
              name="zipcode" 
              placeholder="ZIP CODE / POST CODE" 
              className="placeholder:text-black placeholder:font-normal placeholder:text-[18px] placeholder:md:text-[12px] placeholder:tracking-[2px] placeholder:md:tracking-[0px] w-full text-center bg-transparent border placeholder:text-center border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] outline-none"
              value={formData.zipcode}
              onChange={handleChange}
            />
          </div>

          <button 
            type="button" // Change to type="button" to avoid form submission reload
            className="lg:flex items-center justify-center hidden h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] rounded-lg text-center uppercase"
            onClick={onContinue}
          >
            CONTINUE
          </button>
        </form>
      </div>
    </section>
  );
}


  
