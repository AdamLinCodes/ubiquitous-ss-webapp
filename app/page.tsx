import Header from "../components/Header"
import { Fade } from "../components/Animations"
import ServiceCard from "@/components/Card";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />

      <Fade>
        <section
          id="hero"
          className="bg-gradient-to-r from-blue-500 via-green-500 via-orange-500 to-red-500 text-white py-20"
        >
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Ubiquitous Software Solutions Inc.</h1>
            <p className="text-xl mb-8">Simple solutions to tedious problems</p>
            <a
              href="#contact"
              className="bg-white text-gray-800 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
            >
              Get Started
            </a>
          </div>
        </section>
      </Fade>

      <Fade>
        <section id="about" className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto text-center">
              Provides new tools and services to aid companies in their internal compliance
              goals. As of today, the only service we offer is in Retail Payment Activities
              Act (RPAA) operational and technical assessment.
            </p>
          </div>
        </section>
      </Fade>

      <Fade>
        <section id="services" className="bg-gradient-to-r from-blue-100 via-green-100 via-orange-100 to-red-100 py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard service="Policy Hub" borderClass="border-blue-500">
                Policy hub – an AI based tool that reviews internal policy documents
                against the regulatory requirements. The output provides guidance as
                to how well the policy documents represent and address the
                regulations. PolicyHub auto-trains itself and assess
                consistency of your documentation.
              </ServiceCard>

              <ServiceCard service="Service 2" borderClass="border-green-500">
                blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
              </ServiceCard>

              <ServiceCard service="Service 3" borderClass="border-red-500">
                blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
              </ServiceCard>

            </div>
          </div>
        </section>
      </Fade>

      <Fade>
        <section id="contact" className="py-20">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
            <form className="max-w-md mx-auto">
              <input type="text" placeholder="Your Name" className="w-full mb-4 p-2 border rounded" required />
              <input type="email" placeholder="Your Email" className="w-full mb-4 p-2 border rounded" required />
              <textarea placeholder="Your Message" className="w-full mb-4 p-2 border rounded h-32" required></textarea>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 via-green-500 via-orange-500 to-red-500 text-white py-2 rounded font-semibold hover:opacity-90 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </Fade>

      <footer className="bg-gradient-to-r from-blue-800 via-green-800 via-orange-800 to-red-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Ubiquitous. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

