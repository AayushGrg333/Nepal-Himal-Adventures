"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const faqData = [
  {
    id: 1,
    question: "Why trek with Nepal Himal Adventures?",
    answer: "Nepal Himal Adventures is known for expertly guided treks, with experienced leaders and dedicated staff who ensure every detail of your journey is taken care of. As a certified sustainable travel company, we are committed not only to responsible tourism but also to giving back—actively supporting local communities through various philanthropic efforts.",
  },
  {
    id: 2,
    question: "Is it possible to obtain a visa for Nepal upon arrival at the airport?",
    answer: "Yes, you can obtain a Nepal visa upon your arrival at the airport. There are kiosks in the arrival hall that you use to complete the necessary forms.  The cost is USD 30 for a 15-day tourist visa, including numerous entries, or USD 50 and USD 125 for a 30-day or 90-day tourist visa including numerous entries respectively. You should carry cash (USD) with you to pay your visa fees quickly and easily, as digital payments are frequently unavailable.\n\nTo save time, we recommend filling out the online visa application form in advance. Applying online 2 weeks before your arrival will expedite the process at the airport. For more information, please give us a call.",
  },
  {
    id: 3,
    question: "Is the food in the mountains prepared to international standards in terms of safety?",
    answer: "Indeed, the guesthouses follow international guidelines while setting up the food and serve you clean, protected, and warm meals.",
  },
  {
    id: 4,
    question: "What kind of physical training is necessary for trek preparation?",
    answer: "For trekking, you must prepare your body to walk over uneven, hilly landscapes while carrying a backpack. Walking at an incline, jogging, cycling, and going for long-distance hikes are all good ways to exercise. You should work out for at least one hour four to five times a week for at least two months before trekking.",
  },
  {
    id: 5,
    question: "Where can I exchange money upon arrival in Nepal?",
    answer: "You can exchange currency at one of the money exchange counters in the arrivals area of Tribhuvan International Airport, which operate 24 hours a day. Alternatively, you can also exchange money at authorized exchange centers near your hotel, which are typically open during the day.",
  },
]

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions by Travelers</h2>
        </div>

        {/* FAQ Accordion */}
        <div className="border border-gray-200 rounded-lg overflow-hidden">
          {faqData.map((faq, index) => (
            <div key={faq.id} className="border-b border-gray-200 last:border-b-0">
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-5 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:bg-gray-50"
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-800 font-medium text-base md:text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-gray-500 transition-transform duration-300 flex-shrink-0",
                      openItems.includes(faq.id) && "transform rotate-180",
                    )}
                  />
                </div>
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  openItems.includes(faq.id) ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                )}
              >
                <div className="px-6 pb-5">
                  <div className="text-gray-600 leading-relaxed">
                    {/* Content area - left blank for you to fill */}
                    <div className="min-h-[60px] bg-gray-50 rounded-md p-4 border-2 border-solid border-gray-300">
                      <p className="text-black italic ">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
