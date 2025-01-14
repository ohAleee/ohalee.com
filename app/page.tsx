"use client"

import { AnimatedCard } from "@/components/animated-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiDiscord, SiGithub, SiInstagram, SiTelegram, SiTiktok } from '@icons-pack/react-simple-icons';
import { motion } from "framer-motion";
import { Globe, LucideAlignHorizontalDistributeCenter, Mail, Music } from 'lucide-react';
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/90 to-background/80">
      <section className="relative overflow-hidden px-6 pt-24 pb-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5}}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
              Full Stack Developer
            </h1>
          </motion.div>
          <motion.p
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.2}}
            className="mt-6 text-lg leading-8 text-muted-foreground"
          >
            Building innovative solutions with modern technologies.<br/>
            Various Languages, Databases, and Frameworks.
          </motion.p>
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.4}}
            className="mt-10 flex items-center justify-center gap-6"
          >
            <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
              <Link href="https://github.com/ohalee">
                <SiGithub className="h-4 w-4"/>
                GitHub
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.2}}
          >
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
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
                  </div>
                  <CardTitle className="text-xl">Performance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Software needs to be fast and reliable. Don&#39;t let your users wait.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.3}}
          >
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
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
                  </div>
                  <CardTitle className="text-xl">Security</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Protect your data and your users. Security is the key to success.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.4}}
          >
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
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
                  </div>
                  <CardTitle className="text-xl">Scalability</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Grow without limits. Your software should be able to handle it.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-8 py-8">
        <motion.h2
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.5}}
          className="text-3xl font-bold tracking-tight mb-12 text-center bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <AnimatedCard index={0}>
            <Card className="border-primary/20 hover:border-primary/50 transition-colors max-w-sm mx-auto">
              <CardHeader className="p-4">
                <CardTitle className="text-primary text-lg">PinguProxy</CardTitle>
                <CardDescription className="text-sm">IPv6 Proxy Service</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-muted-foreground text-sm">
                  A professional proxy service providing IPv6 solutions for various networking needs. Built with
                  performance and reliability in mind.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="secondary" className="w-full hover:text-primary text-sm" asChild>
                  <Link href="https://pinguproxy.com">
                    <Globe className="h-3 w-3"/>
                    Visit Website
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </AnimatedCard>

          <AnimatedCard index={1}>
            <Card className="border-primary/20 hover:border-primary/50 transition-colors max-w-sm mx-auto">
              <CardHeader className="p-4">
                <CardTitle className="text-primary text-lg">FX Replay</CardTitle>
                <CardDescription className="text-sm">Trading Strategy Testing Platform</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-muted-foreground text-sm">
                  Test and refine your manual trading strategies using historical market data.
                  An advanced platform for forex traders.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="secondary" className="w-full hover:text-primary text-sm" asChild>
                  <Link href="https://fxreplay.ohalee.com">
                    <LucideAlignHorizontalDistributeCenter className="h-3 w-3"/>
                    Visit Platform
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </AnimatedCard>

          <AnimatedCard index={2}>
            <Card className="border-primary/20 hover:border-primary/50 transition-colors max-w-sm mx-auto">
              <CardHeader className="p-4">
                <CardTitle className="text-primary text-lg">ohMusic</CardTitle>
                <CardDescription className="text-sm">Discord Music Bot</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-muted-foreground text-sm">
                  A feature-rich Discord music bot supporting multiple platforms including YouTube,
                  Spotify, and SoundCloud. Stream your favorite music with high-quality audio.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="secondary" className="w-full hover:text-primary text-sm">
                  <Music className="h-3 w-3"/>
                  ohMusic#3095
                </Button>
              </CardFooter>
            </Card>
          </AnimatedCard>

          <AnimatedCard index={3}>
            <Card className="border-primary/20 hover:border-primary/50 transition-colors max-w-sm mx-auto">
              <CardHeader className="p-4">
                <CardTitle className="text-primary text-lg">Minecraft Plugins</CardTitle>
                <CardDescription className="text-sm">BuiltByBit Creator Profile</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-muted-foreground text-sm">
                  Collection of high-quality Minecraft plugins including Bedwars, Guilds, Docker Server Manager,
                  Tournaments, and OneBlock. Trusted by numerous server owners.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="secondary" className="w-full hover:text-primary text-sm" asChild>
                  <Link href="https://builtbybit.com/creators/ohalee.124730">
                    <Globe className="h-3 w-3"/>
                    View Profile
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </AnimatedCard>
          <AnimatedCard index={4}>
            <Card className="border-primary/20 hover:border-primary/50 transition-colors max-w-sm mx-auto">
              <CardHeader className="p-4">
                <CardTitle className="text-primary text-lg">Matchmaking Library</CardTitle>
                <CardDescription className="text-sm">Java Matchmaking Library</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-muted-foreground text-sm">
                  A powerful Java library for implementing matchmaking systems in games and applications. Simplifies the process of creating balanced and fair matches.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="secondary" className="w-full hover:text-primary text-sm" asChild>
                  <Link href="https://builtbybit.com/resources/ultimatematchmaking-game-library.30128/">
                    <SiGithub className="h-3 w-3"/>
                    View on BuiltByBit
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </AnimatedCard>
        </div>
      </section>

      <footer className="border-t mt-8 border-primary/20">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex justify-center space-x-6 mb-4">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/ohalee">
                <SiGithub className="h-5 w-5 text-muted-foreground hover:text-primary"/>
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://t.me/ohAlee">
                <SiTelegram className="h-5 w-5 text-muted-foreground hover:text-primary"/>
                <span className="sr-only">Telegram</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.instagram.com/ohalee_">
                <SiInstagram className="h-5 w-5 text-muted-foreground hover:text-primary"/>
                <span className="sr-only">Instagram</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.tiktok.com/@ohalee">
                <SiTiktok className="h-5 w-5 text-muted-foreground hover:text-primary"/>
                <span className="sr-only">TikTok</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://discord.ohalee.com">
                <SiDiscord className="h-5 w-5 text-muted-foreground hover:text-primary"/>
                <span className="sr-only">Discord</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:business@ohalee.com">
                <Mail className="h-5 w-5 text-muted-foreground hover:text-primary"/>
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 ohalee.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

