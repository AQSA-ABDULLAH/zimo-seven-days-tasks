export default function Statement({ onCancel }) {
    return (
      <section>
        <h1 className="text-center text-[18px] mb-4 hidden md:block tracking-[2px]">SUPPORTING INFORMATION</h1>
        <div className="flex items-center justify-center sm:py-16 z-10 mt-1">
          <section autoComplete="off" className="flex flex-col flex-1 items-center space-y-2 text-[18px] lg:text-[16px]">
            <div className="text-center mb-10">
              <h1 className="text-[22px] lg:text-[18px] tracking-[2px]">aqsaabdullah38403@gmail.com</h1>
              <div className="py-2"></div>
              <h1 className="text-[22px] lg:text-[18px] tracking-[2px]">AQSA Waheed</h1>
              <div className="pt-3"></div>
              <p className="uppercase text-[10px] tracking-[0.6px] max-w-[942px] w-[90%] mx-auto leading-6">
                YOU CAN PROVIDE ADDITIONAL (SUPPORTING) INFORMATION TO HELP US BETTER UNDERSTAND YOU AS A PERSON AND YOUR 
                QUALIFICATIONS/SUITABILITY FOR THE ROLE/PROGRAM/INTERNSHIP. PLEASE PROVIDE US WITH ADDITIONAL DETAILS WHICH YOU BELIEVE 
                WILL SUPPORT YOUR APPLICATION.
              </p>
            </div>
            
            <section className="relative max-w-[720px] w-[90%] h-[335px]">
              <textarea
                id="about_us"
                className="w-full h-full text-[14px] lg:text-[12px] tracking-[2px] placeholder:opacity-50 placeholder:font-normal bg-transparent border border-gray-500/50 rounded-xl p-3 focus:border-[#BE9F56] focus:bg-transparent outline-none"
                placeholder="Supporting Information..."
              ></textarea>
              <div className="absolute bottom-0 -right-44 block lg:hidden">
                <button 
                  className="lg:hidden h-[120px] w-[120px] bg-white text-black tracking-widest text-[14px] mb-4 rounded-xl flex items-center text-center justify-center border-black border border-opacity-60"
                  onClick={onCancel} // Trigger onCancel function
                >
                  CANCEL
                </button>
                <button className="lg:hidden h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] rounded-xl flex items-center text-center justify-center flex-col uppercase">
                  ADD Supporting Statement
                </button>
              </div>
            </section>
            
            <div className="flex justify-around w-full pt-8">
              <button className="lg:flex hidden items-center justify-center h-[120px] w-[120px] bg-black text-white tracking-widest text-[14px] rounded-lg text-center">
                ADD Supporting Statement
              </button>
              <button 
                className="lg:flex hidden h-[120px] w-[120px] bg-white text-black tracking-widest text-[14px] mb-4 rounded-xl items-center text-center justify-center border-black border border-opacity-60"
                onClick={onCancel} // Trigger onCancel function
              >
                CANCEL
              </button>
            </div>
          </section>
        </div>
      </section>
    );
}

