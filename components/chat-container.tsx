"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { AudioLines, Ellipsis, Globe, Lightbulb, Plus, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChatHeader } from "@/components/chat-header"
import { ChatMessage } from "@/components/chat-message"
import { Textarea } from "@/components/ui/textarea"

// Mock data for messages
const initialMessages: any[] = [
  // Empty initially for new chat
]

export function ChatContainer() {
  const [messages, setMessages] = useState(initialMessages)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage = { id: Date.now().toString(), role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate AI response
    setIsLoading(true)

    // Simulate delay
    setTimeout(() => {
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `This is a simulated response to: "${input}"`,
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="flex h-full flex-col">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto p-4">
        {messages.length === 0 ? (
          <div className="flex h-[calc(100vh-110px)] flex-col items-center justify-center">
            <h1 className="mb-8 text-4xl font-bold">What can I help with?</h1>
            {/* <div className="grid w-full max-w-3xl grid-cols-1 gap-4 px-4 md:grid-cols-2">
              <div className="rounded-lg border p-4 hover:bg-accent">
                <h3 className="mb-2 font-medium">Explain quantum computing</h3>
                <p className="text-sm text-muted-foreground">
                  Explain the basics of quantum computing to a high school student
                </p>
              </div>
              <div className="rounded-lg border p-4 hover:bg-accent">
                <h3 className="mb-2 font-medium">Creative writing</h3>
                <p className="text-sm text-muted-foreground">Write a short story about a robot learning to love</p>
              </div>
            </div> */}
            <div className="p-4 w-[80%] border border-zinc-50 rounded-3xl shadow-lg">
              <div>
                <form onSubmit={handleSubmit} className="relative">
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask anything..."
                    className=" resize-none pr-12 p-4"
                    rows={1}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        handleSubmit(e)
                      }
                    }}
                  />
                </form>
                <div className="flex justify-between mt-3">
                  <div className="flex gap-3">
                    <Button variant={"outline"} className="border border-zinc-300 rounded-full p-3">
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button variant={"outline"} className="border border-zinc-300 rounded-full p-3">
                      <Globe className="h-4 w-4" />
                      <span>Search</span>
                    </Button>
                    <Button variant={"outline"} className="border border-zinc-300 rounded-full p-3">

                      <Lightbulb className="h-4 w-4" />
                      <span>Reason</span>
                    </Button>
                    <Button variant={"outline"} className="border border-zinc-300 rounded-full p-3">
                      <Ellipsis className="h-4 w-4"  />
                    </Button>
                  </div>
                    <Button variant={"default"} size="icon"  className="h-8 w-8 rounded-full bg-black">
                      <AudioLines className="h-6 w-6" />
                    </Button>
                </div>
              </div>

            </div>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isLoading && (
              <div className="flex items-center space-x-2 py-4">
                <div className="h-3 w-3 animate-bounce rounded-full bg-primary"></div>
                <div
                  className="h-3 w-3 animate-bounce rounded-full bg-primary"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="h-3 w-3 animate-bounce rounded-full bg-primary"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </>
        )}
        <div className="text-center text-xs text-muted-foreground">
          ChatGPT can make mistakes. Check important info.
        </div>
      </div>


    </div>
  )
}

