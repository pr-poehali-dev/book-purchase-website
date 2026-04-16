import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const COVER = "https://cdn.poehali.dev/projects/be63e77a-f0c0-40ac-af60-ddc16dcffeab/files/ebdf5fb6-0dcf-45fc-8816-0947ce0a12a2.jpg";

const REVIEWS = [
  { name: "Анна М.", stars: 5, text: "Не могла оторваться! История захватила с первых страниц. Магия, любовь и тайны переплетаются мастерски." },
  { name: "Ольга В.", stars: 5, text: "Редко встречаю книги, которые так тонко передают атмосферу старинных легенд. Прочла за два вечера." },
  { name: "Марина Т.", stars: 5, text: "Невероятно красивый язык. Образы живые, герои настоящие. Обязательно куплю второй экземпляр в подарок." },
];

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 8}s`,
  duration: `${8 + Math.random() * 12}s`,
  size: `${2 + Math.random() * 3}px`,
  opacity: 0.3 + Math.random() * 0.5,
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
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative bg-card border border-border max-w-md w-full p-8 fox-glow anim-fade-in"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
          <Icon name="X" size={20} />
        </button>

        <div className="text-center mb-6">
          <p className="text-fox text-xs tracking-[0.3em] uppercase mb-2">Оформление заказа</p>
          <h3 className="font-display text-3xl font-light">Лисья невеста</h3>
          <p className="text-muted-foreground text-sm mt-1 font-sans">Софи Клэр</p>
        </div>

        <div className="flex items-center justify-between bg-secondary/50 p-4 mb-6">
          <span className="font-sans text-sm text-muted-foreground">Цена</span>
          <span className="font-display text-3xl font-light text-fox">850 ₽</span>
        </div>

        <div className="space-y-3 mb-6">
          <input
            type="text"
            placeholder="Ваше имя"
            className="w-full bg-secondary border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-fox transition-colors"
          />
          <input
            type="tel"
            placeholder="Телефон или e-mail"
            className="w-full bg-secondary border border-border px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-fox transition-colors"
          />
        </div>

        <button className="btn-buy w-full bg-fox text-primary-foreground py-4 font-sans text-sm tracking-widest uppercase font-bold hover:bg-foxdark transition-colors">
          Купить за 850 ₽
        </button>

        <p className="font-sans text-xs text-muted-foreground text-center mt-4">
          Мы свяжемся с вами для подтверждения и доставки
        </p>
      </div>
    </div>
  );
}

export default function Index() {
  const [modal, setModal] = useState(false);
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActiveReview(r => (r + 1) % REVIEWS.length), 4000);
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
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 pt-16 pb-10 gap-12 lg:gap-20 max-w-6xl mx-auto">

        {/* Left — text */}
        <div className="flex-1 flex flex-col items-start order-2 lg:order-1 z-10">
          <p className="op0 anim-fade-up delay-1 font-sans text-[10px] tracking-[0.45em] uppercase text-fox mb-6">
            Новинка · 2024
          </p>

          <h1 className="op0 anim-fade-up delay-2 font-display font-light leading-[0.92] mb-3">
            <span className="block text-6xl md:text-8xl text-foreground">Лисья</span>
            <span className="block text-6xl md:text-8xl anim-shimmer">невеста</span>
          </h1>

          <p className="op0 anim-fade-up delay-3 font-display italic text-xl text-muted-foreground mb-8 mt-2">
            — Софи Клэр
          </p>

          <p className="op0 anim-fade-up delay-4 font-sans text-sm text-muted-foreground leading-relaxed max-w-md mb-10">
            Магический роман о любви, древних проклятиях и мире, где лисы принимают человеческий облик.
            Судьба двух миров в руках девушки, которая не знала, кем является на самом деле.
          </p>

          {/* Price + CTA */}
          <div className="op0 anim-fade-up delay-5 flex flex-wrap items-center gap-5 mb-10">
            <div>
              <p className="font-sans text-xs text-muted-foreground tracking-wider uppercase mb-1">Цена</p>
              <p className="font-display text-5xl font-light text-fox">850 <span className="text-3xl">₽</span></p>
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

        {/* Right — book cover */}
        <div className="flex-shrink-0 order-1 lg:order-2 z-10 relative">
          {/* glow ring behind book */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="anim-pulse-ring rounded-full"
              style={{
                width: 220, height: 320,
                background: "radial-gradient(ellipse, hsl(25 85% 55% / 0.18) 0%, transparent 70%)",
              }}
            />
          </div>

          <div className="anim-float fox-glow relative" style={{ width: 260 }}>
            <img
              src={COVER}
              alt="Лисья невеста — обложка"
              className="w-full rounded-sm object-cover"
              style={{ aspectRatio: "2/3" }}
            />
            {/* spine shimmer */}
            <div
              className="absolute inset-y-0 left-0 w-4 rounded-l-sm opacity-20"
              style={{ background: "linear-gradient(to right, rgba(255,255,255,0.3), transparent)" }}
            />
            {/* label */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-fox text-primary-foreground px-4 py-1 font-sans text-xs font-bold tracking-widest uppercase whitespace-nowrap">
              в наличии
            </div>
          </div>
        </div>
      </section>

      {/* ── DETAILS STRIP ── */}
      <section className="border-y border-border bg-card/40">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { label: "Жанр", value: "Магический роман" },
            { label: "Объём", value: "368 страниц" },
            { label: "Формат", value: "Твёрдая обложка" },
            { label: "Год", value: "2024" },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center py-6 px-4 gap-1">
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground">{label}</span>
              <span className="font-display text-lg font-medium text-foreground">{value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <p className="ornament font-sans text-[10px] tracking-[0.4em] uppercase text-fox mb-8">О книге</p>
        <blockquote className="font-display text-2xl md:text-4xl font-light italic leading-relaxed text-foreground mb-8">
          «Там, где кончается лес и начинается сон,<br />
          живёт та, что не знает своего имени»
        </blockquote>
        <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          Юная Нина приезжает в деревню к бабушке и обнаруживает, что здесь всё не так, как кажется.
          Местные говорят о лисах, которые умеют принимать человеческий облик. Говорят, одна из них
          уже живёт среди людей. А в зеркале Нина видит янтарные глаза — не свои.
          История о поиске себя, древних семейных тайнах и любви, которая не знает границ между мирами.
        </p>
      </section>

      {/* ── REVIEWS ── */}
      <section className="border-t border-border bg-card/30 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-fox mb-10">Отзывы читателей</p>

          <div className="relative min-h-[140px]">
            {REVIEWS.map((r, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-700 ${
                  i === activeReview ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
                }`}
              >
                <Stars n={r.stars} />
                <p className="font-display text-xl md:text-2xl font-light italic text-foreground mt-4 mb-4 leading-relaxed">
                  "{r.text}"
                </p>
                <p className="font-sans text-xs text-fox tracking-widest uppercase">{r.name}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveReview(i)}
                className={`w-6 h-px transition-all duration-300 ${i === activeReview ? "bg-fox" : "bg-border"}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── BUY CTA ── */}
      <section className="py-24 px-6 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${COVER})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(40px)",
          }}
        />
        <div className="relative z-10">
          <h2 className="font-display text-5xl md:text-7xl font-light mb-4">
            Готовы начать<br />
            <em className="not-italic anim-shimmer">путешествие?</em>
          </h2>
          <p className="font-sans text-sm text-muted-foreground mb-10">
            Доставим по всей России. Принимаем оплату картой и наличными при получении.
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
        <p className="font-display text-xl font-light tracking-widest text-muted-foreground mb-1">
          ЛИСЬЯ НЕВЕСТА
        </p>
        <p className="font-sans text-xs text-muted-foreground">© 2024 Софи Клэр. Все права защищены.</p>
      </footer>

      {/* Modal */}
      {modal && <BuyModal onClose={() => setModal(false)} />}
    </div>
  );
}
