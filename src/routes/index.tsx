import { createFileRoute } from "@tanstack/react-router";
import {
  Award, BookOpen, Check, ChevronDown, Clock3, Gauge, GraduationCap,
  Infinity as InfinityIcon, Laptop, PlayCircle, ShieldCheck, Smartphone, Star, Wrench
} from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({ component: Index });

const platformSlides = [
  { src: "/videoaula1.png", label: "Plataforma por dentro" },
  { src: "/videoaula2.png", label: "Clases organizadas por módulos" },
  { src: "/videoaula3.png", label: "Sistema de frenos" },
  { src: "/videoaula4.png", label: "Diagnóstico eléctrico" },
  { src: "/videoaula5.png", label: "Materiales y recursos" },
  { src: "/videoaula6.png", label: "Certificado al concluir" },
];

const supportSlides = [
  { src: "/apostila1.png", label: "Manual de Mecánica Automotriz" },
  { src: "/apostila2.png", label: "Sistema de Frenos" },
  { src: "/apostila3.png", label: "Sistema de Enfriamiento" },
  { src: "/apostila4.png", label: "Mantenimiento Preventivo" },
  { src: "/apostila5.png", label: "Diagnóstico de Fallas" },
  { src: "/apostila6.png", label: "Guías y Checklists" },
];

const bonuses = [
  "Manual Completo de Mecánica Automotriz",
  "Tabla de Torques y Especificaciones",
  "Checklist de Mantenimiento Preventivo",
  "Guía de Diagnóstico de Fallas",
  "Manual de Herramientas del Mecánico",
  "Guía de Precios de Servicios",
  "Manual de Códigos de Error OBD2",
  "Guía de Inyección Electrónica",
  "Manual de Frenos y Suspensión",
  "Guía para Conseguir tus Primeros Clientes",
  "5 manuales complementarios",
];

const faqs = [
  ["¿Necesito tener experiencia para comenzar?", "No. La formación fue organizada para que puedas comenzar desde cero y avanzar paso a paso."],
  ["¿Cómo recibo el acceso?", "El acceso se libera después de la confirmación de la compra y llega al correo electrónico registrado."],
  ["¿Puedo ver las clases desde mi celular?", "Sí. Puedes estudiar desde celular, tablet o computadora."],
  ["¿Por cuánto tiempo tengo acceso?", "El acceso a las clases es de por vida."],
  ["¿El curso incluye certificado?", "Sí. El certificado de finalización está incluido en el Plan Profesional."],
  ["¿Cuál es la diferencia entre el Básico y el Profesional?", "El Plan Profesional incluye, además de las clases, certificado, materiales de apoyo y todos los bonos."],
  ["¿Cómo funciona la garantía de 7 días?", "Puedes evaluar el contenido dentro del período de garantía y solicitar el reembolso según las condiciones de la compra."],
];

function Countdown() {
  const [seconds, setSeconds] = useState(15 * 60);
  useEffect(() => {
    const timer = window.setInterval(() => setSeconds((s) => (s <= 0 ? 15 * 60 : s - 1)), 1000);
    return () => window.clearInterval(timer);
  }, []);
  const min = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");
  return <span className="font-black tabular-nums">{min}:{sec}</span>;
}

function CtaButton({ children = "QUIERO EMPEZAR AHORA" }: { children?: string }) {
  return (
    <a href="#planes" className="inline-flex min-h-14 w-full max-w-md items-center justify-center rounded-xl bg-emerald-500 px-6 py-4 text-center text-sm font-black tracking-wide text-white shadow-[0_10px_30px_rgba(16,185,129,.32)] transition hover:-translate-y-0.5 hover:bg-emerald-400 sm:text-base">
      {children}
    </a>
  );
}

