'use client';

import { buttonVariants } from "@/components/ui/button";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { SiDiscord, SiGithub, SiInstagram, SiTelegram, SiTiktok } from "@icons-pack/react-simple-icons";
import { Mail } from "lucide-react";
import Link from "next/link";

const DATA = {
  contact: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/ohalee",
      icon: SiGithub,
    },
    Telegram: {
      name: "Telegram",
      url: "https://t.me/ohAlee",
      icon: SiTelegram,
    },
    Instagram: {
      name: "Instagram",
      url: "https://www.instagram.com/ohalee_",
      icon: SiInstagram,
    },
    TikTok: {
      name: "TikTok",
      url: "https://www.tiktok.com/@ohalee",
      icon: SiTiktok,
    },
    Discord: {
      name: "Discord",
      url: "https://discord.ohalee.com",
      icon: SiDiscord,
    },
    email: {
      name: "Email",
      url: "mailto:business@ohalee.com",
      icon: Mail,
    },
  },
};

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b bg-zinc-950 mt-auto py-8 container mx-auto px-4 sm:px-6">
      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex justify-center space-x-6 mb-4">
          <TooltipProvider>
            <Dock direction="middle" className="mt-0">
              {Object.entries(DATA.contact).map(([name, social]) => (
                <DockIcon key={name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={social.url}
                        aria-label={social.name}
                        className={cn(
                          buttonVariants({variant: "ghost", size: "icon"}),
                          "size-12 rounded-full",
                        )}
                      >
                        <social.icon className="size-4"/>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{name}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              ))}
            </Dock>
          </TooltipProvider>
        </div>
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2025 ohalee.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}