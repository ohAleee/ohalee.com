"use client"

import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { IconCloud } from "@/components/ui/icon-cloud";
import { MagicCard } from "@/components/ui/magic-card";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { SiGithub, SiOpenjdk } from '@icons-pack/react-simple-icons';
import { ChevronRight, Globe, LucideAlignHorizontalDistributeCenter, Music } from 'lucide-react';
import Link from "next/link";

const slugs = [
  "typescript",
  "javascript",
  "python",
  "openjdk",
  "go",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express/white",
  "nextdotjs/white",
  "amazonwebservices",
  "postgresql",
  "redis",
  "mariadb",
  "shadcnui/white",
  "firebase",
  "cloudflare",
  "nginx",
  "docker",
  "git",
  "github/white",
  "figma",
  "ubuntu",
];

const features = {
  performance: {
    title: "Performance",
    description: "Software needs to be fast and reliable. Don't let your users wait.",
    svg: (
      <svg
        className="h-6 w-6 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    ),
  },
  security: {
    title: "Security",
    description: "Protect your data and your users. Security is the key to success.",
    svg: (
      <svg
        className="h-6 w-6 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
  },
  scalability: {
    title: "Scalability",
    description: "Grow without limits. Your software should be able to handle it.",
    svg: (
      <svg
        className="h-6 w-6 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
}

const projects = {
  pinguproxy: {
    title: "PinguProxy",
    description: "Proxy Service",
    icon: Globe,
    content: "A professional proxy service providing IPv4/IPv6 solutions for various networking needs. Built with performance and reliability in mind.",
    link: "https://pinguproxy.com",
    linkLabel: "Visit Website",
  },
  fxreplay: {
    title: "FX Replay",
    description: "Trading Strategy Testing Platform",
    icon: LucideAlignHorizontalDistributeCenter,
    content: "Test and refine your manual trading strategies using historical market data. An advanced platform for forex traders.",
    link: "https://fxreplay.ohalee.com",
    linkLabel: "Visit Platform",
  },
  matchmakinglibrary: {
    title: "Matchmaking Library",
    description: "Java Matchmaking Library",
    icon: SiGithub,
    content: "A powerful Java library for implementing matchmaking systems in games and applications. Simplifies the process of creating balanced and fair matches.",
    link: "https://builtbybit.com/resources/ultimatematchmaking-game-library.30128/",
    linkLabel: "View on BuiltByBit",
  },
  ohmusic: {
    title: "ohMusic",
    description: "Discord Music Bot",
    icon: Music,
    content: "A feature-rich Discord music bot supporting multiple platforms including YouTube, Spotify, and SoundCloud. Stream your favorite music with high-quality audio.",
    link: "https://discord.com/oauth2/authorize?client_id=827620473477140234&permissions=36719616&scope=bot",
    linkLabel: "Add to Discord",
  },
  minecraftplugins: {
    title: "Minecraft Plugins",
    description: "BuiltByBit Creator Profile",
    icon: SiOpenjdk,
    content: "Collection of high-quality Minecraft plugins including Bedwars, Guilds, Docker Server Manager, Tournaments, and OneBlock. Trusted by numerous server owners.",
    link: "https://builtbybit.com/creators/ohalee.124730",
    linkLabel: "View Profile",
  },
}

export default function Page() {
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}`);

  return (
    <div className="bg-gradient-to-b from-background via-background/90 to-background/80">
      <ScrollProgress/>
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="container max-w-5xl mx-auto relative">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="w-full md:w-1/2 md:pr-8">
              <div className="md:hidden mb-8">
                <div className="relative aspect-square mx-auto">
                  <IconCloud images={images}/>
                </div>
              </div>

              <div className="text-center md:text-left px-4">
                <h1 className="text-6xl md:text-7xl font-medium mb-6 bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
                  Full Stack<br/>
                  Developer
                </h1>

                <div className="space-y-4 mt-8 mb-8">
                  <p className="text-md text-zinc-400 animate-fadeIn">
                    Building innovative solutions with modern technologies.
                    <br className="hidden md:inline"/>
                    Various Languages, Databases, and Frameworks.
                  </p>
                </div>

                <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4">
                  <Button
                    asChild
                    className="w-full md:w-auto bg-white text-black hover:bg-zinc-100 rounded-full px-6 py-6 text-lg"
                  >
                    <Link prefetch={false} href="https://github.com/ohalee" title="GitHub">
                      <SiGithub className="h-4 w-4"/>
                      GitHub
                      <ChevronRight className="w-4 h-4 ml-2"/>
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full md:w-auto text-zinc-400 hover:text-white rounded-full px-6 py-6 text-lg"
                  >
                    <Link prefetch={false} href="mailto:business@ohalee.com" title="Contact">
                      Contact
                      <ChevronRight className="w-4 h-4 ml-2"/>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="hidden md:block md:w-1/2 -mt-12">
              <div className="relative w-full aspect-square">
                <IconCloud images={images}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium mb-6">
              What to Aim For
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Building software is about creating solutions that solve problems and make a difference.<br/>
              Here are some key areas I focus on when developing software.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(features).map(([key, value]) => (
              <MagicCard key={key} className="shadow-2xl" gradientColor="#262626">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      {value.svg}
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </MagicCard>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-medium mb-6">
              Featured Projects
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Here are some of the projects I&#39;ve worked on.<br/>
              Each project is unique and serves a specific purpose.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(projects).map(([key, value]) => (
              <MagicCard key={key} className="shadow-2xl" gradientColor="#262626" gradientFrom="#513775" gradientTo="#47738f">
                <CardHeader className="p-4">
                  <CardTitle className="text-primary text-lg">{value.title}</CardTitle>
                  <CardDescription className="text-sm">{value.description}</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-muted-foreground text-sm">
                    {value.content}
                  </p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button variant="secondary" className="w-full hover:text-primary text-sm" asChild>
                    <Link href={value.link}>
                      <value.icon className="h-3 w-3"/>
                      {value.linkLabel}
                    </Link>
                  </Button>
                </CardFooter>
              </MagicCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

