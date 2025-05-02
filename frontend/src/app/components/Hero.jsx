"use client";
import usePocketBase from "@/hooks/usePocketBase";
import usePocketBaseUrl from "@/hooks/usePocketBaseUrl";

export default function Hero() {
  const items = usePocketBase("hero");
  return (
    <div>
      {/* {items.map((item) => (
        <div key={item.id} className="bg-gray-50">
          <div className="relative">
            <div className="mx-auto max-w-7xl">
              <div className="relative z-10 pt-4 lg:pt-14 lg:w-full lg:max-w-2xl">


                <div className="relative px-6 py-12 lg:px-8 lg:py-56 lg:pr-0">
                  <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                    <div className="hidden sm:mb-10 sm:flex">
                      <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Kontaktiraj me ali si zagotovi svoj termin{" "}
                        <a
                          href="#"
                          className="whitespace-nowrap font-semibold text-[#FF6F61]"
                        >
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          Kontakt <span aria-hidden="true">&rarr;</span>
                        </a>
                      </div>
                    </div>
                    <h1 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                      {item.heading1}
                    </h1>
                    <h1 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                      {item.heading2}
                    </h1>

                    <div className=" mt-8 text-pretty flex justify-start text-gray-600 font-light tracking-wide space-x-4">
                      <div className="relative pr-4 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-gray-500">
                        {item.text1}
                      </div>
                      <div className="relative pr-4 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-gray-500">
                        {item.text2}
                      </div>
                      <div>{item.text3}</div>
                    </div>
                    <div className="mt-10 flex items-center gap-x-6">
                      <a
                        href="/portfolio"
                        className="rounded-md bg-[#FF6F61] px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-[#FF6F61] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#FF6F61]"
                      >
                        Portfolio
                      </a>
                      <a
                        href="/nega"
                        className="text-md font-semibold text-gray-600"
                      >
                        Nega tattoja <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-stone-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
              <img
                alt=""
                src={`${usePocketBaseUrl()}/api/files/${item.collectionId}/${
                  item.id
                }/${item.hero_image2}?thumb=2048x0`}
                className="aspect-[3/2] object-cover lg:aspect-auto lg:size-full"
              />
            </div>
          </div>
        </div>
      ))} */}
      {/* {items.map((item) => (
        <div key={item.id} className="bg-white">
          <main>
            <div className="relative isolate">
              <div className="overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
                  <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                    <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-xl">
                      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                        <div className="hidden sm:mb-10 sm:flex">
                          <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Kontaktiraj me ali si zagotovi svoj termin{" "}
                            <a
                              href="#"
                              className="whitespace-nowrap font-semibold text-[#FF6F61]"
                            >
                              <span
                                aria-hidden="true"
                                className="absolute inset-0"
                              />
                              Kontakt <span aria-hidden="true">&rarr;</span>
                            </a>
                          </div>
                        </div>
                        <h1 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                          {item.heading1}
                        </h1>
                        <h1 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                          {item.heading2}
                        </h1>

                        <div className=" mt-8 text-pretty flex justify-start text-gray-600 font-light tracking-wide space-x-4">
                          <div className="relative pr-4 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-gray-500">
                            {item.text1}
                          </div>
                          <div className="relative pr-4 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-gray-500">
                            {item.text2}
                          </div>
                          <div>{item.text3}</div>
                        </div>
                        <div className="mt-10 flex items-center gap-x-6">
                          <a
                            href="/portfolio"
                            className="rounded-md bg-[#FF6F61] px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-[#FF6F61] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#FF6F61]"
                          >
                            Portfolio
                          </a>
                          <a
                            href="/nega"
                            className="text-md font-semibold text-gray-600"
                          >
                            Nega tattoja <span aria-hidden="true">→</span>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                      <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                        <div className="relative">
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          />
                          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                      </div>
                      <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                        <div className="relative">
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          />
                          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                        <div className="relative">
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          />
                          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                      </div>
                      <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                        <div className="relative">
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          />
                          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                        <div className="relative">
                          <img
                            alt=""
                            src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                            className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                          />
                          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      ))} */}

      <div className="mx-0 sm:mx-8 my-0 relative isolate overflow-hidden h-[80vh]">
        {items.map((item) => (
          <div key={item.id} className="relative h-full flex justify-center items-center">
            {/* Background image */}
            <img
              src={`${usePocketBaseUrl()}/api/files/${item.collectionId}/${
                item.id
              }/${item.hero_image}?thumb=2048x0`}
              alt="Hero Image"
              className="absolute inset-0 -z-20 size-full object-cover sm:rounded-3xl"
            />
            {/* Gray overlay */}
            <div className="absolute inset-0 bg-gray-900/60 -z-10 pointer-events-none sm:rounded-3xl"></div>

            {/* Content stays above overlay */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-0">
              <div className="mx-auto max-w-2xl py-20 sm:py-12 lg:py-12">
                <div className="text-center">
                  <div className="mb-10 flex justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm md:text-base text-white ring-1 ring-white hover:ring-white">
                      Kontaktiraj me ali si zagotovi svoj termin{" "}
                      <a
                        href="#"
                        className="whitespace-nowrap font-semibold text-[#FF6F61]"
                      >
                        <span aria-hidden="true" className="absolute inset-0" />
                        Kontakt <span aria-hidden="true">&rarr;</span>
                      </a>
                    </div>
                  </div>
                  <h1 className="text-balance text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-white">
                    {item.heading1}
                  </h1>
                  <h1 className="mb-10 text-balance text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-white">
                    {item.heading2}
                  </h1>
                  <div className="my-10 flex items-center justify-center gap-x-6">
                    <a
                      href="/portfolio"
                      className="rounded-md bg-[#FF6F61] px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-[#FF6F61] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#FF6F61]"
                    >
                      Portfolio
                    </a>
                    <a
                      href="/nega"
                      className="text-md font-semibold text-white"
                    >
                      Nega tattoja <span aria-hidden="true">→</span>
                    </a>
                  </div>
                  <div className="flex justify-center text-white font-light tracking-wide space-x-4">
                    <div className="relative text-xs sm:text-base pr-4 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-white">
                      {item.text1}
                    </div>
                    <div className="relative text-xs sm:text-base pr-4 after:absolute after:right-0 after:top-0 after:h-full after:w-[1px] after:bg-white">
                      {item.text2}
                    </div>
                    <div className="text-xs sm:text-base">{item.text3}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
