"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, CheckCircle, Briefcase } from "lucide-react"
import { motion } from "framer-motion"

export default function AboutSection() {
  const aboutItems = [
    {
      icon: <GraduationCap className="h-6 w-6" />,
      text: "Completed Master's in Computer Science – Specializing in Data Science & Big Data Mining",
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      text: "Google Cloud Professional Data Engineer (2025)",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      text: "Open to full-time roles in data engineering, AI/ML pipelines, and cloud platforms",
    },
  ]

  return (
    <section id="about" className="py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>

          <div className="grid gap-6">
            {aboutItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="text-primary shrink-0 mt-1">{item.icon}</div>
                    <p className="text-lg">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
