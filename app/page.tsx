"use client"
import "react"
import Header from "./components/Header"
import { Fade } from "./components/Animations"
import { Shield, FileCheck, Building, ArrowRight } from "lucide-react"
import Icon from "@mdi/react"
import { mdiFormatListBulleted, mdiCashMultiple, mdiMagnifyClose, mdiThumbUpOutline } from "@mdi/js" //https://pictogrammers.com/library/mdi/

import Image from "next/image" //carousel
import ProductCarousel from "./components/ProductCarousel"
import "./globals.css"
import AboutSection from "./components/AboutSectioni"
import ContactForm from "./components/ContactForm"

export default function Home() {

  return (
    <main className="min-h-screen">
      <Header />

      <Fade>
        <section id="hero" className="py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Ubiquitous Software Solutions Inc.</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-center">
              Advanced AI-powered tools for regulatory compliance and call center optimization. Helping you run your
              organization better.
            </p>

            <ProductCarousel />

            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <a
                href="#services"
                className="bg-white text-gray-800 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300 inline-flex items-center"
              >
                Explore Our Services and Solutions
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </section>
      </Fade>

      <Fade>
        <AboutSection/>
      </Fade>

      <Fade>
        <section id="callsight" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Callsight</h2>
            <div className="grid grid-cols-1 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-4">Powerful Call Center Insights</h3>
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
                  <ul className="space-y-2 text-gray-600 ">
                    <li className="flex items-center space-x-4">
                      <Icon path={mdiFormatListBulleted} size={2} color="black" />
                      <span className="">Automated call summarizations by topic and trend analysis</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <Icon path={mdiCashMultiple} size={2} color="black" />
                      <span>Understand when sales happen and identify sales opportunities</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <Icon path={mdiMagnifyClose} size={2} color="black" />
                      <span>Find, detect and prevent fraudulent activities</span>
                    </li>
                    <li className="flex items-center space-x-4">
                      <Icon path={mdiThumbUpOutline} size={2} color="black" />
                      <span>Understand your clients better and train your agents</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="policyhub" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">PolicyHub</h2>
            <div className="grid grid-cols-1 gap-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-4 text-center">Regulatory compliance, simplified</h3>
                  <p className="text-gray-700">
                    PolicyHub is an artificial intelligence-powered tool you can leverage to assess your company's
                    documentation against regulations.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Automated Compliance Review</h4>
                      <p className="text-gray-600">
                        Instantly analyze new legislation and compare it against internal policies, ensuring compliance
                        without manual effort.{" "}
                      </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Gap Identification & Risk Mitigationn</h4>
                      <p className="text-gray-600">
                        Detect discrepancies between company policies and regulatory requirements, reducing legal and
                        financial risks.
                      </p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">AI-Powered Policy Recommendations</h4>
                      <p className="text-gray-600">
                        Leverage advanced AI to suggest precise updates and improvements to policies and procedures,
                        ensuring alignment with the latest laws.
                      </p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Efficiency & Cost Savings</h4>
                      <p className="text-gray-600">
                        Significantly reduce the time and resources needed for regulatory reviews, freeing compliance
                        teams to focus on strategic initiatives.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <Image
                    src="policyHub_brain.gif"
                    alt="PolicyHub AI Engine visualization"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
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
                    <h3 className="text-xl font-semibold mb-4">
                      Retail Payments Activities Act Cybersecurity and IT Assessments
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Comprehensive operational and technical assessment for Retail Payment Activities Act compliance,
                      ensuring your organization meets all regulatory requirements.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>• Full compliance evaluation</li>
                      <li>• Technical infrastructure review</li>
                      <li>• Risk assessment reports</li>
                      <li>
                        • Through our partnership with the{" "}
                        <a href="https://www.theamlshop.ca" target="_blank" rel="noopener noreferrer">
                          AML Shop{" "}
                        </a>
                        we are able to provide a complete RPAA assessment for your firm's ability to meet the rules for
                        the Retail Payments Activities Act.
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
                    <h3 className="text-xl font-semibold mb-4">White Label Software</h3>
                    <p className="text-gray-700 mb-4">
                      Customized software for your company. Our engineers and developers can build software that meets
                      your needs quickly and cheaply.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <b>White Label AI Solutions</b> – We provide cutting-edge AI-driven tools that businesses you
                        can brand as your own.{" "}
                      </li>
                      <li>
                        • <b>Flexible Ownership Models</b> – We can build it, you can own it.{" "}
                      </li>
                      <li>
                        • <b>Customized For Your Needs</b> – Built using industry best practices, we design for your
                        needs
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg flex justify-center items-center">
                    <img src="whitelabel.png" alt="white label service" loading="lazy" style={{ maxHeight: "300px" }} />
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-orange-500">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <FileCheck className="w-12 h-12 text-green-500 mb-4" />
                    <h3 className="text-xl font-semibold mb-4"> Consulting Services </h3>
                    <p className="text-gray-700 mb-4">
                      Our staff of financial industry experts have worked the country's largest financial institutions
                      and understand industry standard work quality and best practices.
                    </p>
                    <ul className="text-gray-600 space-y-2">
                      <li>
                        • <b>Expert IT & Engineering Support</b> – Augment your teams with top-tier IT professionals,
                        software engineers, and cloud specialists to drive digital transformation and operational
                        efficiency.
                      </li>
                      <li>
                        • <b>Regulatory & Compliance Advisory</b> – Ensure alignment with evolving financial regulations
                        by leveraging our expert consultants, who provide strategic insights and risk mitigation
                        guidance.
                      </li>
                      <li>
                        • <b>Tailored Staffing Solutions</b> – Scale your workforce seamlessly with highly skilled
                        professionals in development, business analysis, cybersecurity, and regulatory compliance,
                        ensuring you meet project demands efficiently.
                      </li>
                    </ul>
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
      <Fade>
        <section id="partnership" className="py-20 bg-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Strategic Partnerships</h2>
          <p className="text-gray-700 text-center mb-6">
            Through our partnerships, we provide best in class technology solutions to our clients.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="container mx-auto px-4">
              <Image
                src="THE-AML-SHOP+-+Logo+-+Black-Txt-Ver-FN+2-A.png"
                alt="The AML Shop Logo"
                width={300}
                height={200}
                style={{ display: "block", margin: "auto" }}
              />
              <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg shadow-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-md shadow">
                    <h4 className="font-semibold mb-2">Framework Assessment</h4>
                    <p className="text-gray-600">Complete evaluation of your risk management systems and procedures</p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow">
                    <h4 className="font-semibold mb-2">Compliance Strategy</h4>
                    <p className="text-gray-600">
                      Tailored recommendations for meeting the Retail Payments Activities Act standards
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-md shadow">
                    <h4 className="font-semibold mb-2">Reporting Readiness</h4>
                    <p className="text-gray-600">Review and assessment of your firm's reporting capabilities</p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow">
                    <h4 className="font-semibold mb-2">Best Practices and Recommendations</h4>
                    <p className="text-gray-600">
                      {" "}
                      Solid, actionable recommendations for cybersecurity and information technology organizational gaps
                    </p>
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-md shadow">
                    <h4 className="font-semibold mb-2">Enhanced Compliance Assurance</h4>
                    <p className="text-gray-600">
                      Gain peace of mind with thorough reviews that ensure your organization's policies and procedures
                      meet or exceed FINTRAC regulatory requirements
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow">
                    <h4 className="font-semibold mb-2">Industry Expertise</h4>
                    <p className="text-gray-600">
                      Leverage deep regulatory knowledge and sector-specific experience to strengthen your compliance
                      framework and reduce exposure to regulatory risk.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-4 rounded-md shadow">
                    <h4 className="font-semibold mb-2">Tailored Solutions</h4>
                    <p className="text-gray-600">
                      Receive customized assessments and actionable recommendations, helping your organization close
                      compliance gaps and stay ahead of evolving regulations.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-md shadow">
                    <h4 className="font-semibold mb-2">Risk Mitigation and Operational Efficiency</h4>
                    <p className="text-gray-600">
                      {" "}
                      Ensure compliance while improving operational processes, reducing penalties, and aligning your
                      business with regulatory expectations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      <Fade>
        <ContactForm/>
      </Fade>

      <footer className="bg-gradient-to-r from-blue-500 to-red-500 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Ubiquitous Software Solutions. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

