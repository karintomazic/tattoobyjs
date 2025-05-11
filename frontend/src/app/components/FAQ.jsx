"use client";
import { useState } from "react";
import usePocketBase from "@/hooks/usePocketBase";
import GeneralContainer from "../blocks/GeneralContainer";
import MainHeading from "../blocks/MainHeading";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = usePocketBase("FAQ");

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="pogosta-vprasanja">
      <GeneralContainer>
        <div className="mx-auto max-w-4xl lg:max-w-none">
          <p className="text-base/7 font-semibold text-[#FF6F61] mb-[0.8rem]">
            kaj moramo vedeti pred tetoviranjem?
          </p>
          <MainHeading>Pogosta vprašanja</MainHeading>
          <dl className="mt-16 divide-y divide-gray-900/10 grid lg:grid-cols-2 gap-y-0 gap-x-12">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="py-2 first:pt-0 last:pb-0 mt-4">
                <dt>
                  <button
                    type="button"
                    className="flex w-full items-start justify-between text-left text-gray-900 cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-${index}`}
                  >
                    <span className="text-base/7 font-semibold cursor-pointer">
                      {faq.question}
                    </span>
                    <span className="ml-6 flex h-7 items-center">
                      <svg
                        className={`size-6 transform transition-transform ${
                          activeIndex === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m6-6H6"
                        />
                      </svg>
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-${index}`}
                  className={`mt-2 pr-12 overflow-hidden transition-all duration-300 ${
                    activeIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className="text-base/7 text-gray-600"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </GeneralContainer>
    </div>
  );
}
