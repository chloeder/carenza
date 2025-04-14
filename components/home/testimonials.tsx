"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The AI Career Coach helped me refine my resume and prepare for technical interviews. I landed a job at a top tech company within a month!",
    stars: 5,
  },
  {
    name: "Michael Chen",
    role: "Marketing Director",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The career path planning feature gave me clarity on what skills I needed to develop. The personalized roadmap was exactly what I needed.",
    stars: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The interview practice sessions were incredibly realistic. The AI feedback helped me identify and improve my weak points before real interviews.",
    stars: 4,
  },
  {
    name: "David Kim",
    role: "Product Manager",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The salary negotiation guidance was a game-changer. I successfully negotiated a 25% higher offer than initially proposed. The AI's insights were spot-on!",
    stars: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Data Scientist",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The networking strategies and LinkedIn profile optimization tips were invaluable. I've received more recruiter messages than ever before.",
    stars: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from professionals who have transformed their careers with our
            AI coaching
          </p>
        </div>

        <div className="rounded-md flex flex-col antialiased bg-white dark:bg-gray-900 dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}
