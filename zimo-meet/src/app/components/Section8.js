export default function Section8() {
    return (
        <section id="zdoc" className="section container mx-auto min-h-screen flex flex-col justify-between py-16">
            {/* ZIDOC Logo */}
            <div className="flex justify-center my-8">
                <img src="/images/zdoc.png" alt="ZIDOC Logo" className="w-[200px] lg:w-[300px] h-auto" />
            </div>

            {/* Document Signing Description */}
            <div className="pb-16 md:pb-8 text-center">
                <p className="lg:text-[14px] text-[9px] tracking-[2px] opacity-50 uppercase text-[#737373]">
                    Document-signing software technology that lets you sign documents online.
                </p>

                {/* Signature Image */}
                <div className="mt-8 flex justify-end pr-8">
                    <img src="/images/signature.png" className="w-[200px] lg:w-[320px]" alt="Signature" />
                </div>
            </div>
        </section>
    )
}
