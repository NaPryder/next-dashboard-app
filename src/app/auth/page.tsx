"use client"
import { useFormState } from "react-dom";
import { loginAction } from "./_actions/authentications";

const initialState = {
  message: ''
}

export default function AuthPage() {

  const [state, formAction] = useFormState(loginAction, initialState)
  return <div className="flex flex-col items-center justify-center p-4 h-[100dvh]">

    <h2 className="text-2xl mb-3">Login</h2>

    <form action={formAction} className="grid grid-cols-1 gap-2">

      <label htmlFor="email">
        Email/Username:
      </label>
      <input type="text" id="email" name="email" required />

      <label htmlFor="password">
        Password:
      </label>
      <input type="password" id="password" name="password" required />
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>

      <button type="submit" className="mt-3 rounded-sm">Login</button>
    </form>

  </div>
}