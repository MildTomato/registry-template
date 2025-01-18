import { LoginForm } from "@/registry/auth-login-01/components/login-form"

export default function Page() {
  return (
    <div className="flex items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}
