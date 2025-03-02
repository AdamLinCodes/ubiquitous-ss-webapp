"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Check } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface CarouselItemType {
  title: string
  description: string
  features: string[]
  image: { src: string; alt: string; width: number; height: number }
  ctaLinks: { href: string; text: string; target?: string }[]
}

export default function ProductCarousel() {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  const carouselItems: CarouselItemType[] = [
    {
      title: "Callsight",
      description:
        "Powerful insights into call center activity, helping you optimize operations and improve customer experience.",
      features: ["Track calls", "Understand your clients", "Train your agents"],
      image: { src: "callsight_dashboard.png", alt: "CallSight Dashboard", width: 300, height: 200 },
      ctaLinks: [
        { href: "#callsight", text: "Discover Callsight" },
        { href: "#contact", text: "Schedule a Free Demo" },
      ],
    },
    {
      title: "trAIce",
      description: "Anti-money laundering and fraud solution for transaction monitoring.",
      features: ["AML Monitoring", "Fraud Detection", "Compliance and Contract Analytics"],
      image: { src: "traice-logo.png", alt: "trAIce Logo", width: 100, height: 100 },
      ctaLinks: [
        { href: "https://www.traice.ca", text: "Visit the trAice Website", target: "_blank" },
        { href: "#contact", text: "Schedule a Free Demo" },
      ],
    },
    {
      title: "PolicyHub",
      description: "PolicyHub is an AI-driven tool that automates regulatory compliance reviews and identifies gaps in company policies.",
      features: ["PCMLTFA", "Fraud Detection", "Compliance and Contract Analytics"],
      image: { src: "justice.png", alt: "Justice Clipart", width: 100, height: 200 },
      ctaLinks: [
        { href: "#policyhub", text: "Learn More" },
        { href: "#contact", text: "Schedule a Free Demo" },
      ],
    },
  ]

  return (
    <div className="w-full">
      <div className="relative">
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {carouselItems.map((item, index) => (
              <CarouselItem key={index} className="md:basis-full">
                <ProductCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="hidden md:flex items-center justify-between absolute top-1/2 left-0 right-0 -translate-y-1/2 z-10 px-4">
            <CarouselPrevious className="relative left-0 translate-y-0 h-12 w-12" />
            <CarouselNext className="relative right-0 translate-y-0 h-12 w-12" />
          </div>
        </Carousel>

        <div className="flex items-center justify-center mt-8 gap-2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all",
                current === index + 1 ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80",
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProductCard({ item }: { item: CarouselItemType }) {
  return (
    <Card className="overflow-hidden border-none shadow-lg bg-white/50 rounded-xl">
      <CardContent className="p-0">
        <div className="">
          <div className="flex flex-col lg:flex-row items-center gap-8 p-6 md:p-8 lg:p-10">
            <div className="flex-1 space-y-6">
              <Badge
                variant="secondary"
                className="text-sm font-medium px-3 py-1 bg-white/20 hover:bg-white/30"
              >
                Featured Product
              </Badge>

              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{item.title}</h3>

              <p className="text-base md:text-lg">{item.description}</p>

              <ul className="space-y-3">
                {item.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="flex-shrink-0 rounded-full bg-white/20 p-1">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-sm md:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 pt-2">
                {item.ctaLinks.map((link, idx) => (
                  <Button
                    key={idx}
                    asChild
                    variant={idx === 0 ? "secondary" : "outline"}
                    size="lg"
                    className={
                      idx !== 0
                        ? "border-white hover:bg-white hover:text-blue-800"
                        : "bg-white text-blue-800 hover:bg-white/90"
                    }
                  >
                    <a href={link.href} target={link.target || "_self"}>
                      {link.text}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0 flex items-center justify-center p-4 bg-white/10 rounded-xl">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={item.image.src || "/placeholder.svg"}
                  alt={item.image.alt}
                  width={item.image.width}
                  height={item.image.height}
                  className="object-contain max-h-[300px] w-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

