import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/b71d0ec2-bcfb-4b2e-ab15-a89a0d46888e/files/3ad76dea-756c-4ece-9fc2-497280f0bf0a.jpg';
const WEDDING_IMG = 'https://cdn.poehali.dev/projects/b71d0ec2-bcfb-4b2e-ab15-a89a0d46888e/files/6ec997b5-c911-4325-b614-962c21ad1d1e.jpg';
const LANDSCAPE_IMG = 'https://cdn.poehali.dev/projects/b71d0ec2-bcfb-4b2e-ab15-a89a0d46888e/files/2b2235b6-7188-4022-b206-f757e574f39a.jpg';

type Category = 'Все' | 'Репортаж' | 'Портрет' | 'Прогулки';

interface Work {
  id: number;
  src: string;
  title: string;
  category: Exclude<Category, 'Все'>;
}

const works: Work[] = [
  { id: 1, src: HERO_IMG, title: 'Международный форум', category: 'Репортаж' },
  { id: 2, src: WEDDING_IMG, title: 'Важное событие', category: 'Репортаж' },
  { id: 3, src: LANDSCAPE_IMG, title: 'Городская прогулка', category: 'Прогулки' },
  { id: 4, src: HERO_IMG, title: 'Художественный портрет', category: 'Портрет' },
  { id: 5, src: LANDSCAPE_IMG, title: 'Осенняя прогулка', category: 'Прогулки' },
  { id: 6, src: WEDDING_IMG, title: 'Авторский портрет', category: 'Портрет' },
];

const categories: Category[] = ['Все', 'Репортаж', 'Портрет', 'Прогулки'];

const services = [
  { icon: 'Users', title: 'Репортаж с форумов и событий', desc: 'Профессиональная репортажная съёмка международных и российских форумов, конференций и значимых событий из жизни человека.', price: 'по запросу' },
  { icon: 'MapPin', title: 'Фотопрогулки', desc: 'Живые, непостановочные кадры в городской среде или на природе — история, рассказанная через движение и атмосферу.', price: 'по запросу' },
  { icon: 'Star', title: 'Художественный портрет', desc: 'Авторская обработка и профессиональная ретушь. Каждый портрет — это уникальный образ, созданный совместно с вами.', price: 'по запросу' },
];

