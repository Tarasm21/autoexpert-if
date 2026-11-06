
import Link from "next/link";
import { notFound } from "next/navigation";
import RequestForm from "./RequestForm";

const services = {
  "diagnostyka-remont": {
    number: "01",
    title: "Діагностика та ремонт",
    subtitle: "Технічна впевненість у кожній поїздці.",
    description:
      "Комп'ютерна діагностика, пошук несправностей, технічне обслуговування та ремонт автомобілів.",
    items: [
      "Комп'ютерна діагностика",
      "Перевірка електронних систем",
      "Пошук технічних несправностей",
      "Технічне обслуговування",
      "Консультація щодо ремонту",
    ],
  },
  avtopidbir: {
    number: "02",
    title: "Перевірка та автопідбір",
    subtitle: "Правильний автомобіль починається з перевірки.",
    description:
      "Допомога у виборі автомобіля, перевірка його технічного стану та оцінка перед купівлею.",
    items: [
      "Огляд кузова та лакофарбового покриття",
      "Комп'ютерна діагностика",
      "Перевірка технічного стану",
      "Аналіз історії автомобіля",
      "Консультація перед купівлею",
    ],
  },
  "avto-z-kordonu": {
    number: "03",
    title: "Автомобілі з-за кордону",
    subtitle: "Допомагаємо знайти автомобіль вашої мрії.",
    description:
      "Пошук автомобілів за кордоном, консультації щодо придбання, доставки та оформлення.",
    items: [
      "Пошук автомобіля",
      "Попередня оцінка вартості",
      "Перевірка інформації про авто",
      "Організація доставки",
      "Консультації щодо оформлення",
    ],
  },
  deteyling: {
    number: "04",
    title: "Детейлінг та догляд",
    subtitle: "Догляд, який повертає автомобілю вигляд.",
    description:
      "Комплексний догляд за автомобілем, очищення, полірування та захист поверхонь.",
    items: [
      "Детейлінг-мийка",
      "Хімчистка салону",
      "Полірування кузова",
      "Захисні покриття",
      "Догляд за інтер'єром",
    ],
  },
  "shyny-dysky": {
    number: "05",
    title: "Шини та диски",
    subtitle: "Безпека починається з контакту з дорогою.",
    description:
      "Підбір шин і дисків, консультації щодо комплектації та організації шиномонтажу.",
    items: [
      "Підбір шин",
      "Підбір дисків",
      "Шиномонтаж",
      "Балансування коліс",
      "Сезонна заміна шин",
    ],
  },
  strakhuvannya: {
    number: "06",
    title: "Страхування",
    subtitle: "Захист вашого автомобіля та спокій за кермом.",
    description:
      "Консультації щодо страхових продуктів та допомога з підбором страхового покриття.",
    items: [
      "ОСЦПВ",
      "КАСКО",
      "Порівняння страхових пропозицій",
      "Консультація щодо умов",
      "Допомога з оформленням",
    ],
  },
  avtozapchastyny: {
    number: "07",
    title: "Автозапчастини",
    subtitle: "Потрібна деталь — допоможемо знайти.",
    description:
      "Підбір автомобільних запчастин і комплектуючих відповідно до марки, моделі та комплектації.",
    items: [
      "Підбір запчастин",
      "Пошук оригінальних деталей",
      "Підбір аналогів",
      "Перевірка сумісності",
      "Консультація щодо заміни",
    ],
  },
  avtodokumenty: {
    number: "08",
    title: "Автодокументи",
    subtitle: "Зрозумілий супровід автомобільних процедур.",
    description:
      "Консультації щодо реєстраційних процедур, документів та оформлення автомобілів.",
    items: [
      "Консультації щодо реєстрації",
      "Перелік необхідних документів",
      "Супровід оформлення",
      "Консультації щодо імпорту",
      "Інформаційна підтримка",
    ],
  },
};

