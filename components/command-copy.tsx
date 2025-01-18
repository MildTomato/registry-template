// import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

interface CommandCopyProps {
  name: string
}

export function CommandCopy({ name }: CommandCopyProps) {
  //   const [copied, setCopied] = useState(false)

  const command = `npx shadcn@latest add ${
    process.env.VERCEL_TARGET_ENV === "production"
      ? process.env.VERCEL_PROJECT_PRODUCTION_URL
      : process.env.VERCEL_TARGET_ENV === "preview"
      ? process.env.VERCEL_PROJECT_PREVIEW_URL
      : "http://localhost:3000"
  }/r/${name}.json`

  //   useEffect(() => {
  //     if (copied) {
  //       const timeout = setTimeout(() => setCopied(false), 2000)
  //       return () => clearTimeout(timeout)
  //     }
  //   }, [copied])

  return (
    <>
      <span className="text-sm text-gray-500">
        VERCEL_URL: {process.env.VERCEL_URL}
      </span>
      <span className="text-sm text-gray-500">
        VERCEL_PROJECT_PRODUCTION_URL:{" "}
        {process.env.VERCEL_PROJECT_PRODUCTION_URL}
      </span>
      <span className="text-sm text-gray-500">
        VERCEL_TARGET_ENV: {process.env.VERCEL_TARGET_ENV}
      </span>

      <div className="relative flex items-center rounded-lg bg-black px-4 py-3">
        <div className="flex-1 font-mono text-sm text-white">
          <span className="mr-2 text-[#888]">$</span>
          {command}
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="text-[#888] hover:text-white"
          //   onClick={() => {
          //     navigator.clipboard.writeText(command)
          //     setCopied(true)
          //   }}
        >
          {/* {copied ? (
            <Check className="h-4 w-4" />
          ) : (
            <Copy className="h-4 w-4" />
          )} */}
        </Button>
      </div>
    </>
  )
}
