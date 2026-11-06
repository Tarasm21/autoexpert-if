"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      console.error("Помилка входу:", error);

      setError("Невірний email або пароль.");
      setLoading(false);
      return;
    }

    router.replace("/admin");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b0d10] px-4 text-white">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-[#c9a66b]/20 bg-[#15191e] p-8 shadow-2xl">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
              AUTOEXPERT
            </div>

            <h1 className="mt-4 text-2xl font-semibold">
              Вхід в акаунт
            </h1>

            <p className="mt-2 text-sm text-gray-500">
              Увійдіть, щоб продовжити
            </p>
          </div>

          {error && (
            <div className="mt-6 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin} className="mt-7 space-y-5">
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Email
              </label>

              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                autoComplete="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-white/10 bg-[#0b0d10] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-[#c9a66b]/60"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Пароль
              </label>

              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                autoComplete="current-password"
                placeholder="Ваш пароль"
                className="w-full rounded-lg border border-white/10 bg-[#0b0d10] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-[#c9a66b]/60"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[#c9a66b] px-6 py-3.5 text-sm font-semibold text-[#0b0d10] transition hover:bg-[#d7b77e] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Вхід..." : "Увійти"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="/"
              className="text-sm text-gray-500 transition hover:text-[#c9a66b]"
            >
              ← Повернутися на сайт
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}