
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Діагностика та ремонт",
    description:
      "Комп'ютерна діагностика, пошук несправностей, технічне обслуговування та ремонт.",
    slug: "diagnostyka-remont",
  },
  {
    number: "02",
    title: "Перевірка та автопідбір",
    description:
      "Перевірка автомобіля перед купівлею, оцінка технічного стану та допомога у виборі.",
    slug: "avtopidbir",
  },
  {
    number: "03",
    title: "Автомобілі з-за кордону",
    description:
      "Пошук автомобілів, організація доставки та консультації щодо оформлення.",
    slug: "avto-z-kordonu",
  },
  {
    number: "04",
    title: "Детейлінг та догляд",
    description:
      "Комплексний догляд за автомобілем, полірування та захист кузова.",
    slug: "deteyling",
  },
  {
    number: "05",
    title: "Шини та диски",
    description:
      "Підбір шин і дисків, шиномонтаж, балансування та сезонне обслуговування.",
    slug: "shyny-dysky",
  },
  {
    number: "06",
    title: "Страхування",
    description:
      "Консультації щодо ОСЦПВ, КАСКО та підбору страхового покриття.",
    slug: "strakhuvannya",
  },
  {
    number: "07",
    title: "Автозапчастини",
    description:
      "Пошук і підбір оригінальних запчастин та якісних аналогів.",
    slug: "avtozapchastyny",
  },
  {
    number: "08",
    title: "Автодокументи",
    description:
      "Консультації щодо реєстрації, оформлення та автомобільних документів.",
    slug: "avtodokumenty",
  },
];

