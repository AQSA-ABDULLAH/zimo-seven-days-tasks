export default function Section12() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-black text-center text-white px-8">
            {/* Logo */}
            <img
                src="/images/zimo team.png"
                className='text-center w-[293px] xl:w-[380px] lg:w-[250px] pb-5'
                alt="Center image"
            />
            {/* Title */}
            <h2 className="text-[30px] font-[50] text-white tracking-wide mb-8">
                EQUAL OPPORTUNITY
            </h2>

            {/* Description */}
            <p className="text-[20px] text-gray-500 tracking-wide leading-relaxed lg:px-44">
                ZIMO IS PROUD TO BE AN EQUAL OPPORTUNITY WORKPLACE AND IS AN AFFIRMATIVE ACTION EMPLOYER.
                WE ARE COMMITTED TO EQUAL EMPLOYMENT OPPORTUNITY REGARDLESS OF RACE, COLOUR, ANCESTRY, RELIGION,
                SEX, NATIONAL ORIGIN, SEXUAL ORIENTATION, AGE, CITIZENSHIP, MARITAL STATUS, DISABILITY, GENDER
                IDENTITY OR VETERAN STATUS. WE ALSO CONSIDER QUALIFIED APPLICANTS REGARDLESS OF CRIMINAL HISTORIES,
                CONSISTENT WITH LEGAL REQUIREMENTS.
            </p>

            {/* Button */}
            <div className="mt-14">
                <a
                    href="#"
                    className="text-[16px] font-[200] uppercase tracking-widest hover:text-white"
                >
                    Join Our Team
                </a>
            </div>
        </section>
    );
}

