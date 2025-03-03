"use client"

import { motion } from "framer-motion"
import { Building2, Users, Brain, Shield, BarChart3, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    value: "100+",
    label: "Years Experience",
    icon: Building2,
  },
  {
    value: "50+",
    label: "Financial Institutions",
    icon: Users,
  },
  {
    value: "1000+",
    label: "Documents Analyzed",
    icon: BarChart3,
  },
]

const features = [
  {
    title: "AI-Powered Solutions",
    description: "Leveraging cutting-edge artificial intelligence to transform regulatory compliance.",
    icon: Brain,
    color: "bg-blue-500",
  },
  {
    title: "Industry Expertise",
    description: "Deep knowledge of financial services and banking sector requirements.",
    icon: Shield,
    color: "bg-green-500",
  },

]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export default function AboutSection() {
  return (
    <section id="about" className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-16"
          >
            {/* Header */}
            <div className="text-center space-y-4">
              <motion.h2 variants={itemVariants} className="text-3xl font-bold">
                About Us
              </motion.h2>
              <motion.p variants={itemVariants} className="text-xl max-w-3xl mx-auto">
              Ubiquitous Software is a Toronto-based technology firm specializing in regulatory compliance solutions powered by advanced artificial intelligence. Our innovative platform helps organizations streamline compliance processes by analyzing legislation and identifying gaps in internal policies and procedures. With a focus on the financial services and banking sectors, we provide AI-driven insights, consulting services, and staff augmentation to ensure our clients stay ahead in a constantly evolving regulatory landscape.
              </motion.p>
            </div>

            {/* Stats */}
            <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ scale: 1.05 }} className="relative group">
                  <Card className="bg-white/80 backdrop-blur-sm border-none">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-white/80">
                          <stat.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold">{stat.value}</div>
                          <div className="">{stat.label}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Main Content */}
            <motion.div variants={containerVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants} className="bg-white/80 p-8 rounded-lg shadow-lg space-y-6">
                <h3 className="text-2xl font-semibold text-gray-900">Transforming Regulatory Compliance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Ubiquitous Software is revolutionizing how organizations handle regulatory compliance. Our innovative
                  platform leverages advanced artificial intelligence to streamline compliance processes, analyze
                  legislation, and identify gaps in internal policies and procedures.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With a dedicated focus on the financial services and banking sectors, we provide AI-driven insights,
                  consulting services, and staff augmentation to ensure our clients stay ahead in a constantly evolving
                  regulatory landscape.
                </p>
              </motion.div>

              <motion.div variants={containerVariants} className="grid gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    className="bg-white/80 p-6 rounded-lg shadow-lg flex items-start gap-4"
                  >
                    <div className={`p-3 rounded-lg ${feature.color}`}>
                      <feature.icon className="w-6 h-6 text-white/80" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