const advantages = [
  {
    number: "01",
    title: "Все в одному місці",
    description:
      "Об'єднуємо автомобільні послуги, спеціалістів та партнерів.",
  },
  {
    number: "02",
    title: "Перевірені партнери",
    description:
      "Формуємо мережу автомобільних компаній та незалежних фахівців.",
  },
  {
    number: "03",
    title: "Зручний сервіс",
    description:
      "Допомагаємо знайти потрібну послугу та залишити заявку онлайн.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#090b0e] text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090b0e]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-10">
          <Link href="/" className="text-xl font-black tracking-[0.13em] sm:text-2xl">
            AUTOEXPERT<span className="text-[#c9a66b]">.</span>
          </Link>

          <nav className="hidden items-center gap-8 text-sm text-zinc-300 lg:flex">
            <a href="#services" className="transition hover:text-[#c9a66b]">Послуги</a>
            <a href="#about" className="transition hover:text-[#c9a66b]">Про нас</a>
            <a href="#partners" className="transition hover:text-[#c9a66b]">Партнерам</a>
            <a href="#contact" className="transition hover:text-[#c9a66b]">Контакти</a>
          </nav>

          <Link
            href="#contact"
            className="rounded-full border border-[#c9a66b] px-4 py-3 text-[10px] font-bold tracking-wider text-[#c9a66b] transition hover:bg-[#c9a66b] hover:text-black sm:px-6 sm:text-xs"
          >
            ЗАЛИШИТИ ЗАЯВКУ
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative flex min-h-[680px] items-center overflow-hidden sm:min-h-[760px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2200&q=90')",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#090b0e] via-[#090b0e]/85 to-[#090b0e]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e] via-transparent to-[#090b0e]/30" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-24 lg:px-10">
          <div className="max-w-3xl">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-px w-12 bg-[#c9a66b]" />
              <span className="text-[10px] font-bold tracking-[0.35em] text-[#c9a66b] sm:text-xs">
                ALL CAR SERVICES. ONE PLATFORM.
              </span>
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
              АВТОМОБІЛЬНИЙ
              <br />
              СЕРВІС
              <br />
              <span className="text-[#c9a66b]">НОВОГО РІВНЯ.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-zinc-300 sm:text-lg">
              Усі автомобільні послуги в одному місці.
              Власний сервіс, перевірені партнери та зручна
              онлайн-платформа для кожного автомобіліста.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-full bg-[#c9a66b] px-8 py-4 text-xs font-black tracking-wider text-black transition hover:bg-[#e0c28f]"
              >
                ОБРАТИ ПОСЛУГУ ↗
              </a>
              <a
                href="#about"
                className="rounded-full border border-white/30 px-8 py-4 text-xs font-bold tracking-wider transition hover:border-[#c9a66b] hover:text-[#c9a66b]"
              >
                ПРО AUTOEXPERT
              </a>
            </div>

            <div className="mt-16 grid max-w-xl grid-cols-2 gap-8 border-t border-white/20 pt-8 sm:grid-cols-3">
              <div>
                <p className="text-xl font-bold text-[#c9a66b]">360°</p>
                <p className="mt-2 text-[10px] tracking-wider text-zinc-400">
                  АВТОМОБІЛЬНИЙ СЕРВІС
                </p>
              </div>
              <div>
                <p className="text-xl font-bold">ONE</p>
                <p className="mt-2 text-[10px] tracking-wider text-zinc-400">
                  ЄДИНА ПЛАТФОРМА
                </p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-xl font-bold">UA</p>
                <p className="mt-2 text-[10px] tracking-wider text-zinc-400">
                  МАСШТАБ ПО УКРАЇНІ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="bg-[#101318] px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-[10px] font-bold tracking-[0.35em] text-[#c9a66b]">
                НАПРЯМКИ РОБОТИ
              </p>
              <h2 className="text-4xl font-black sm:text-6xl">
                ВСЕ ДЛЯ ВАШОГО
                <br />
                <span className="text-[#c9a66b]">АВТОМОБІЛЯ.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-zinc-400">
              Від першого вибору автомобіля до щоденного
              обслуговування. Знаходьте необхідні послуги
              в одному місці.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article
                key={service.slug}
                className="group flex min-h-[290px] flex-col border border-white/10 bg-[#171b21] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#c9a66b]/60 hover:bg-[#1c2229]"
              >
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-3xl font-light text-[#c9a66b]">
                    {service.number}
                  </span>
                  <span className="text-xl text-zinc-600 transition group-hover:text-[#c9a66b]">
                    ↗
                  </span>
                </div>

                <h3 className="mb-4 text-lg font-bold">{service.title}</h3>
                <p className="text-sm leading-7 text-zinc-400">
                  {service.description}
                </p>

                <Link
                  href={`/services/${service.slug}`}
                  className="mt-auto pt-8 text-[10px] font-bold tracking-widest text-[#c9a66b] transition group-hover:translate-x-2"
                >
                  ДІЗНАТИСЯ БІЛЬШЕ →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-5 text-[10px] font-bold tracking-[0.35em] text-[#c9a66b]">
              ПРО НАШУ ПЛАТФОРМУ
            </p>
            <h2 className="text-4xl font-black leading-tight sm:text-6xl">
              БІЛЬШЕ,
              <br />
              НІЖ ПРОСТО
              <br />
              <span className="text-[#c9a66b]">АВТОСЕРВІС.</span>
            </h2>
            <p className="mt-8 max-w-lg text-base leading-8 text-zinc-400">
              AUTOEXPERT — це автомобільна екосистема,
              яка об'єднує власні послуги, професійних партнерів
              та клієнтів на одній платформі.
              Наша мета — зробити автомобільні послуги
              зрозумілими, доступними та зручними.
            </p>
          </div>

          <div className="space-y-4">
            {advantages.map((item) => (
              <div
                key={item.number}
                className="border border-white/10 bg-[#111419] p-7 sm:p-9"
              >
                <div className="flex gap-6">
                  <span className="text-3xl font-light text-[#c9a66b]">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                    <p className="text-sm leading-7 text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="bg-[#101318] px-5 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-5 text-[10px] font-bold tracking-[0.35em] text-[#c9a66b]">
            РОЗВИВАЄМО АВТОМОБІЛЬНУ ЕКОСИСТЕМУ
          </p>
          <h2 className="text-4xl font-black sm:text-6xl">
            РАЗОМ СИЛЬНІШІ<span className="text-[#c9a66b]">.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-zinc-400">
            Запрошуємо автомобільні сервіси, майстерні,
            постачальників та незалежних спеціалістів
            до співпраці з AUTOEXPERT.
          </p>
          <a
            href="#contact"
            className="mt-9 inline-block rounded-full border border-[#c9a66b] px-9 py-4 text-xs font-bold tracking-wider text-[#c9a66b] transition hover:bg-[#c9a66b] hover:text-black"
          >
            СТАТИ ПАРТНЕРОМ ↗
          </a>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-[10px] font-bold tracking-[0.35em] text-[#c9a66b]">
            ПРОСТО ТА ЗРУЧНО
          </p>
          <h2 className="mb-16 text-4xl font-black sm:text-6xl">
            ЯК ЦЕ ПРАЦЮЄ<span className="text-[#c9a66b]">.</span>
          </h2>

          <div className="grid gap-12 md:grid-cols-3">
            {[
              ["01", "Оберіть послугу", "Знайдіть необхідну автомобільну послугу на платформі."],
              ["02", "Залиште заявку", "Опишіть своє завдання та контактні дані."],
              ["03", "Отримайте результат", "Узгодьте деталі з виконавцем та отримайте послугу."],
            ].map(([number, title, description]) => (
              <div key={number} className="border-t border-[#c9a66b]/50 pt-8">
                <p className="mb-8 text-5xl font-light text-[#c9a66b]">{number}</p>
                <h3 className="mb-4 text-2xl font-bold">{title}</h3>
                <p className="max-w-sm text-sm leading-7 text-zinc-400">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#101318] px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-5xl border border-[#c9a66b]/30 bg-[#15191e] px-6 py-16 text-center sm:px-16">
          <p className="mb-6 text-[10px] font-bold tracking-[0.35em] text-[#c9a66b]">
            AUTOEXPERT · ІВАНО-ФРАНКІВСЬК
          </p>
          <h2 className="text-4xl font-black leading-tight sm:text-6xl">
            ВАШЕ АВТО.
            <br />
            <span className="text-[#c9a66b]">НАШЕ РІШЕННЯ.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-zinc-400">
            Розкажіть, яка автомобільна послуга вам потрібна.
            Ми допоможемо визначити наступний крок.
          </p>
          <a
            href="#services"
            className="mt-9 inline-block rounded-full bg-[#c9a66b] px-9 py-4 text-xs font-black tracking-wider text-black transition hover:bg-[#e0c28f]"
          >
            ПЕРЕГЛЯНУТИ ПОСЛУГИ ↗
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-5 py-9 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <Link href="/" className="text-xl font-black tracking-[0.13em]">
            AUTOEXPERT<span className="text-[#c9a66b]">.</span>
          </Link>
          <p className="text-center text-xs text-zinc-500">
            © 2026 AUTOEXPERT. Усі права захищені.
          </p>
          <a href="#" className="text-xs text-[#c9a66b]">НАГОРУ ↑</a>
        </div>
      </footer>
    </main>
  );
}
