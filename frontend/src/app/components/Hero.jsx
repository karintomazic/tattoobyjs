export default function Hero() {
  return (
    <div className="rounded-xl mx-8 my-0 relative isolate overflow-hidden py-14">
      <img
        src="../images/studio-1.jpeg"
        alt=""
        className="absolute inset-0 -z-10 size-full object-cover"
      ></img>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-12">
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Tattoo studio by JS
            </h1>
            <h1 className="mb-10 text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl">
              Jernej Sirc s.p.
            </h1>

            <div className="my-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#FF6F61] px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-[#FF6F61] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6F61]"
              >
                Portfolio
              </a>
              <a href="#" className="text-md font-semibold text-white">
                Nega tattoja <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="flex justify-center text-white font-light tracking-wide space-x-4">
              <div className="relative pr-4 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-white">
                moody urban landscape
              </div>
              <div className="relative pr-4 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-white">
                city lights in twilight atmosphere
              </div>
              <div>pink sunset</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
