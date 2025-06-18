"use client"

export default function SpeakToExpert() {
  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            />
          </div>

          <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Speak to an Expert</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Need assistance with your booking? Our experts are here to help. Feel free to
                reach out with any questions or concerns.
              </p>

            </div>

            {/* Right Content */}
            <div className="flex flex-col items-center md:items-end">
              {/* Contact Info */}
              <div className="text-center md:text-right">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Nepal</h3>
                <div className="flex items-center justify md:justify-end gap-2 mb-4">
                  <span className="text-gray-600 text-lg">[name]</span>
                  <span className="text-2xl">🇳🇵</span>
                </div>
                <div className="flex items-center justify-center md:justify-end gap-2">
                  <span className="text-gray-600 text-lg">WhatsApp</span>
                  <a
                    href="https://wa.me/9771234567899"
                    className="text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors duration-200"
                  >
                    +977985123710
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
