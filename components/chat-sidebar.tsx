"use client"

import { useState } from "react"
import { Plus, Search, Settings, MessageSquare, Sparkles, Grid2x2, Globe, PanelRight, FilePenLine } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
  SidebarFooter,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { ConversationList } from "@/components/conversation-list"

export function ChatSidebar() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <Sidebar variant="sidebar" collapsible="icon">
      <SidebarHeader>
        <div className="flex justify-between">
          <Button variant={"ghost"} className=" rounded-full p-3">
            <PanelRight className="h-4 w-4" />
          </Button>
          <div className="flex gap-2">
            <Button variant={"ghost"} className=" rounded-full p-3">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant={"ghost"}  className=" rounded-full p-3">
              <FilePenLine className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Globe size={16} />
            <span>ChatGPT</span>
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Grid2x2 size={16} />
            <span>Explore GPTs</span>
          </Button>
        </div>
        {/* <form className="px-2">
          <div className="relative">
            <SidebarInput
              placeholder="Search conversations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8"
            />
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
        </form> */}
      </SidebarHeader>

      <SidebarContent>
        <ConversationList />
      </SidebarContent>

      <SidebarFooter>
        <SidebarSeparator />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <button className="w-full">
                <MessageSquare size={16} />
                <span>ChatGPT</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <button className="w-full">
                <Sparkles size={16} />
                <span>Upgrade plan</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <button className="w-full">
                <Settings size={16} />
                <span>Settings</span>
              </button>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}

