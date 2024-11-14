export default function Section3() {

  return (
    <section className="py-16 bg-black text-white relative flex flex-col justify-center items-center">
      {/* Main Header Section - Centered */}
      <div className="flex flex-col items-center justify-center text-center mb-10  sm:px-8">
        <h1 className="flex items-center text-center text-2xl sm:text-3xl font-light tracking-wide mb-4 sm:mb-8">
          <img src="/images/zimo team.png" alt="TechHub Logo" className="w-48 sm:w-64 md:w-76" />
        </h1>
      </div>

      {/* Main Section */}
      {/* <div className="w-full flex flex-col sm:flex-row justify-start items-start sm:items-center sm:px-20"> */}

        {/* Main Section */}
      <div className="w-full flex flex-col sm:flex-row justify-start items-start sm:items-center ">

        {/* Background Image */}
        <div className="absolute opacity-10 mt-10 sm:mt-0">
          <img src="/images/zimo-logo-white.png" alt="Zimo Background Logo" className="max-w-[1189px] w-[69%] xl:w-[85%] w-[500px] sm:w-96 md:w-[500px]" />
        </div>

         {/* Text and Logo */}
         <div className="z-10 mt-8 sm:mt-14 mr-20 px-16">
          <h3 className="text-[20px] sm:text-[30px] tracking-wide font-light uppercase">Discover</h3>
          <h2 className="text-[30px] sm:text-[60px] tracking-wide font-light uppercase">A New World</h2>
          <p className="text-[14px] sm:text-[18px] tracking-wide uppercase mt-2 font-[100]">
            Together, we create and build a better world.
          </p>
        </div>

        {/* Videos Section */}
        <div className="flex flex-col gap-y-[2px] mb-2">
          <div className="relative inline-block overflow-hidden rounded-t-[35px]">
            <button></button>
            <div className="border-b-0 border-t-0 border-l-0 border-r-0 border-solid border-gray-200 box-border block font-sans font-normal leading-6 h-[300px] w-[600px] select-none">
              <video
                className="object-cover w-full h-full rounded-t-[35px]"
                autoPlay
                muted
                disablePictureInPicture
                type="video/mp4"
                src="https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/advertVideos%2FOnly%20Basketball%20%20%20Nike.mp4?alt=media&token=fca3a2ab-0d6c-4c5f-aafc-ce3e6836361e">
              </video>
            </div>
          </div>
          <section className="flex items-center justify-center">
            <div className="MuiBox-root css-ppbw9k border-b-0 border-t-0 border-l-0 border-r-0 border-solid border-gray-200 box-border block font-sans font-normal leading-6 h-[300px] w-[600px] select-none">
              <div className="flex w-full h-full flex-row items-stretch overflow-hidden rounded-b-[35px]">
                {/* Individual Video Items */}
                {[
                  "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/advertVideos%2FZG%20-%20%20Capture%20Fencing%20Moment%20with%20the%20HONOR%20Magic6%20Pros%20AI%20Motion%20Sensing.mp4?alt=media&token=f801fb84-cdd4-4774-b9d3-d39ee3b1ba08",
                  "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/advertVideos%2FZG%20-%20Control%20Your%20PC%20Settings%20with%20Copilot%20in%20Windows%2011.mp4?alt=media&token=f9cef35d-07ac-40fe-a5b7-2fe100ca6b88",
                  "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/advertVideos%2FWINNING%20ISN%E2%80%99T%20FOR%20EVERYONE%20%20%20KOBE%20BRYANT%20%20%20NIKE.mp4?alt=media&token=70a61d4c-7b53-438c-bb33-703728c5838d",
                  "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/advertVideos%2FASUS%20Zenbook%20S%2014%20(UX5406)%20%23Intel%20%20%202024.mp4?alt=media&token=5199708d-5903-4036-91a1-379525404c01",
                  "https://firebasestorage.googleapis.com/v0/b/ztfr-ff6ab.appspot.com/o/advertVideos%2FDiscover%20the%20Bone%20cuff%20by%20Elsa%20Peretti%C2%AE.mp4?alt=media&token=8b22afac-1527-4dda-9e8e-a3d55ff6683a"
                ].map((src, index) => (
                  <div key={index} className="relative w-[116px] cursor-pointer bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out flex-grow">
                    <video
                      className="object-cover w-full h-full"
                      autoPlay
                      muted
                      disablePictureInPicture
                      type="video/mp4"
                      src={src}>
                    </video>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
