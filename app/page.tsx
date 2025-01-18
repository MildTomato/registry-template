import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
import AuthLogin01 from "@/registry/auth-login-01-nextjs-app-router/page"
import { HelloWorld } from "@/registry/hello-world/hello-world"
import { ExampleForm } from "@/registry/example-form/example-form"
import PokemonPage from "@/registry/complex-component/page"
import { Command } from "@/components/command"

// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Custom Registry</h1>
        <p className="text-muted-foreground">
          A custom registry for distribution code using shadcn.
        </p>
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
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <Command name={`auth-login-01`} />
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A login form with Supabase authentication.
            </h2>
            <OpenInV0Button name="auth-login-01" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <AuthLogin01 />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <Command name={`hello-world`} />
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A simple hello world component
            </h2>
            <OpenInV0Button name="hello-world" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <HelloWorld />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <Command name={`example-form`} />
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A contact form with Zod validation.
            </h2>
            <OpenInV0Button name="example-form" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[500px] relative">
            <ExampleForm />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <Command name={`complex-component`} />
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A complex component showing hooks, libs and components.
            </h2>
            <OpenInV0Button name="complex-component" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <PokemonPage />
          </div>
        </div>
      </main>
    </div>
  )
}