const Index = () => {
  const [filter, setFilter] = useState<Category>('Все');
  const [lightbox, setLightbox] = useState<Work | null>(null);

  const filtered = filter === 'Все' ? works : works.filter((w) => w.category === filter);

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : '';
  }, [lightbox]);

  return (
    <div className="min-h-screen bg-background text-foreground grain">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-background/70 border-b border-border/40">
        <div className="container flex items-center justify-between h-20">
          <a href="#home" className="font-display text-2xl tracking-luxe text-gold">VALERY</a>
          <nav className="hidden md:flex items-center gap-10 text-sm tracking-widest uppercase text-muted-foreground">
            <a href="#portfolio" className="hover:text-gold transition-colors">Портфолио</a>
            <a href="#services" className="hover:text-gold transition-colors">Услуги</a>
            <a href="#about" className="hover:text-gold transition-colors">Обо мне</a>
            <a href="#contacts" className="hover:text-gold transition-colors">Контакты</a>
          </nav>
          <a href="#contacts" className="text-xs tracking-widest uppercase border border-gold/50 text-gold px-5 py-2.5 hover:bg-gold hover:text-primary-foreground transition-all">
            Записаться
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="Hero" className="w-full h-full object-cover slow-zoom" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="animate-fade-up text-gold tracking-luxe uppercase text-xs mb-6" style={{ animationDelay: '0.1s' }}>
            Репортажная и художественная фотография
          </p>
          <h1 className="animate-fade-up font-display text-6xl md:text-8xl lg:text-9xl leading-none font-light mb-8" style={{ animationDelay: '0.3s' }}>
            Момент, который<br /><span className="italic text-gold">живёт</span>
          </h1>
          <p className="animate-fade-up max-w-md mx-auto text-muted-foreground mb-10" style={{ animationDelay: '0.5s' }}>
            Репортаж с форумов и событий, фотопрогулки, художественные портреты с авторской обработкой и профессиональной ретушью.
          </p>
          <a href="#portfolio" className="animate-fade-up inline-flex items-center gap-3 text-sm tracking-widest uppercase border-b border-gold pb-1 text-gold hover:gap-5 transition-all" style={{ animationDelay: '0.7s' }}>
            Смотреть работы <Icon name="ArrowDown" size={16} />
          </a>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-28 container">
        <div className="text-center mb-14">
          <p className="text-gold tracking-luxe uppercase text-xs mb-4">Избранное</p>
          <h2 className="font-display text-5xl md:text-6xl font-light">Портфолио</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 text-xs tracking-widest uppercase border transition-all ${
                filter === cat
                  ? 'bg-gold text-primary-foreground border-gold'
                  : 'border-border text-muted-foreground hover:border-gold hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((work) => (
            <button
              key={`${filter}-${work.id}`}
              onClick={() => setLightbox(work)}
              className="group relative aspect-[4/5] overflow-hidden animate-scale-in"
            >
              <img src={work.src} alt={work.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center">
                <p className="text-gold tracking-luxe uppercase text-[10px] mb-2">{work.category}</p>
                <p className="font-display text-3xl font-light">{work.title}</p>
                <Icon name="Plus" size={28} className="mt-4 text-gold" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-28 bg-card border-y border-border/40">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-gold tracking-luxe uppercase text-xs mb-4">Что я делаю</p>
            <h2 className="font-display text-5xl md:text-6xl font-light">Услуги</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-border/40">
            {services.map((s) => (
              <div key={s.title} className="bg-card p-10 text-center hover:bg-background transition-colors group">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-gold/40 mb-6 group-hover:bg-gold group-hover:border-gold transition-all">
                  <Icon name={s.icon} size={24} className="text-gold group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display text-3xl font-light mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.desc}</p>
                <p className="text-gold tracking-widest text-sm">{s.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-28 container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src="https://cdn.poehali.dev/projects/b71d0ec2-bcfb-4b2e-ab15-a89a0d46888e/bucket/a6dafec7-90cb-4a1f-8ff1-41ead9060f52.png" alt="Валерий" className="w-full h-full object-cover" />
            <div className="absolute -bottom-px -right-px w-32 h-32 border-r-2 border-b-2 border-gold" />
          </div>
          <div>
            <p className="text-gold tracking-luxe uppercase text-xs mb-4">Знакомство</p>
            <h2 className="font-display text-5xl md:text-6xl font-light mb-8">Обо мне</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Меня зовут Валерий. Я являюсь профессиональным репортажным фотографом.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Специализируюсь на репортажной съёмке значимых международных и российских форумов, важных событий из жизни человека и фотопрогулках.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Также создаю художественные портреты с авторской обработкой и профессиональной ретушью.
            </p>

            <blockquote className="border-l-2 border-gold pl-6 mt-2">
              <p className="font-display text-2xl font-light italic leading-snug text-foreground">
                «Фотография — это не то, что вы снимаете.<br />Это то, что вы чувствуете в момент нажатия затвора.»
              </p>
            </blockquote>

          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-28 bg-card border-t border-border/40">
        <div className="container max-w-2xl text-center">
          <p className="text-gold tracking-luxe uppercase text-xs mb-4">Свяжитесь со мной</p>
          <h2 className="font-display text-5xl md:text-6xl font-light mb-6">Создадим историю</h2>
          <p className="text-muted-foreground mb-12">
            Расскажите о своей задумке — и мы найдём идеальный свет для вашего момента.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <input placeholder="Ваше имя" className="bg-background border border-border px-5 py-4 text-sm focus:border-gold focus:outline-none transition-colors" />
            <input placeholder="Телефон или email" className="bg-background border border-border px-5 py-4 text-sm focus:border-gold focus:outline-none transition-colors" />
          </div>
          <textarea placeholder="О съёмке" rows={4} className="w-full bg-background border border-border px-5 py-4 text-sm focus:border-gold focus:outline-none transition-colors mb-8" />
          <button className="bg-gold text-primary-foreground px-12 py-4 text-xs tracking-widest uppercase hover:opacity-90 transition-opacity">
            Отправить заявку
          </button>
          <div className="flex justify-center gap-8 mt-14 text-muted-foreground">
            <a href="#" className="hover:text-gold transition-colors"><Icon name="Instagram" size={20} /></a>
            <a href="#" className="hover:text-gold transition-colors"><Icon name="Send" size={20} /></a>
            <a href="#" className="hover:text-gold transition-colors"><Icon name="Mail" size={20} /></a>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-xs tracking-widest uppercase text-muted-foreground border-t border-border/40">
        © 2026 Валерий — Репортажная и художественная фотография
      </footer>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-6 animate-scale-in"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-muted-foreground hover:text-gold transition-colors" onClick={() => setLightbox(null)}>
            <Icon name="X" size={32} />
          </button>
          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.title} className="max-h-[75vh] object-contain" />
            <div className="text-center mt-6">
              <p className="text-gold tracking-luxe uppercase text-[10px] mb-1">{lightbox.category}</p>
              <p className="font-display text-3xl font-light">{lightbox.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;