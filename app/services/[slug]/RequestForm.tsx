"use client";

import { FormEvent, useState } from "react";
import { supabase } from "@/lib/supabase";

type RequestFormProps = {
  serviceTitle: string;
};

export default function RequestForm({
  serviceTitle,
}: RequestFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [car, setCar] = useState("");
  const [comment, setComment] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setError("");

    if (!name.trim() || !phone.trim()) {
      setError("Будь ласка, вкажіть ім'я та номер телефону.");
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from("requests")
      .insert({
        service: serviceTitle,
        name: name.trim(),
        phone: phone.trim(),
        car: car.trim() || null,
        comment: comment.trim() || null,
      });

    if (error) {
      console.error("Помилка створення заявки:", error);

      setError(
        "Не вдалося відправити заявку. Спробуйте ще раз."
      );

      setLoading(false);
      return;
    }

    setSubmitted(true);
    setLoading(false);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-[#c9a66b]/30 bg-[#15191e] p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#c9a66b]/40 text-2xl text-[#c9a66b]">
          ✓
        </div>

        <h3 className="mt-5 text-xl font-semibold text-white">
          Заявку відправлено
        </h3>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-400">
          Дякуємо! Ми отримали вашу заявку та зв'яжемося
          з вами найближчим часом.
        </p>

        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setName("");
            setPhone("");
            setCar("");
            setComment("");
          }}
          className="mt-6 text-sm text-[#c9a66b] hover:underline"
        >
          Відправити ще одну заявку
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-[#c9a66b]/30 bg-[#15191e] p-6 md:p-8"
    >
      <div className="mb-7">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-[#c9a66b]">
          Заявка
        </div>

        <h3 className="mt-2 text-2xl font-semibold text-white">
          Замовити послугу
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Залиште свої контакти — ми зв'яжемося з вами
          для уточнення деталей.
        </p>
      </div>

      {error && (
        <div className="mb-5 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {error}
        </div>
      )}

      <div className="space-y-5">
        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Послуга
          </label>

          <input
            type="text"
            value={serviceTitle}
            readOnly
            className="w-full rounded-lg border border-white/10 bg-[#0b0d10] px-4 py-3 text-sm text-gray-400 outline-none"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Ім'я *
          </label>

          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            maxLength={100}
            required
            placeholder="Ваше ім'я"
            className="w-full rounded-lg border border-white/10 bg-[#0b0d10] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-[#c9a66b]/60"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Телефон *
          </label>

          <input
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            maxLength={30}
            required
            placeholder="+380..."
            className="w-full rounded-lg border border-white/10 bg-[#0b0d10] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-[#c9a66b]/60"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Автомобіль
          </label>

          <input
            type="text"
            value={car}
            onChange={(event) => setCar(event.target.value)}
            maxLength={150}
            placeholder="Наприклад: BMW X5 2020"
            className="w-full rounded-lg border border-white/10 bg-[#0b0d10] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-[#c9a66b]/60"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm text-gray-400">
            Коментар
          </label>

          <textarea
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            maxLength={2000}
            rows={5}
            placeholder="Опишіть, що вам потрібно..."
            className="w-full resize-none rounded-lg border border-white/10 bg-[#0b0d10] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-[#c9a66b]/60"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-[#c9a66b] px-6 py-3.5 text-sm font-semibold text-[#0b0d10] transition hover:bg-[#d7b77e] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Відправлення..." : "Відправити заявку"}
        </button>
      </div>
    </form>
  );
}