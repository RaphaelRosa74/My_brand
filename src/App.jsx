import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Menu,
  X,
  Star,
  Zap,
  Sparkles,
  Shield,
  Clock,
} from "lucide-react";

const navLinks = [
  { href: "#features", label: "Recursos" },
  { href: "#testemonials", label: "Depoimentos" },
  { href: "#pricing", label: "Preços" },
  { href: "#faq", label: "FAQ" },
];

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-950 text-slate-100 selection:bg-fuchsia-500/30">
      <header className="sticky top-0 z-40 border-b border-white/5 bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <Sparkles className="size-5 text-fuchsia-400" />
            <span className="font-bold tracking-tight">Minha marca</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-fuchsia-300 transition"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setOpen(true)}
          >
            <Menu className="size-5" />
          </button>
        </div>
        {open && (
          <div className="md:hidden">
            <div className="fixed bg-black/60" onClick={() => setOpen(false)}>
              <div className="flex items-center justify-between mb-2">
                <div className="fixed right-0 top-0 h-full w-80 bg-slate-900 border-l border-white/10 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Sparkles className="size-6 text-fuchsia-400" />
                      <span className="font-semibold">Minha marca</span>
                    </div>
                    <button
                      className="p-2 rounded-lg"
                      onClick={() => setOpen(false)}
                    >
                      <X className="size-5" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-4 bg-slate-900 p-4 w-90">
                    {navLinks.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        className="text-slate-200"
                        onClick={() => setOpen(false)}
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-20 relative">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-extrabold"
          >
            Acelere sua presença online com uma landing{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 to-violet-300">
              simples e eficaz
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-4 text-slate-300 max-w-2xl"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            asperiores accusantium maxime, molestiae consequuntur odio numquam
            perferendis, fugit cumque tempore necessitatibus. Consequuntur
            cupiditate laudantium reprehenderit fugit molestias rerum
            repellendus hic!
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 flex flex-row gap-3"
          >
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-fuchsia-600 px-6 py-3 font-medium hover:bg-fuchsia-700 transition"
            >
              Comece Agora <ArrowRight className="size-4" />
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-2xl  px-6 py-3 font-medium border border-white/10 hover:bg-white/5 transition "
            >
              Ver Recursos
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-14 grid grid-cols-3 gap-4"
          >
            {["Velocidade", "Segurança", "Conversão"].map((label, i) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
              >
                <div className="flex items-center gap-3">
                  {i == 0 && <Zap className="size-5 text-emerald-400" />}
                  {i == 1 && <Shield className="size-5 text-sky-400" />}
                  {i == 2 && <Star className="size-5 text-amber-400" />}
                  <div className="font-semibold">{label}</div>
                </div>
                <p className="text-sm text-slate-400 mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <section id="features" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-3xl font-bold">Tudo que você precisa</h2>
        <p className="text-slate-300 mt-2 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
          quibusdam ipsam tenetur vitae temporibus.
        </p>
        <div className="mt-8 grid grid-cols-1 md-grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            {
              title: "Design Responsivo",
              desc: "Funciona em qualquer tela",
              icon: <Sparkles className="size-5 text-fuchsia-400" />,
            },
            {
              title: "Design Responsivo",
              desc: "Funciona em qualquer tela",
              icon: <Star className="size-5 text-amber-400" />,
            },
            {
              title: "Design Responsivo",
              desc: "Funciona em qualquer tela",
              icon: <Zap className="size-5 text-emerald-400" />,
            },
            {
              title: "Design Responsivo",
              desc: "Funciona em qualquer tela",
              icon: <Shield className="size-5 text-sky-400" />,
            },
          ].map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
            >
              <div className="flex items-center gap-3">
                {f.icon}
                <p className="font-semibold">{f.title}</p>
              </div>
              <p className="text-sm text-slate-400 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="testimonials" className="mx-auto max-w-6xl px-4 py-8">
        <h2 className="text-3xl font-bold">Quem usou, aprovou!</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <blockquote
              key={i}
              className="rounded-2xl border border-white/10 p-6"
            >
              <div className="flex items-center gap-2 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-slate-300">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                eum enim, quos ad asperiores, similique blanditiis.
              </p>
              <footer className="mt-3 text-sm text-slate-400">
                - Nome do Cliente
              </footer>
            </blockquote>
          ))}
        </div>
      </section>
      <section id="price" className="mx-auto max-w-6xl px-4 py-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Plano único. Sem complicação!
            </h2>
            <p className="text-slate-300 mt-2 max-w2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              quibusdam ipsam tenetur vitae temporibus.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="size-4 text-emerald-400" />
                Beneficio 1
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-emerald-400" />
                Beneficio 2
              </li>
              <li className="flex items-center gap-2">
                <Check className="size-4 text-emerald-400" />
                Beneficio 3
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8">
            <div className="text-sm text-slate-400">A partir de:</div>
            <div className="text-5xl font-extrabold mt-2">199,90</div>
            <div className="text-sm text-slate-300 mt-4 flex items-center gap-4">
              <Clock className="size-4 text-amber-400" />
              Somente hoje!
            </div>
            <button
              href="#"
              className="mt-6 cursor-pointer rounded-2xl bg-fuchsia-600 hover:bg-fuchsia-800 px-6 py-3 font-medium"
            >
              Comprar Agora!
            </button>
          </div>
        </div>
      </section>
      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col items-center">
          <div className="mb-4">Minha Marca @ {new Date().getFullYear()}</div>
          <a href="#" className="text-slate-300">
            Política de Privacidade
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;