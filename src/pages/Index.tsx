import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const COVER = "https://cdn.poehali.dev/projects/be63e77a-f0c0-40ac-af60-ddc16dcffeab/bucket/53730f58-a259-49be-aafe-61a13a344884.jpg";

const DESCRIPTION = `Мика — травница, ценящая тишину и покой. Акаи — кицунэ, проклятый древним долгом. Их свела судьба, их связал контракт, их ждёт смерть через год.

Но когда за спиной встаёт брат, прошедший войну, а в руках расцветает Лунный Ковыль — символ забытой любви, — даже самое страшное проклятие можно попытаться разрушить.

Вместе они отправятся к сердцу Горы, чтобы найти правду, исцелить древнюю рану и, может быть, обрести то, что сильнее смерти.`;

const TAGLINE = "Она не искала приключений. Они нашли её сами.";

const REVIEWS = [
  { name: "Анна М.", stars: 5, text: "Не могла оторваться! История захватила с первых страниц. Магия, любовь и тайны переплетаются мастерски." },
  { name: "Ольга В.", stars: 5, text: "Редко встречаю книги, которые так тонко передают атмосферу старинных легенд. Прочла за два вечера." },
  { name: "Марина Т.", stars: 5, text: "Невероятно красивый язык. Образы живые, герои настоящие. Обязательно куплю второй экземпляр в подарок." },
];

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${(i * 5.5 + 3) % 100}%`,
  delay: `${(i * 0.45) % 8}s`,
  duration: `${8 + (i * 1.3) % 12}s`,
  size: `${2 + (i * 0.17) % 3}px`,
  opacity: 0.3 + (i * 0.04) % 0.5,
}));

function Stars({ n = 5 }: { n?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} className="text-fox text-sm">★</span>
      ))}
    </div>
  );
}

function BuyModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
      <div
        className="relative bg-card border border-border max-w-md w-full p-8 fox-glow anim-fade-in"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
          <Icon name="X" size={20} />
        </button>

        <div className="flex gap-5 mb-6">
          <img src={COVER} alt="Лисья Невеста" className="w-16 rounded-sm object-cover flex-shrink-0" style={{ aspectRatio: "2/3" }} />
          <div>
            <p className="text-fox text-[10px] tracking-[0.3em] uppercase mb-1">Оформление заказа</p>
            <h3 className="font-display text-2xl font-light leading-tight">Лисья Невеста</h3>
            <p className="text-muted-foreground text-sm mt-0.5 font-sans">Софи Клэр · 2026</p>
          </div>
        </div>

        <div className="flex items-center justify-between bg-secondary/60 px-4 py-3 mb-6 border border-border/50">
          <span className="font-sans text-sm text-muted-foreground">Стоимость</span>
          <span className="font-display text-3xl font-light text-fox">850 ₽</span>
        </div>

        <div className="space-y-3 mb-6">
          <input
            type="text"
            placeholder="Ваше имя"
            className="w-full bg-secondary border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-fox transition-colors"
          />
          <input
            type="text"
            placeholder="Телефон или e-mail"
            className="w-full bg-secondary border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-fox transition-colors"
          />
          <input
            type="text"
            placeholder="Адрес доставки"
            className="w-full bg-secondary border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-fox transition-colors"
          />
        </div>

        <button className="btn-buy w-full bg-fox text-primary-foreground py-4 font-sans text-sm tracking-widest uppercase font-bold hover:bg-foxdark transition-colors">
          Заказать за 850 ₽
        </button>

        <p className="font-sans text-xs text-muted-foreground text-center mt-4">
          Мы свяжемся с вами для подтверждения заказа и доставки
        </p>
      </div>
    </div>
  );
}

export default function Index() {
  const [modal, setModal] = useState(false);
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveReview(r => (r + 1) % REVIEWS.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">

      {/* Particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {PARTICLES.map(p => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              top: "-10px",
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 pt-16 pb-16 gap-14 lg:gap-24 max-w-6xl mx-auto">

        {/* Text */}
        <div className="flex-1 flex flex-col items-start order-2 lg:order-1 z-10">

          <p className="op0 anim-fade-up delay-1 font-sans text-[10px] tracking-[0.5em] uppercase text-fox mb-5">
            Новинка · 2026
          </p>

          <h1 className="op0 anim-fade-up delay-2 font-display font-light leading-[0.9] mb-2">
            <span className="block text-6xl md:text-8xl text-foreground">Лисья</span>
            <span className="block text-6xl md:text-8xl anim-shimmer">Невеста</span>
          </h1>

          <p className="op0 anim-fade-up delay-3 font-display italic text-lg text-muted-foreground mb-6 mt-3">
            — Софи Клэр
          </p>

          <p className="op0 anim-fade-up delay-3 font-display italic text-xl text-foreground/80 mb-8 border-l-2 border-fox pl-4 leading-relaxed">
            {TAGLINE}
          </p>

          <div className="op0 anim-fade-up delay-4 font-sans text-sm text-muted-foreground leading-[1.85] max-w-md mb-10 space-y-3">
            {DESCRIPTION.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <p className="op0 anim-fade-up delay-4 font-sans text-xs text-muted-foreground/70 italic mb-8 max-w-md">
            История о любви, братской верности и выборе, который остаётся за тобой.
          </p>

          {/* Price + CTA */}
          <div className="op0 anim-fade-up delay-5 flex flex-wrap items-center gap-6 mb-8">
            <div>
              <p className="font-sans text-[10px] text-muted-foreground tracking-widest uppercase mb-1">Цена</p>
              <p className="font-display text-5xl font-light text-fox">850 <span className="text-2xl">₽</span></p>
            </div>
            <button
              onClick={() => setModal(true)}
              className="btn-buy flex items-center gap-3 bg-fox text-primary-foreground px-10 py-4 font-sans text-sm tracking-widest uppercase font-bold hover:bg-foxdark transition-colors"
            >
              <Icon name="ShoppingBag" size={16} />
              Купить книгу
            </button>
          </div>

          {/* Badges */}
          <div className="op0 anim-fade-up delay-5 flex flex-wrap gap-3">
            {[
              { icon: "Truck", text: "Доставка по России" },
              { icon: "Shield", text: "Гарантия качества" },
              { icon: "Heart", text: "500+ читателей" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-2 border border-border px-3 py-1.5">
                <Icon name={icon as "Truck"} size={12} className="text-fox" />
                <span className="font-sans text-xs text-muted-foreground">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cover */}
        <div className="flex-shrink-0 order-1 lg:order-2 z-10 relative">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="anim-pulse-ring rounded-full"
              style={{
                width: 240, height: 360,
                background: "radial-gradient(ellipse, hsl(25 85% 55% / 0.15) 0%, transparent 70%)",
              }}
            />
          </div>

          <div className="anim-float fox-glow relative" style={{ width: 280 }}>
            <img
              src={COVER}
              alt="Лисья Невеста — Софи Клэр"
              className="w-full rounded-sm object-cover"
              style={{ aspectRatio: "2/3" }}
            />
            <div
              className="absolute inset-y-0 left-0 w-5 rounded-l-sm opacity-15"
              style={{ background: "linear-gradient(to right, rgba(255,255,255,0.4), transparent)" }}
            />
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-fox text-primary-foreground px-5 py-1 font-sans text-[10px] font-bold tracking-[0.3em] uppercase whitespace-nowrap">
              в наличии
            </div>
          </div>
        </div>
      </section>

      {/* ── DETAILS STRIP ── */}
      <section className="border-y border-border bg-card/40">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { label: "Жанр", value: "Романтическое фэнтези" },
            { label: "Объём", value: "190 страниц" },
            { label: "Формат", value: "Мягкая обложка" },
            { label: "Год", value: "2026" },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center py-6 px-4 gap-1">
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{label}</span>
              <span className="font-display text-xl font-medium text-foreground">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="border-b border-border bg-card/20 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-fox mb-10">Отзывы читателей</p>

          <div className="relative" style={{ minHeight: 160 }}>
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                  i === activeReview ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <Stars n={r.stars} />
                <p className="font-display text-xl md:text-2xl font-light italic text-foreground mt-4 mb-4 leading-relaxed px-4">
                  "{r.text}"
                </p>
                <p className="font-sans text-xs text-fox tracking-widest uppercase">{r.name}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-10">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveReview(i)}
                className={`h-px transition-all duration-300 ${i === activeReview ? "bg-fox w-8" : "bg-border w-4"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `url(${COVER})`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
            filter: "blur(30px)",
          }}
        />
        <div className="relative z-10">
          <h2 className="font-display text-5xl md:text-6xl font-light mb-3">
            Готовы начать<br />
            <em className="not-italic anim-shimmer">путешествие?</em>
          </h2>
          <p className="font-sans text-sm text-muted-foreground mb-10 max-w-sm mx-auto">
            Доставляем по всей России. Оплата картой или наличными при получении.
          </p>
          <button
            onClick={() => setModal(true)}
            className="btn-buy inline-flex items-center gap-3 bg-fox text-primary-foreground px-14 py-5 font-sans text-sm tracking-widest uppercase font-bold hover:bg-foxdark transition-colors"
          >
            <Icon name="BookOpen" size={16} />
            Купить за 850 ₽
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border py-8 px-6 text-center">
        <p className="font-display text-lg font-light tracking-[0.2em] text-muted-foreground mb-1">
          ЛИСЬЯ НЕВЕСТА
        </p>
        <p className="font-sans text-xs text-muted-foreground">© 2026 Софи Клэр. Все права защищены.</p>
      </footer>

      {modal && <BuyModal onClose={() => setModal(false)} />}
    </div>
  );
}