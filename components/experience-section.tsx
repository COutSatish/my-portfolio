"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ExperienceSection() {
  const experiences = [
    {
      company: "ValueMomentum",
      position: "Software Engineer",
      period: "Mar 2021 – Jul 2023",
      description: "Optimized GCP pipelines, improved performance, reduced latency",
      achievements: [
        "Designed and implemented data pipelines using Google Cloud Platform services",
        "Reduced data processing latency by 40% through pipeline optimization",
        "Collaborated with cross-functional teams to deliver data-driven solutions",
      ],
    },
  ]

  return (
    <section id="experience" className="py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="transition-all duration-300 hover:shadow-lg">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                      <div>
                        <CardTitle>{exp.position}</CardTitle>
                        <CardDescription className="text-lg">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="w-fit">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{exp.description}</p>
                    <ul className="list-disc pl-5 space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
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
