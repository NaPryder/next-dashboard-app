"use client"
import React from 'react'
import { registerAction } from '../_actions/authentications'

type Props = {}

export default function RegistrationPage({ }: Props) {
  return <div className="flex flex-col items-center justify-center p-4 h-[100dvh]">

    <h2 className="text-2xl mb-3">Sign Up</h2>

    <form action={registerAction} className="grid grid-cols-1 gap-2">

      <label htmlFor="email">
        Email/Username:
      </label>
      <input type="email" id="email" name="email" required />

      <label htmlFor="password">
        Password:
      </label>
      <input type="password" id="password" name="password" required />

      <button type="submit" className="mt-3 rounded-sm">Login</button>
    </form>

  </div>
}