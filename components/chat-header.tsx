"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ChevronDown, Share, Plus, MessageCircleDashed } from "lucide-react"

export function ChatHeader() {
  return (
    <header className="flex h-14 items-center justify-between border-b px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger className="h-8 w-8" />
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="gap-1 text-base font-medium">
            ChatGPT <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button variant={"outline"} className="rounded-full">
          <MessageCircleDashed  className="h-4 w-4" />
          <span>Temporary</span>
        </Button>
        <Button variant={"ghost"} size="icon" className="">
          <Plus className="h-4 w-4" />
        </Button>
      </div>
    </header>
  )
}

