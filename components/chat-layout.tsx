"use client"

import type React from "react"

import { ChatSidebar } from "@/components/chat-sidebar"
import { SidebarInset } from "@/components/ui/sidebar"

export function ChatLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full">
      <ChatSidebar />
      <SidebarInset className="flex flex-col">{children}</SidebarInset>
    </div>
  )
}

