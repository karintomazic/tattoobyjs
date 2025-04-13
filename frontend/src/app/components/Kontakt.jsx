export default function Kontakt() {
  return (
    <div className="bg-white" id="kontakt">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl mb-4">
          Kontakt
        </h2>
        <div className="mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-10 pb-16 pt-4 lg:grid-cols-3">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:col-span-3 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">
                  Email
                </h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a
                        className="font-semibold text-[#FF6F61]"
                        href="mailto:tattoostudiobyjs@gmail.com"
                      >
                        tattoostudiobyjs@gmail.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">
                  Lokacija
                </h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a className="font-semibold text-[#FF6F61]">
                        Ulica heroja Šaranoviča 27, 2000 Maribor
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base/7 font-semibold text-gray-900">
                  Odpiralni čas
                </h3>
                <dl className="mt-3 space-y-1 text-sm/6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a className="font-semibold">Po dogovoru</a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3"></div>
        </div>
      </div>
    </div>
  );
}