function InfiniteCarousel({ slides, support = false }: { slides: { src: string; label: string }[]; support?: boolean }) {
  const items = [...slides, ...slides];
  return (
    <div className="carousel-mask overflow-hidden">
      <div className={"carousel-track " + (support ? "carousel-track-slow" : "")}>
        {items.map((item, index) => (
          <div key={item.src + "-" + index} className={"relative shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-xl " + (support ? "w-[220px] sm:w-[270px]" : "w-[270px] sm:w-[360px]")}>
            <div className={"flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 " + (support ? "aspect-[4/5]" : "aspect-[16/10]")}>
              <span className="max-w-[80%] text-center text-xs font-semibold text-slate-500">{item.label}</span>
              <img src={item.src} alt={item.label} className="absolute inset-0 h-full w-full object-cover" onError={(e) => { e.currentTarget.style.display = "none"; }} />
            </div>
            <div className="border-t border-white/10 bg-slate-950/90 px-4 py-3 text-sm font-bold text-white">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Feature({ icon: Icon, title, text }: { icon: typeof PlayCircle; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950 p-6">
      <Icon className="h-8 w-8 text-emerald-400" />
      <h3 className="mt-5 text-lg font-black">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">{text}</p>
    </div>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-slate-950 text-white selection:bg-emerald-400 selection:text-slate-950">
      <style>{`
        html { scroll-behavior: smooth; }
        .carousel-mask { -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent); mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent); }
        .carousel-track { display:flex; width:max-content; gap:1rem; animation:mec-scroll 32s linear infinite; }
        .carousel-track-slow { animation-duration:48s; }
        .carousel-track:hover { animation-play-state:paused; }
        @keyframes mec-scroll { from { transform:translateX(0); } to { transform:translateX(calc(-50% - .5rem)); } }
      `}</style>

      <div className="border-b border-amber-300/20 bg-amber-400 px-4 py-2 text-center text-xs font-black tracking-[0.16em] text-slate-950 sm:text-sm">
        SOLO HOY • CONDICIÓN ESPECIAL <span className="mx-2">•</span> <Countdown />
      </div>

      <section className="relative overflow-hidden px-4 pb-16 pt-14 sm:pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(16,185,129,.22),transparent_36%)]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-emerald-300">
            <GraduationCap className="h-4 w-4" /> Formación profesional 100% online
          </div>
          <h1 className="mx-auto max-w-4xl text-4xl font-black leading-[1.06] tracking-tight sm:text-6xl">
            Conviértete en Mecánico Automotriz: <span className="text-emerald-400">desde cero hasta avanzado</span>
          </h1>
          <div className="mx-auto mt-7 max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 p-2 shadow-[0_30px_90px_rgba(0,0,0,.45)]">
            <img src="/mk.png" alt="Mockup de la Formación en Mecánica Automotriz" className="w-full rounded-2xl object-cover" />
          </div>
          <p className="mx-auto mt-7 max-w-3xl text-lg font-semibold text-slate-200 sm:text-xl">
            Kit completo de Formación en Mecánica Automotriz: manuales, módulos y bonos.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-slate-400 sm:text-lg">
            Curso 100% online con más de 80 clases prácticas en video para aprender motor, frenos, suspensión, inyección electrónica y diagnóstico de fallas.
          </p>
          <div className="mt-8 flex flex-col items-center"><CtaButton /><p className="mt-3 text-xs font-semibold text-slate-500">Acceso inmediato • Compra segura • Garantía de 7 días</p></div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/50 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center"><p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-400">Lo que recibes</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">Todo lo que necesitas para comenzar a entender la mecánica automotriz</h2></div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Feature icon={PlayCircle} title="80+ clases prácticas en video" text="Aprende los principales contenidos de mecánica automotriz." />
            <Feature icon={Gauge} title="Desde cero hasta avanzado" text="Comienza incluso si nunca has trabajado en el área." />
            <Feature icon={BookOpen} title="Materiales de apoyo" text="Manuales, guías y checklists para acompañar tus estudios." />
            <Feature icon={InfinityIcon} title="Acceso de por vida" text="Estudia desde tu celular o computadora y repasa cuando quieras." />
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-400">Plataforma</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Estudia a tu ritmo, desde donde estés</h2>
            <p className="mt-4 leading-7 text-slate-400">Mira la formación por dentro: clases en video organizadas por módulos, progreso guardado y materiales para descargar — todo desde celular, tablet o computadora.</p>
          </div>
          <div className="mt-10"><InfiniteCarousel slides={platformSlides} /></div>
          <div className="mt-10 flex flex-col items-center"><CtaButton /><p className="mt-3 text-xs font-semibold text-slate-500">Acceso inmediato • Compra segura • Garantía de 7 días</p></div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[[Laptop,"Acceso 100% online"],[Clock3,"Acceso inmediato"],[InfinityIcon,"Acceso de por vida"],[Smartphone,"Celular, tablet o computadora"]].map(([Icon,text], i) => {
              const I = Icon as typeof Laptop;
              return <div key={i} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[.035] p-4"><I className="h-5 w-5 shrink-0 text-emerald-400"/><span className="text-sm font-bold">{String(text)}</span></div>;
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-400">Material de apoyo</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Guías, manuales y checklists ilustrados</h2>
            <p className="mt-4 leading-7 text-slate-400">Materiales creados para que puedas consultar los principales procedimientos siempre que lo necesites.</p>
          </div>
          <div className="mt-10"><InfiniteCarousel slides={supportSlides} support /></div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl rounded-3xl border border-amber-300/20 bg-gradient-to-br from-amber-300/[.08] to-transparent p-6 sm:p-10">
          <div className="inline-flex rounded-full bg-amber-300 px-3 py-1 text-[11px] font-black uppercase tracking-[0.15em] text-slate-950">Exclusivo del Plan Profesional</div>
          <h2 className="mt-5 max-w-3xl text-3xl font-black sm:text-4xl">Además, recibes bonos exclusivos para complementar tu formación</h2>
          <p className="mt-4 max-w-3xl leading-7 text-slate-400">Además de la formación principal, recibes materiales de apoyo para diagnosticar mejor, organizar tus servicios, aplicar lo aprendido y acelerar tus resultados en mecánica automotriz.</p>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {bonuses.map((bonus) => <div key={bonus} className="flex items-start gap-3 rounded-xl border border-white/10 bg-slate-950/70 p-4"><Check className="mt-0.5 h-5 w-5 shrink-0 text-amber-300"/><span className="text-sm font-bold">{bonus}</span></div>)}
          </div>
        </div>
      </section>

      <section id="planes" className="border-y border-white/10 bg-slate-900/50 px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center"><p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-400">Planes</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">Elige cómo quieres comenzar</h2><p className="mt-3 text-slate-400">Dos opciones para empezar hoy mismo.</p></div>
          <div className="mt-10 grid items-start gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-slate-950 p-7">
              <p className="text-sm font-bold text-slate-400">Para quien quiere comenzar</p><h3 className="mt-2 text-2xl font-black">Plan Básico</h3><div className="mt-5 text-5xl font-black">R$10,00</div>
              <div className="mt-6 space-y-3">{["80+ clases en video","Contenido 100% online","Acceso de por vida"].map((x)=><div key={x} className="flex gap-3 text-sm font-semibold"><Check className="h-5 w-5 text-emerald-400"/>{x}</div>)}</div>
              <a href="#" className="mt-7 inline-flex w-full items-center justify-center rounded-xl border border-white/20 px-5 py-4 text-sm font-black hover:bg-white/5">EMPEZAR CON EL BÁSICO</a>
            </div>
            <div className="relative rounded-3xl border-2 border-emerald-400 bg-slate-950 p-7 shadow-[0_20px_70px_rgba(16,185,129,.18)]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-emerald-400 px-5 py-2 text-xs font-black text-slate-950">MÁS VENDIDO</div>
              <p className="mt-2 text-sm font-bold text-emerald-300">Formación completa + materiales</p><h3 className="mt-2 text-2xl font-black">Plan Profesional</h3><div className="mt-5 text-5xl font-black">R$27,90</div>
              <div className="mt-6 space-y-3">{["80+ clases en video","Certificado de finalización","Acceso de por vida","Materiales de apoyo","10 bonos incluidos","5 manuales complementarios"].map((x)=><div key={x} className="flex gap-3 text-sm font-semibold"><Check className="h-5 w-5 text-emerald-400"/>{x}</div>)}</div>
              <div className="mt-6 rounded-xl bg-emerald-400/10 p-4 text-sm font-bold leading-6 text-emerald-200">Por solo R$17,90 adicionales recibes certificado, materiales de apoyo, guías y bonos.</div>
              <p className="mt-4 text-sm font-bold">Nuestra recomendación para quien quiere aprovechar la formación completa.</p>
              <a href="#" className="mt-7 inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-emerald-500 px-5 py-4 text-center text-sm font-black text-white hover:bg-emerald-400">QUIERO EL PLAN PROFESIONAL</a>
              <p className="mt-3 text-center text-xs font-semibold text-slate-500">Acceso inmediato • Compra segura • Garantía de 7 días</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center"><p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-400">Testimonios</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">Lo que dicen nuestros alumnos</h2><p className="mx-auto mt-4 max-w-3xl text-slate-400">Mensajes de alumnos que ya están aprovechando la Formación Profesional en Mecánica Automotriz.</p></div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {["Contenido directo y fácil de entender","Más organización para quien ya trabaja en el área","Certificado, bonos y manuales de apoyo","Más conocimiento para ahorrar en el mantenimiento del auto"].map((x,i)=><div key={x} className="rounded-2xl border border-white/10 bg-slate-900 p-5"><div className="flex gap-1 text-amber-300">{Array.from({length:5}).map((_,j)=><Star key={j} className="h-4 w-4 fill-current"/>)}</div><p className="mt-5 text-sm font-bold leading-6">{x}</p><p className="mt-4 text-xs text-slate-500">Alumno {i+1} • Formación Mecánica Automotriz</p></div>)}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/50 px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-400">Alumnos certificados</p>
            <h2 className="mt-2 text-3xl font-black sm:text-4xl">Personas que ya completaron su formación</h2>
            <p className="mt-4 leading-7 text-slate-400">
              Al finalizar el Plan Profesional, el alumno puede obtener su certificado de finalización.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 p-2 shadow-2xl">
            <img src="/certificado2.png" alt="Alumnos certificados en Mecánica Automotriz" className="aspect-square w-full rounded-2xl object-cover" />
          </div>
          <div className="mt-8 flex flex-col items-center">
            <CtaButton>QUIERO HACER PARTE</CtaButton>
            <p className="mt-3 text-xs font-semibold text-slate-500">Formación online • Acceso de por vida • Certificado en el Plan Profesional</p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 px-4 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div><p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-400">Profesional</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">Aprende una profesión que está presente en todas las ciudades</h2><p className="mt-5 leading-7 text-slate-400">Con la Formación en Mecánica Automotriz, desarrollas una base práctica para cuidar mejor tu vehículo y comenzar a buscar oportunidades en el área.</p><div className="mt-7"><CtaButton /></div></div>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900 p-3 shadow-xl">
            <img src="/certificado1.png" alt="Certificado de finalización de la Formación en Mecánica Automotriz" className="h-full w-full rounded-2xl object-cover" />
          </div>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-emerald-400/20 bg-emerald-400/[.06] p-7 sm:p-9"><ShieldCheck className="h-10 w-10 text-emerald-400"/><h2 className="mt-5 text-2xl font-black">7 DÍAS DE GARANTÍA</h2><p className="mt-3 leading-7 text-slate-400">Puedes evaluar el contenido dentro del período de garantía y solicitar el reembolso según las condiciones de la compra.</p></div>
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-7 sm:p-9"><p className="text-sm font-black uppercase tracking-[0.14em] text-emerald-400">Conoce a tu instructor</p><h2 className="mt-3 text-2xl font-black">João Emanuel</h2><p className="mt-4 leading-7 text-slate-400">Profesional del sector automotriz con 16 años de experiencia. João Emanuel reúne conocimiento práctico en mecánica, mantenimiento y diagnóstico de vehículos.</p><p className="mt-3 leading-7 text-slate-400">En esta formación comparte ese conocimiento de forma simple, directa y paso a paso, especialmente para quien comienza desde cero.</p><div className="mt-6 flex flex-wrap gap-2 text-xs font-black">{["16 años de experiencia","Contenido práctico","Enseñanza directa"].map((x)=><span key={x} className="rounded-full border border-white/10 bg-slate-950 px-3 py-2">{x}</span>)}</div></div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/50 px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center"><p className="text-sm font-black uppercase tracking-[0.16em] text-emerald-400">Preguntas frecuentes</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">Resuelve tus dudas</h2></div>
          <div className="mt-8 space-y-3">{faqs.map(([q,a])=><details key={q} className="group rounded-2xl border border-white/10 bg-slate-950 p-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">{q}<ChevronDown className="h-5 w-5 shrink-0 text-emerald-400 transition group-open:rotate-180"/></summary><p className="mt-4 pr-8 text-sm leading-6 text-slate-400">{a}</p></details>)}</div>
        </div>
      </section>

      <section className="px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl"><Wrench className="mx-auto h-10 w-10 text-emerald-400"/><h2 className="mt-5 text-3xl font-black sm:text-4xl">Comienza hoy a desarrollar una nueva habilidad</h2><p className="mt-4 text-slate-400">Accede a la Formación en Mecánica Automotriz y comienza tus primeras clases.</p><div className="mt-8 flex flex-col items-center"><CtaButton /><p className="mt-3 text-xs font-semibold text-slate-500">Acceso inmediato • Acceso de por vida • Garantía de 7 días</p></div></div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-xs text-slate-600">© 2026 Formación en Mecánica Automotriz. Todos los derechos reservados.</footer>
    </main>
  );
}
