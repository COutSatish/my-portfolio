"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function TechStackSection() {
  const technologies = [
    { name: "Python", icon: "🐍" },
    { name: "SQL", icon: "📊" },
    { name: "BigQuery", icon: "🔍" },
    { name: "Pub/Sub", icon: "📡" },
    { name: "Dataflow", icon: "⏩" },
    { name: "Vertex AI", icon: "🧠" },
    { name: "Airflow", icon: "🔄" },
    { name: "Terraform", icon: "🏗️" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "⚙️" },
    { name: "GitHub Actions", icon: "🔧" },
    { name: "Cloud Run", icon: "☁️" },
  ]

  return (
    <section id="tech-stack" className="py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card className="h-full transition-all duration-300 hover:shadow-md hover:scale-105">
                  <CardContent className="flex flex-col items-center justify-center p-4 text-center h-full">
                    <div className="text-3xl mb-2">{tech.icon}</div>
                    <div className="font-medium">{tech.name}</div>
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
