"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type RequestItem = {
  id: string;
  service: string;
  name: string;
  phone: string;
  car: string | null;
  comment: string | null;
  status: string;
  created_at: string;
};

const statuses = [
  { value: "new", label: "Нова" },
  { value: "in_progress", label: "В роботі" },
  { value: "completed", label: "Виконана" },
  { value: "cancelled", label: "Скасована" },
];

function getStatusLabel(status: string) {
  return (
    statuses.find((item) => item.value === status)?.label ?? status
  );
}

function getStatusClass(status: string) {
  switch (status) {
    case "new":
      return "border-[#c9a66b]/40 text-[#c9a66b]";

    case "in_progress":
      return "border-blue-400/30 text-blue-400";

    case "completed":
      return "border-green-400/30 text-green-400";

    case "cancelled":
      return "border-red-400/30 text-red-400";

    default:
      return "border-white/10 text-gray-400";
  }
}

export default function AdminPage() {
  const router = useRouter();

  const [requests, setRequests] = useState<RequestItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [error, setError] = useState("");

  async function loadRequests() {
    setLoading(true);
    setError("");

    const { data, error } = await supabase
      .from("requests")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Помилка завантаження заявок:", error);
      setError("Не вдалося завантажити заявки.");
      setLoading(false);
      return;
    }

    setRequests(data ?? []);
    setLoading(false);
  }

  async function updateStatus(id: string, status: string) {
    setError("");

    const { error } = await supabase
      .from("requests")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error("Помилка зміни статусу:", error);
      setError("Не вдалося змінити статус заявки.");
      return;
    }

    setRequests((current) =>
      current.map((request) =>
        request.id === id
          ? { ...request, status }
          : request
      )
    );
  }

  async function handleLogout() {
    await supabase.auth.signOut();
    router.replace("/login");
  }

  useEffect(() => {
    async function checkAuth() {
      setCheckingAuth(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/login");
        return;
      }

      setCheckingAuth(false);
      loadRequests();
    }

    checkAuth();
  }, [router]);

  if (checkingAuth) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0b0d10] text-white">
        <div className="text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
            AUTOEXPERT
          </div>

          <div className="mt-4 text-sm text-gray-500">
            Перевірка доступу...
          </div>
        </div>
      </main>
    );
  }

  const newRequests = requests.filter(
    (request) => request.status === "new"
  ).length;

  const inProgressRequests = requests.filter(
    (request) => request.status === "in_progress"
  ).length;

  const completedRequests = requests.filter(
    (request) => request.status === "completed"
  ).length;

  return (
    <main className="min-h-screen bg-[#0b0d10] text-white">
      <header className="border-b border-[#c9a66b]/20 bg-[#101318]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c9a66b]">
              AUTOEXPERT
            </div>

            <h1 className="mt-1 text-2xl font-semibold">
              Панель керування
            </h1>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="/"
              className="text-sm text-gray-400 transition hover:text-[#c9a66b]"
            >
              На сайт →
            </a>

            <button
              type="button"
              onClick={handleLogout}
              className="text-sm text-gray-500 transition hover:text-red-400"
            >
              Вийти
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid gap-4 md:grid-cols-5">
          <div className="rounded-xl border border-[#c9a66b]/20 bg-[#15191e] p-5">
            <div className="text-sm text-gray-500">
              Всього заявок
            </div>

            <div className="mt-2 text-3xl font-semibold text-[#c9a66b]">
              {requests.length}
            </div>
          </div>

          <div className="rounded-xl border border-[#c9a66b]/20 bg-[#15191e] p-5">
            <div className="text-sm text-gray-500">
              Нові
            </div>

            <div className="mt-2 text-3xl font-semibold text-[#c9a66b]">
              {newRequests}
            </div>
          </div>

          <div className="rounded-xl border border-blue-400/20 bg-[#15191e] p-5">
            <div className="text-sm text-gray-500">
              В роботі
            </div>

            <div className="mt-2 text-3xl font-semibold text-blue-400">
              {inProgressRequests}
            </div>
          </div>

          <div className="rounded-xl border border-green-400/20 bg-[#15191e] p-5">
            <div className="text-sm text-gray-500">
              Виконані
            </div>

            <div className="mt-2 text-3xl font-semibold text-green-400">
              {completedRequests}
            </div>
          </div>

          <div className="rounded-xl border border-green-400/20 bg-[#15191e] p-5">
            <div className="text-sm text-gray-500">
              Система
            </div>

            <div className="mt-2 text-lg font-semibold text-green-400">
              ONLINE
            </div>
          </div>
        </div>

        {error && (
          <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-sm text-red-300">
            {error}
          </div>
        )}

        <section className="mt-8 overflow-hidden rounded-xl border border-[#c9a66b]/20 bg-[#15191e]">
          <div className="flex flex-col gap-4 border-b border-white/5 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold">
                Заявки клієнтів
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Усі заявки, які надійшли через сайт
              </p>
            </div>

            <button
              type="button"
              onClick={loadRequests}
              disabled={loading}
              className="rounded-lg border border-[#c9a66b]/30 px-4 py-2 text-sm text-[#c9a66b] transition hover:bg-[#c9a66b] hover:text-[#0b0d10] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Оновлення..." : "Оновити"}
            </button>
          </div>

          {loading ? (
            <div className="px-6 py-12 text-center text-gray-500">
              Завантаження заявок...
            </div>
          ) : requests.length === 0 ? (
            <div className="px-6 py-12 text-center text-gray-500">
              Заявок поки немає.
            </div>
          ) : (
            <div className="divide-y divide-white/5">
              {requests.map((request) => (
                <div
                  key={request.id}
                  className="p-6 transition hover:bg-white/[0.02]"
                >
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-semibold text-white">
                          {request.name}
                        </h3>

                        <span
                          className={`rounded-full border px-3 py-1 text-xs ${getStatusClass(
                            request.status
                          )}`}
                        >
                          {getStatusLabel(request.status)}
                        </span>
                      </div>

                      <div className="mt-4 grid gap-3 text-sm md:grid-cols-2">
                        <div>
                          <div className="text-gray-600">
                            Послуга
                          </div>

                          <div className="mt-1 text-gray-300">
                            {request.service}
                          </div>
                        </div>

                        <div>
                          <div className="text-gray-600">
                            Телефон
                          </div>

                          <a
                            href={`tel:${request.phone}`}
                            className="mt-1 block text-[#c9a66b] hover:underline"
                          >
                            {request.phone}
                          </a>
                        </div>

                        {request.car && (
                          <div>
                            <div className="text-gray-600">
                              Автомобіль
                            </div>

                            <div className="mt-1 text-gray-300">
                              {request.car}
                            </div>
                          </div>
                        )}

                        <div>
                          <div className="text-gray-600">
                            Дата
                          </div>

                          <div className="mt-1 text-gray-300">
                            {new Date(
                              request.created_at
                            ).toLocaleString("uk-UA")}
                          </div>
                        </div>
                      </div>

                      {request.comment && (
                        <div className="mt-4 rounded-lg border border-white/5 bg-[#0b0d10] p-4">
                          <div className="text-xs uppercase tracking-wider text-gray-600">
                            Коментар
                          </div>

                          <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-gray-300">
                            {request.comment}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="w-full lg:w-48">
                      <label className="mb-2 block text-xs text-gray-600">
                        Статус
                      </label>

                      <select
                        value={request.status}
                        onChange={(event) =>
                          updateStatus(
                            request.id,
                            event.target.value
                          )
                        }
                        className="w-full rounded-lg border border-[#c9a66b]/20 bg-[#0b0d10] px-3 py-2.5 text-sm text-white outline-none focus:border-[#c9a66b]/60"
                      >
                        {statuses.map((status) => (
                          <option
                            key={status.value}
                            value={status.value}
                          >
                            {status.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}