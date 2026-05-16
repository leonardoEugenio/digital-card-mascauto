import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineEnvelope, HiOutlineGlobeAlt } from "react-icons/hi2";

const links = [
  {
    label: "E-mail",
    value: "mascautohaus.piracicaba@gmail.com",
    href: "mailto:mascautohaus.piracicaba@gmail.com",
    icon: HiOutlineEnvelope,
  },
  {
    label: "WhatsApp",
    value: "(19) 99999-9999",
    href: "https://wa.me/5519999999999",
    icon: FaWhatsapp,
  },
  {
    label: "Site",
    value: "Em breve ...",
    href: "#",
    disabled: true,
    icon: HiOutlineGlobeAlt,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="mx-auto flex min-h-screen w-full max-w-lg flex-col justify-center px-0 py-0 sm:px-5 sm:py-8">
        <div className="border border-masc-steel/45 bg-[var(--masc-glass)] p-0 backdrop-blur sm:p-4">
          <div
            className="bg-masc-surface px-5 py-7 sm:px-7"
            style={{
              backgroundImage:
                "linear-gradient(145deg, rgba(34, 41, 54, 0.54) 0%, rgba(17, 21, 29, 0.58) 54%, rgba(0, 0, 0, 0.68) 100%), url('/images/backgroud/couro.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <header className="flex flex-col items-center text-center">
              <div className="mb-6 h-28 w-28">
                <Image
                  src="/images/logos/logo_MASC_metalizado_icone.png"
                  alt="Logo MASC Autohaus"
                  width={596}
                  height={596}
                  priority
                  className="h-full w-full object-contain scale-200"
                />
              </div>

              <h1 className="text-3xl font-black uppercase leading-none text-masc-offwhite tracking-widest">
                MASC Autohaus
              </h1>

              <p className="-mx-5 mt-5 bg-masc-steel/90 px-5 py-4 text-sm font-semibold uppercase leading-6 tracking-[0.12em] text-masc-offwhite sm:-mx-7 sm:px-7">
                Automóveis selecionados com entrega nacional
              </p>
            </header>

            <div className="my-7 h-px bg-masc-steel/45" />

            <nav aria-label="Canais de contato" className="space-y-3">
              {links.map((link) => {
                const Icon = link.icon;
                const className =
                  "group flex min-h-14 w-full items-stretch justify-between overflow-hidden border border-[var(--masc-line)] bg-masc-surface text-left transition duration-200 sm:min-h-16";

                const content = (
                  <>
                    <span className="flex w-14 shrink-0 items-center justify-center bg-masc-steel text-2xl text-masc-navy transition group-hover:text-masc-offwhite sm:w-16 sm:text-3xl">
                      <Icon aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1 self-center px-3 py-2.5 sm:px-4 sm:py-3">
                      <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-masc-steel sm:text-xs sm:tracking-[0.22em]">
                        {link.label}
                      </span>
                      <span className="mt-1 block truncate text-xs font-medium text-masc-offwhite sm:text-sm">
                        {link.value}
                      </span>
                    </span>
                    <span className="flex shrink-0 items-center px-3 text-base text-masc-steel transition group-hover:translate-x-1 group-hover:text-masc-offwhite sm:px-4 sm:text-lg">
                      {link.disabled ? "..." : "↗"}
                    </span>
                  </>
                );

                if (link.disabled) {
                  return (
                    <div
                      key={link.label}
                      aria-disabled="true"
                      className={`${className} cursor-default opacity-70`}
                    >
                      {content}
                    </div>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`${className} hover:border-masc-steel hover:bg-masc-surface-muted`}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {content}
                  </a>
                );
              })}
            </nav>

            <footer className="mt-8 border-t border-masc-steel/45 pt-5 text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-masc-steel">
                Velocidade. Segurança. Eficiência.
              </p>
            </footer>
          </div>
        </div>
      </section>
    </main>
  );
}
