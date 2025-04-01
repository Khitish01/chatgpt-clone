import { cn } from "@/lib/utils"
import { Bot, User } from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user"

  return (
    <div className={cn("mb-4 flex", isUser ? "justify-end" : "justify-start")}>
      <div className={cn("flex max-w-3xl", isUser ? "flex-row-reverse" : "flex-row")}>
        <div
          className={cn(
            "flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md",
            isUser ? "bg-primary text-primary-foreground ml-2" : "bg-muted mr-2",
          )}
        >
          {isUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
        </div>
        <div className={cn("flex flex-col space-y-1", isUser ? "items-end" : "items-start")}>
          <div className="rounded-lg bg-accent p-3">
            <p className="text-sm">{message.content}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

