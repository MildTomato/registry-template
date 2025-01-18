"use client"

import { Check, Copy } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function CommandCopyButton({ command }: { command: string }) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000)
      return () => clearTimeout(timeout)
    }
  }, [copied])

  return (
    <Button
      variant="ghost"
      size="icon"
      className="text-[#888] hover:text-white"
      onClick={() => {
        navigator.clipboard.writeText(command)
        setCopied(true)
      }}
    >
      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </Button>
  )
}
