"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Real-Time Fleet Monitoring & Predictive Maintenance",
      description:
        "A comprehensive solution for monitoring fleet vehicles in real-time and predicting maintenance needs using machine learning models.",
      image: "/fleet.jpg?height=500&width=600",
      tags: ["Pub/Sub", "Dataflow", "Vertex AI", "BigQuery"],
      demoLink: "https://lookerstudio.google.com/reporting/2ea8a34a-f536-4400-a81d-375385475dca",
      repoLink: "https://github.com/COutSatish/fleet-monitoring-system",
    },
    {
      title: "AI Image Generator with Streamlit and DALL·E 3",
      description:
        "A web application that generates images based on text prompts using OpenAI's DALL·E 3 model, deployed on Google Cloud Run.",
      image: "/AI.jpg?height=400&width=600",
      tags: ["Cloud Run", "GCS", "Streamlit", "DALL·E 3"],
      demoLink: "#",
      repoLink: "https://github.com/COutSatish/AI-Image-Generator-with-OpenAI-s-DALL-E-3-Model",
    },
  ]

  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </CardContent>
                  <CardFooter className="flex gap-2 mt-auto">
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2" asChild>
                      <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
