"use client"

import { MessageSquare } from "lucide-react"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"

// Mock data for conversations
const timeGroups = [
  {
    label: "Today",
    conversations: [
      { id: "1", title: "Nx Next.js Monorepo" },
      { id: "2", title: "Nx Angular Monorepo Setup" },
      { id: "3", title: "Nx PrimeNG Shared Library" },
      { id: "4", title: "Add dependency in Nx" },
    ],
  },
  {
    label: "Yesterday",
    conversations: [
      { id: "5", title: "Timer in Next.js" },
      { id: "6", title: "Real-time Chat Streaming Handler" },
      { id: "7", title: "Tech Stack Discussion" },
      { id: "8", title: "Handling API Streaming in Next.js" },
      { id: "9", title: "Full-stack Development Experience" },
    ],
  },
  {
    label: "Previous 7 Days",
    conversations: [
      { id: "10", title: "Database Schema Design" },
      { id: "11", title: "Authentication Strategies" },
    ],
  },
]

export function ConversationList() {
  return (
    <>
      {timeGroups.map((group) => (
        <SidebarGroup key={group.label}>
          <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {group.conversations.map((conversation) => (
                <SidebarMenuItem key={conversation.id}>
                  <SidebarMenuButton asChild>
                    <button className="w-full">
                      <MessageSquare size={16} />
                      <span>{conversation.title}</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      ))}
    </>
  )
}

