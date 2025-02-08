import Header from "./components/Header"
import { Fade } from "./components/Animations"
import { Shield, FileCheck, Building, ArrowRight, Phone, BookOpen, Scale } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />

      <Fade>
        <section
          id="hero"
          className="bg-gradient-to-r from-blue-500 to-red-500 text-white py-20"
        >
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Ubiquitous Software Solutions Inc.
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Advanced AI-powered tools for regulatory compliance and call center optimization. Helping you run your organization better.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#services"
                className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 inline-flex items-center"
              >
                Explore Our Services and Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#callsight"
                className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-800 transition duration-300 inline-flex items-center"
              >
                Discover CallSight
                <Phone className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </Fade>

      <Fade>
        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
              Ubiquitous Software is a Toronto-based technology firm specializing in regulatory compliance solutions powered by advanced artificial intelligence. Our innovative platform helps organizations streamline compliance processes by analyzing legislation and identifying gaps in internal policies and procedures. With a focus on the financial services and banking sectors, we provide AI-driven insights, consulting services, and staff augmentation to ensure our clients stay ahead in a constantly evolving regulatory landscape.
            </p>
          </div>
        </section>
      </Fade>

      <Fade>
        <section id="callsight" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">CallSight</h2>
            <div className="grid grid-cols-1 gap-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4">Deep Call Center Insights</h3>
                  <p className="text-gray-700">
                    CallSight provides powerful and deep insights into your call center activity, helping you understand
                    your customers better and optimize your operations.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Smart Summaries</h4>
                      <p className="text-gray-600">Accurate, AI-powered call summaries and trend reporting</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Opportunity Detection</h4>
                      <p className="text-gray-600">Automated identification of sales opportunities</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Fraud Prevention</h4>
                      <p className="text-gray-600">Advanced scanning and detection of potential fraud</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Sentiment Analysis</h4>
                      <p className="text-gray-600">Detailed sentiment scoring for agents and clients</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <video autoPlay loop muted>
                        <source src="/videos/callsight.mp4" type="video/mp4" />
                    </video>

                </div>
              </div>

              <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden order-2 lg:order-1">
                  <Image
                    src="callcenter.gif"
                    alt="CallSight Dashboard showing call center analytics including CSAT scores, handle times, and topic analysis"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />


                </div>
                <div className="space-y-6 order-1 lg:order-2">
                  <h3 className="text-2xl font-semibold mb-4">Comprehensive Call Analysis</h3>
                  <p className="text-gray-700">
                    Get detailed insights into every call with our advanced sentiment analysis and automated
                    summarization technology. Track agent performance, customer satisfaction, and identify key topics
                    and trends.
                  </p>
                  <ul className="space-y-4 text-gray-600">
                    <li className="flex items-start">
                      <Shield className="w-6 h-6 mr-2 text-blue-500" />
                      <span>Real-time sentiment analysis for both agents and customers</span>
                    </li>
                    <li className="flex items-start">
                      <FileCheck className="w-6 h-6 mr-2 text-green-500" />
                      <span>Automated call summarization and topic detection</span>
                    </li>
                    <li className="flex items-start">
                      <FileCheck className="w-6 h-6 mr-2 text-green-500" />
                      <span>Identify sales</span>
                    </li>
                    <li className="flex items-start">
                      <FileCheck className="w-6 h-6 mr-2 text-green-500" />
                      <span>Automated call summarization and topic detection</span>
                    </li>
                    <li className="flex items-start">
                      <Building className="w-6 h-6 mr-2 text-orange-500" />
                      <span>Performance metrics and trending analysis</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      <Fade>
        <section id="services" className="bg-gradient-to-r from-blue-100 via-green-100 via-orange-100 to-red-100 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
            <div className="grid grid-cols-1 gap-16">
              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <Shield className="w-12 h-12 text-blue-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Retail Payments Activities Act Cybersecurity and IT Assessments</h3>
                    <p className="text-gray-700 mb-4">

                      Comprehensive operational and technical assessment for Retail Payment Activities Act compliance,
                      ensuring your organization meets all regulatory requirements.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Full compliance evaluation</li>
                      <li>• Technical infrastructure review</li>
                      <li>• Risk assessment reports</li>
                      <li>• Through our partnership with the <a href="https://www.theamlshop.ca" target="_blank"  rel="noopener noreferrer">AML Shop </a>
                        we are able to provide a complete RPAA assessment for your firm's ability to meet the rules for the Retail Payments Activities Act.
                      </li>

                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <Image
                      src="cyberReview.png"
                      alt="IT assurance"
                      width={450}
                      height={300}
                       style={{ display: "block", margin: "auto" }}
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-green-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <FileCheck className="w-12 h-12 text-green-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">PolicyHub</h3>
                    <p className="text-gray-700 mb-4">
                      Our AI-powered workflow tool that automatically reviews your internal policy documents against regulatory
                      requirements, providing detailed analysis and recommendations.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• <b>Automated Compliance Review</b> – Instantly analyze new legislation and compare it against internal policies, ensuring compliance without manual effort. </li>
                      <li>• <b>Gap Identification & Risk Mitigation</b>  – Detect discrepancies between company policies and regulatory requirements, reducing legal and financial risks. </li>
                      <li>• <b>AI-Powered Policy Recommendations</b> – Leverage advanced AI to suggest precise updates and improvements to policies and procedures, ensuring alignment with the latest laws.</li>
                      <li>• <b> Efficiency & Cost Savings </b> – Significantly reduce the time and resources needed for regulatory reviews, freeing compliance teams to focus on strategic initiatives.</li>
                      <li>• <b>Regulatory Change Tracking </b> – Stay ahead of evolving laws and regulations with real-time analysis and proactive compliance updates. </li>
                      <li>• <b>Seamless Integration & Customization </b> – Tailor the solution to industry-specific requirements and integrate it with existing document management systems for a smooth workflow.</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <Image
                      src="20250127_2055_Loop Video_loop_01jjn9xd8xee9vbmch34k887ed.gif"
                      alt="PolicyHub AI Engine visualization"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-orange-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <FileCheck className="w-12 h-12 text-green-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-4"> Consulting Services </h3>
                    <p className="text-gray-700 mb-4">
                      Our staff of financial industry experts have worked the country's largest financial institutions and understand industry standard work quality and best practices.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• <b>Expert IT & Engineering Support</b> – Augment your teams with top-tier IT professionals, software engineers, and cloud specialists to drive digital transformation and operational efficiency.</li>
                      <li>• <b>Regulatory & Compliance Advisory</b> – Ensure alignment with evolving financial regulations by leveraging our expert consultants, who provide strategic insights and risk mitigation guidance.</li>
                      <li>• <b>Tailored Staffing Solutions</b> – Scale your workforce seamlessly with highly skilled professionals in development, business analysis, cybersecurity, and regulatory compliance, ensuring you meet project demands efficiently.</li>

                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <Image
                      src="20250127_2055_Loop Video_loop_01jjn9xd8xee9vbmch34k887ed.gif"
                      alt="PolicyHub AI Engine visualization"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>


              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-red-500">
                <div className="mb-4 py-1 px-3 bg-gray-200 text-gray-800 font-semibold text-sm inline-block rounded">
                  Coming Soon
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <Building className="w-12 h-12 text-red-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-4">Operational Review Hub</h3>
                    <p className="text-gray-700 mb-4">
                      Advanced platform for transaction monitoring and compliance filing, featuring automated suspicious
                      activity detection and STR generation.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Transaction monitoring</li>
                      <li>• Risk level scoring</li>
                      <li>• Automated STR generation</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <Image
                      src="OperationalReviewDiagram.png"
                      alt="Operational Review AI Engine workflow diagram"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      {/*
      <Fade>
        TODO REMOVE THIS SECTION
        <section id="regulations" className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Regulations We Support</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <a
                href="https://lois-laws.justice.gc.ca/eng/acts/p-24.501/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <BookOpen className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">PCMLTFA</h3>
                <p className="text-gray-600">Proceeds of Crime (Money Laundering) and Terrorist Financing Act</p>
              </a>

              <a
                href="https://lois-laws.justice.gc.ca/eng/regulations/SOR-2002-184/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <Scale className="w-8 h-8 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">PCMLTFR</h3>
                <p className="text-gray-600">PCMLTF Regulations</p>
              </a>

              <a
                href="https://fintrac-canafe.canada.ca/obligations/directives-eng"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <Shield className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ministerial Directives</h3>
                <p className="text-gray-600">Financial Crime Related Directives</p>
              </a>

              <a
                href="https://laws-lois.justice.gc.ca/eng/acts/s-14.5/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
              >
                <Building className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">SEMA</h3>
                <p className="text-gray-600">Special Economic Measures Act</p>
              </a>
            </div>
          </div>
        </section>
      </Fade>
        */}
      <Fade>
        <section id="partnership" className="py-20 bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Strategic Partnerships</h2>
          <div className="container mx-auto px-4">
            <Image
              src="THE-AML-SHOP+-+Logo+-+Black-Txt-Ver-FN+2-A.png"
              alt="The AML Shop Logo"
              width={300}
              height={200}
              style={{ display: "block", margin: "auto" }}
            />
            <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg shadow-md">
              <p className="text-gray-700 text-center mb-6">
                Through our partnership with The AML Shop, we provide comprehensive risk management framework reviews
                tailored to the Retail Payments Activities Act requirements.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-md shadow">
                  <h4 className="font-semibold mb-2">Framework Assessment</h4>
                  <p className="text-gray-600">Complete evaluation of your risk management systems and procedures</p>
                </div>
                <div className="bg-white p-4 rounded-md shadow">
                  <h4 className="font-semibold mb-2">Compliance Strategy</h4>
                  <p className="text-gray-600">Tailored recommendations for meeting the Retail Payments Activities Act standards</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-md shadow">
                    <h4 className="font-semibold mb-2">Reporting Readiness</h4>
                    <p className="text-gray-600">Review and assessment of your firm's reporting capabilities</p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow">
                    <h4 className="font-semibold mb-2">Best Practices and Recommendations</h4>
                    <p className="text-gray-600"> Solid, actionable recommendations for cybersecurity and information technology organizational gaps</p>
                  </div>
                </div>
            </div>
          </div>
          <div className="container mx-auto px-4">
              <Image
                src="MSS_Logo.png"
                alt="Mackenzie Strategic Services Logo"
                width={300}
                height={200}
                style={{ display: "block", margin: "auto" }}
              />
              <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg shadow-md">
                <p className="text-gray-700 text-center mb-6">
                  Texty textual text. Some more text.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-md shadow">
                    <h4 className="font-semibold mb-2">Enhanced Compliance Assurance</h4>
                    <p className="text-gray-600">Gain peace of mind with thorough reviews that ensure your organization's policies and procedures meet or exceed FINTRAC regulatory requirements</p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow">
                    <h4 className="font-semibold mb-2">Industry Expertise</h4>
                    <p className="text-gray-600">Leverage deep regulatory knowledge and sector-specific experience to strengthen your compliance framework and reduce exposure to regulatory risk.</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-4 rounded-md shadow">
                      <h4 className="font-semibold mb-2">Tailored Solutions</h4>
                      <p className="text-gray-600">Receive customized assessments and actionable recommendations, helping your organization close compliance gaps and stay ahead of evolving regulations.</p>
                    </div>
                    <div className="bg-white p-4 rounded-md shadow">
                      <h4 className="font-semibold mb-2">Risk Mitigation and Operational Efficiency</h4>
                      <p className="text-gray-600"> Ensure compliance while improving operational processes, reducing penalties, and aligning your business with regulatory expectations.</p>
                    </div>
                  </div>
              </div>
            </div>
        </section>

      </Fade>

      <Fade>
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Get Started</h2>
            <form className="max-w-md mx-auto">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                  Service Interest
                </label>
                <select
                  id="service"
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select a Service</option>
                  <option value="callsight">CallSight Platform</option>
                  <option value="rpaa">RPAA Assessment</option>
                  <option value="consulting"> Consulting Services </option>
                  <option value="partnership">AML Shop Partnership</option>
                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  className="w-full p-2 border rounded h-32 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r bg-blue-600 text-white py-3 rounded font-semibold hover:opacity-90 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </Fade>

      <footer className="bg-gradient-to-r from-blue-500 to-red-500 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Ubiquitous Software Solutions. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

