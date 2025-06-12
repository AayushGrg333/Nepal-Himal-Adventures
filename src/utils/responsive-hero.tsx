"use client"

export default function ResponsiveHero() {
  return (
    <div className="hero-section relative h-screen bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-4xl font-bold text-white md:text-6xl">Your Hero Content</h1>
      </div>

      <style jsx>{`
        .hero-section {
          background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/hero-bg-mobile.jpeg');
        }
        
        @media (min-width: 768px) {
          .hero-section {
            background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/hero-bg.jpeg');
          }
        }
      `}</style>
    </div>
  )
}
