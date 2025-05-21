"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileDown } from "lucide-react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export default function HeroSection() {
  const { theme } = useTheme()

  return (
    <section className="py-20 md:py-32 flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Satish Kumar Pyata</h1>
        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
          Google Cloud Certified Data Engineer
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Building intelligent, scalable, and cloud-native data systems with GCP.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button className="gap-2 transition-all hover:scale-105" variant="default" size="lg" asChild>
            <a href="https://linkedin.com/in/satishpyata/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </Button>

          <Button className="gap-2 transition-all hover:scale-105" variant="outline" size="lg" asChild>
            <a href="https://github.com/COutSatish" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </Button>

          <Button className="gap-2 transition-all hover:scale-105" variant="secondary" size="lg" asChild>
            <a href="/Satish_Kumar_Pyata_Resume.pdf" download>
              <FileDown className="h-5 w-5" />
               Download Resume
            </a>
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
