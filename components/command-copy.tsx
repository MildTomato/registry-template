"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"

interface CommandCopyProps {
  name: string
}

export function CommandCopy({ name }: CommandCopyProps) {
  const [copied, setCopied] = useState(false)

  const command = `npx shadcn@latest add ${
    process.env.VERCEL_ENV === "prod"
      ? process.env.VERCEL_PROJECT_PRODUCTION_URL
      : process.env.VERCEL_ENV === "preview"
      ? process.env.VERCEL_PROJECT_PREVIEW_URL
      : "http://localhost:3000"
  }/r/${name}.json`

  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => setCopied(false), 2000)
      return () => clearTimeout(timeout)
    }
  }, [copied])

  return (
    <div className="relative flex items-center rounded-lg bg-black px-4 py-3">
      <div className="flex-1 font-mono text-sm text-white">
        <span className="mr-2 text-[#888]">$</span>
        {command}
      </div>
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
    </div>
  )
}