type ServiceSlug = keyof typeof services;

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!Object.prototype.hasOwnProperty.call(services, slug)) {
    return { title: "Послугу не знайдено | AUTOEXPERT" };
  }

  const service = services[slug as ServiceSlug];

  return {
    title: `${service.title} | AUTOEXPERT`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!Object.prototype.hasOwnProperty.call(services, slug)) {
    notFound();
  }

  const service = services[slug as ServiceSlug];

  return (
    <main className="min-h-screen bg-[#090b0e] text-white">
      {/* HEADER */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-10">
          <Link href="/" className="text-2xl font-black tracking-[0.12em]">
            AUTOEXPERT<span className="text-[#c9a66b]">.</span>
          </Link>

          <Link
            href="/#services"
            className="text-sm text-zinc-300 transition hover:text-[#c9a66b]"
          >
            ← Усі послуги
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1d232b] via-[#090b0e] to-[#090b0e]" />
        <div className="absolute right-[-100px] top-[-150px] h-[450px] w-[450px] rounded-full border border-[#c9a66b]/10" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-10 lg:py-36">
          <p className="mb-8 text-xs font-bold tracking-[0.35em] text-[#c9a66b]">
            AUTOEXPERT / ПОСЛУГИ / {service.number}
          </p>

          <h1 className="max-w-4xl text-5xl font-black leading-tight sm:text-7xl">
            {service.title}
            <span className="text-[#c9a66b]">.</span>
          </h1>

          <p className="mt-8 text-xl text-[#c9a66b]">
            {service.subtitle}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400">
            {service.description}
          </p>

          <a
            href="#request"
            className="mt-10 inline-block rounded-full bg-[#c9a66b] px-9 py-4 text-sm font-bold text-black transition hover:bg-[#dfc18d]"
          >
            ЗАМОВИТИ ПОСЛУГУ ↗
          </a>
        </div>
      </section>

      {/* SERVICE DETAILS */}
      <section className="px-5 py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs font-bold tracking-[0.3em] text-[#c9a66b]">
              ЩО ВХОДИТЬ У ПОСЛУГУ
            </p>

            <h2 className="mb-10 text-3xl font-bold sm:text-4xl">
              НАШІ МОЖЛИВОСТІ
              <span className="text-[#c9a66b]">.</span>
            </h2>

            <div className="space-y-4">
              {service.items.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-5 border-b border-white/10 pb-5"
                >
                  <span className="text-sm text-[#c9a66b]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-zinc-200">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center border border-[#c9a66b]/20 bg-[#111419] p-8 sm:p-12">
            <p className="text-xs font-bold tracking-[0.3em] text-[#c9a66b]">
              AUTOEXPERT
            </p>

            <h2 className="mt-6 text-3xl font-bold">
              Потрібна ця послуга?
            </h2>

            <p className="mt-5 leading-8 text-zinc-400">
              Зв'яжіться з нами, щоб обговорити ваше завдання,
              уточнити можливості та погодити умови виконання.
            </p>

            <a
              href="#request"
              className="mt-9 inline-block rounded-full border border-[#c9a66b] px-7 py-4 text-center text-sm font-bold text-[#c9a66b] transition hover:bg-[#c9a66b] hover:text-black"
            >
              ОБГОВОРИТИ ЗАМОВЛЕННЯ →
            </a>

            <p className="mt-5 text-xs text-zinc-500">
              Вартість залежить від конкретного автомобіля та обсягу робіт.
              Остаточну ціну погоджуємо перед виконанням.
            </p>
          </div>
        </div>
      </section>

      {/* REQUEST FORM */}
      <section
        id="request"
        className="scroll-mt-24 bg-[#090b0e] px-5 py-24 lg:px-10"
      >
        <div className="mx-auto max-w-3xl">
          <RequestForm serviceTitle={service.title} />
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-[#111419] px-5 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-bold tracking-[0.3em] text-[#c9a66b]">
            AUTOEXPERT · ІВАНО-ФРАНКІВСЬК
          </p>

          <h2 className="mt-6 text-4xl font-black sm:text-5xl">
            ВАШЕ АВТО.
            <br />
            <span className="text-[#c9a66b]">НАШЕ РІШЕННЯ.</span>
          </h2>

          <p className="mt-7 leading-8 text-zinc-400">
            Зверніться до AUTOEXPERT, щоб обговорити потрібну
            автомобільну послугу.
          </p>

          <Link
            href="/#services"
            className="mt-9 inline-block rounded-full bg-[#c9a66b] px-9 py-4 text-sm font-bold text-black"
          >
            УСІ ПОСЛУГИ →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-8 text-center text-xs text-zinc-500">
        © 2026 AUTOEXPERT. Усі права захищені.
      </footer>
    </main>
  );
}
