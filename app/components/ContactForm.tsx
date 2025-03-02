export default function ContactSection() {
    return (
      <section id="contact" className="py-20 bg-gradient-to-r from-blue-100 via-green-100 via-orange-100 to-red-100 ">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Get Started</h2>
            <p className="text-xl mb-6">
              Have questions about our products or services? We'd love to help!
            </p>
            <p className="text-lg mb-8">
              For inquiries about CallSight, PolicyHub, or any of our other solutions, please reach out to:
            </p>
            <a 
              href="mailto:DClair@ubiquitoussoftware.com" 
              className="text-xl font-semibold hover:underline"
            >
              DClair@ubiquitoussoftware.com
            </a>
            <p className="mt-6">
              We typically respond within 1 business day.
            </p>
          </div>
        </div>
      </section>
    )
  }
  