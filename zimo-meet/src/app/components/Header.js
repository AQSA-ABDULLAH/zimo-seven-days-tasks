export default function Header() {

    return (
        <section>
            <header className='bg-transparent absolute left-4 xs:left-0  right-4 xs:right-0 top-2 lg:top-0 p-2'>
                <div className='flex justify-between items-start w-full'>
                    <img src="./images/application.png" alt="Logo" className='h-[100px] 3lg:h-[70px] lg:h-[90px] cursor-pointer' />
                    <nav className='flex justify-center'>
                        <div className='text-end mt-2'>
                            <div className='flex justify-end items-center'>
                                <div className='text-[11px] md:text-[9px] tracking-[2px] ml-2 uppercase'>
                                    <time dateTime="1731409548166" className="xs:text-[7px]">16:05</time>
                                </div>
                                <div>
                                    <h3 className='text-[11px] md:text-[9px] xs:text-[7px] tracking-[2px] ml-2 uppercase'>
                                        <p className='text-inherit'>Islamabad</p>
                                    </h3>
                                </div>
                            </div>
                            <div>
                                <p className='text-[#BE9F56] xs:text-[8px] text-[11px] md:text-[9px] tracking-[2px] uppercase'>
                                    Tuesday, 12 November 2024
                                </p>
                            </div>
                        </div>

                        <div className='flex items-center ml-3'>
                            <img src='https://firebasestorage.googleapis.com/v0/b/zimo-b9759.appspot.com/o/zimo%2Fcategories%2F1684477561138.png?alt=media&token=8fb84dae-d3d1-43f2-a37f-ecd19c358738'
                                className='h-7 w-7 object-contain' alt="Icon" />
                        </div>
                    </nav>
                </div>
            </header>
        </section>
    )
}

