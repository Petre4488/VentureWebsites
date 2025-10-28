"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Accordion, AccordionItem } from "@heroui/react";
import Link from "next/link";

import { OrbitingCircles } from "@/components/orbiting-circles";
import { SectionHeader } from "@/components/about/section-header";

type QA = {
  q: string;
  a: string;            // plain text for JSON-LD
  jsx?: React.ReactNode; // rich answer with links/markup
  variations?: string[]; // extra keyword variations (visible, concise)
};

type Category = {
  key: string;
  title: string;
  icon: string;
  description: string;
  orbitingIcons: string[];
  qas: QA[];
};

interface SEOFAQProps {
  city?: string; // for "near me" phrasing
  links?: {
    services?: string;
    pricing?: string;
    ai?: string;
    contact?: string;
    compare?: string;
  };
}

export const Faq: React.FC<SEOFAQProps> = ({
  city = "Bucharest",
  links = {
    services: "/web-design-development",
    pricing: "/web-design-development/cost-pricing",
    ai: "/web-design-development/ai-website-builder-service",
    contact: "/contact",
    compare: "/web-design-development/google-sites-vs-shopify-vs-canva",
  },
}) => {
  const categories: Category[] = [
    {
      key: "how-to",
      title: "How to create / start / design a business website",
      icon: "mdi:book-open-variant",
      description:
        "How to create a website for my business: from scratch, online, on Google/Shopify/Canva/Facebook, to sell products. Steps, tools, SEO, launch.",
      orbitingIcons: ["mdi:web", "mdi:domain", "mdi:magnify", "mdi:rocket-launch"],
      qas: [
        {
          q: "How to create a website for my business (from scratch, online)?",
          a: "Define goals (lead-gen, booking, e-commerce), choose platform (Framer/Webflow/WordPress for services; Shopify for store), buy domain, plan sitemap (Home, Services, Pricing, About, Blog, Contact), design mobile-first, add clear CTAs, set basic SEO (titles, metas, H1-H3, internal links, schema), connect analytics & conversions, then launch with SSL, speed and QA.",
          jsx: (
            <p className="text-sm leading-relaxed">
              1) Definește obiectivul (lead-gen, booking, e-commerce) → 2) Alege platforma
              <span className="whitespace-nowrap"> (servicii: Framer/Webflow/WordPress; magazin: Shopify)</span> → 3) Cumpără domeniu →
              4) Fă un sitemap minim (Home, Services, Pricing, About, Blog, Contact) →
              5) Design mobile-first + CTA clar →
              6) SEO de bază (title/meta, H1-H3, <Link ref={links.compare} className="underline underline-offset-2" href={""}>internal links</Link>, schema) →
              7) GA4 + evenimente →
              8) Launch (SSL, viteză, QA). Dacă vrei „done-for-you”, vezi <Link ref={links.services} className="underline underline-offset-2" href={""}>serviciile noastre</Link>.
            </p>
          ),
          variations: [
            "how to open/start a website for my business",
            "how to create a website for my business online",
            "how to create a website for my business from scratch",
          ],
        },
        {
          q: "How to design a website for my business that converts?",
          a: "Use a simple hero with value proposition and CTA, benefits before features, trust signals (reviews, logos), fast loading, scannable sections, pricing clarity, and frictionless forms or checkout.",
          jsx: (
            <p className="text-sm leading-relaxed">
              Folosește un <strong>hero</strong> clar (problem → promise → proof → proposal) cu CTA,
              pune <strong>beneficii</strong> înaintea feature-elor, adaugă <strong>social proof</strong>, optimizează
              <strong> viteza</strong>, structurează pe secțiuni scurte, arată <strong>prețurile</strong> transparent și
              folosește <strong>formulare</strong> simple. Pentru detalii, vezi <Link ref={links.services} className="underline underline-offset-2" href={""}>Web Design & Development</Link>.
            </p>
          ),
          variations: ["how to design a website for my business", "to sell products / get leads"],
        },
        {
          q: "How to create a website for my business on Google / Shopify / Canva / Facebook?",
          a: "Google Sites: rapid, dar limitat SEO. Shopify: cel mai bun pentru e-commerce. Canva: bun pentru one-pager de campanie, limite la SEO/extensii. Facebook Page nu înlocuiește website-ul; folosește-l ca distribuție.",
          jsx: (
            <p className="text-sm leading-relaxed">
              <strong>Google Sites</strong>: rapid, dar SEO limitat. <strong>Shopify</strong>: top pentru e-commerce.
              <strong> Canva</strong>: one-pager simplu, limite la SEO/extensii. <strong>Facebook Page</strong> ≠ website;
              păstrează-l pentru distribuție. Comparativul complet este aici:
              {" "}
              <Link ref={links.compare} className="underline underline-offset-2" href={""}>Google Sites vs Shopify vs Canva</Link>.
            </p>
          ),
          variations: [
            "how to create a website for my business on google/shopify/canva",
            "how to create a website for my business on facebook",
          ],
        },
      ],
    },
    {
      key: "free",
      title: "Free website for my business",
      icon: "mdi:cash-off",
      description:
        "Can I get/make a free website for my business (with Google/AI/free domain)? Pros & cons, hidden costs, upgrade path.",
      orbitingIcons: ["mdi:cash", "mdi:shield-alert", "mdi:progress-check", "mdi:domain"],
      qas: [
        {
          q: "Can I get a free website for my business?",
          a: "Yes, but expect subdomain, limited features and branding, weaker SEO and possible upsells. Free is fine for MVP; upgrade to paid with your own domain when you start converting.",
          jsx: (
            <p className="text-sm leading-relaxed">
              Da, dar de obicei primești <strong>subdomeniu</strong>, funcții limitate, branding impus și SEO slab.
              Folosește varianta free pentru <strong>MVP</strong>, apoi treci pe plan plătit cu <strong>domeniu propriu</strong>.
              Dacă vrei o cale rapidă → <Link ref={links.pricing} className="underline underline-offset-2" href={""}>Pricing & pachete</Link>.
            </p>
          ),
          variations: [
            "create website for my business free",
            "how to get a website for my business for free",
            "best free website for my business",
          ],
        },
        {
          q: "Create a free website with Google / with AI / with free domain — is it reliable?",
          a: "Google Sites and some free plans work for simple pages; AI helps with drafts. “Free domain” is usually a subdomain; real .com/.ro domains are paid. Start free, plan to upgrade.",
          jsx: (
            <p className="text-sm leading-relaxed">
              <strong>Google Sites</strong> și planurile free sunt ok pentru simple pages; <strong>AI</strong> ajută la drafturi.
              “Free domain” = aproape mereu <strong>subdomeniu</strong>. Domeniile .com/.ro reale sunt plătite.
              Recomandare: start free → <em>upgrade</em> pe măsură ce vin lead-uri.
            </p>
          ),
        },
      ],
    },
    {
      key: "ai",
      title: "Create a website with AI / Can ChatGPT build my site?",
      icon: "material-symbols:smart-toy",
      description:
        "Create a website for my business with AI: where AI helps (research, structure, copy) vs where humans are essential (UX, SEO, QA).",
      orbitingIcons: ["mdi:robot-excited", "mdi:lightbulb-on-outline", "mdi:account-tie", "mdi:clipboard-check-outline"],
      qas: [
        {
          q: "Can AI or ChatGPT create a website for my business end-to-end?",
          a: "AI accelerates research, structure and copy drafts, but brand strategy, UX, accessibility, technical SEO, integrations and QA still require humans.",
          jsx: (
            <p className="text-sm leading-relaxed">
              <strong>AI</strong> accelerează research, structură și primul draft de copy, dar
              <strong> brand strategy</strong>, <strong>UX</strong>, <strong>accesibilitate</strong>, <strong>SEO tehnic</strong>,
              <strong> integrații</strong> și <strong>QA</strong> rămân muncă de echipă. Noi folosim AI ca <em>speed-multiplier</em>,
              nu ca înlocuitor (<Link ref={links.ai} className="underline underline-offset-2" href={""}>AI-assisted build</Link>).
            </p>
          ),
          variations: ["create a website for my business with AI", "can chatgpt create a website for my business"],
        },
      ],
    },
    {
      key: "who-near",
      title: `Who can build it? “Near me” in ${city} & done-for-you`,
      icon: "mdi:account-hard-hat",
      description:
        "Who can build/create a website for my business (near me)? Build me a website; need a professional website.",
      orbitingIcons: ["mdi:map-marker-radius", "mdi:handshake-outline", "mdi:cellphone-link", "mdi:calendar-clock"],
      qas: [
        {
          q: `Who can build a website for my business near me (${city})?`,
          a: "Choose by portfolio, process, guarantees and communication, not only geography. We work remote or local, with discovery, prototype and sprint delivery.",
          jsx: (
            <p className="text-sm leading-relaxed">
              Alege după <strong>portofoliu</strong>, <strong>proces</strong>, <strong>garanții</strong> și comunicare —
              nu doar după “near me”. Lucrăm remote sau local în {city}, cu <em>discovery → prototip → sprinturi</em>.
              Scrie-ne direct: <Link ref={links.contact} className="underline underline-offset-2" href={""}>Contact</Link>.
            </p>
          ),
          variations: [
            "who can build/create a website for my business",
            "website for my business near me",
            "build me a website",
          ],
        },
        {
          q: "I need a professional website for my business — what’s included?",
          a: "Strategy, design, development, on-page SEO, analytics, and light automations. Clear scope, timeline and price tiers.",
          jsx: (
            <p className="text-sm leading-relaxed">
              <strong>Strategie</strong>, <strong>design</strong>, <strong>development</strong>,
              <strong> SEO on-page</strong>, <strong>analytics</strong> și automations de bază. Scope clar, timeline,
              pachete <Link ref={links.pricing} className="underline underline-offset-2" href={""}>Launch / Grow / Scale</Link>.
            </p>
          ),
        },
      ],
    },
    {
      key: "cost-why",
      title: "Cost, value & timing",
      icon: "mdi:chart-bar",
      description:
        "How much is a website? What can a website do for my business? Why/when should I have one?",
      orbitingIcons: ["mdi:cash-multiple", "mdi:timer-outline", "mdi:trending-up", "mdi:target-variant"],
      qas: [
        {
          q: "How much is a website for my business (cost / pricing)?",
          a: "Cost depends on scope: pages, e-commerce or booking, integrations, copy/photos, languages and deadline. Use transparent pricing tiers or a quick estimator.",
          jsx: (
            <p className="text-sm leading-relaxed">
              Depinde de <strong>scope</strong> (nr. pagini, e-commerce/booking, integrații, copy/foto, limbi, deadline).
              Vezi <Link ref={links.pricing} className="underline underline-offset-2" href={""}>pricing transparent</Link> sau cere un
              <Link ref={links.contact} className="underline underline-offset-2" href={""}> estimat rapid</Link>.
            </p>
          ),
          variations: ["how much is a website for my business", "website for my business cost"],
        },
        {
          q: "Why do I need a website for my business (should I have one)?",
          a: "A website is your owned hub: improves trust, local SEO, lead capture, bookings and sales; social media is distribution, not ownership.",
          jsx: (
            <p className="text-sm leading-relaxed">
              Site-ul este <strong>proprietatea ta</strong>: <strong>încredere</strong>, <strong>SEO local</strong>,
              <strong> captare de lead-uri</strong>, <strong>booking</strong> și <strong>vânzări</strong>.
              Social media = distribuție, nu proprietate.
            </p>
          ),
          variations: [
            "why i need a website for my business",
            "should i have/get a website for my business",
          ],
        },
        {
          q: "When should I make a website for my business?",
          a: "As early as possible: SEO compounds over time, validates your offer and gives a reliable lead channel.",
          jsx: (
            <p className="text-sm leading-relaxed">
              <strong>Cât mai devreme</strong>: SEO are inerție, validezi oferta și îți creezi un canal stabil de lead-uri.
            </p>
          ),
        },
        {
          q: "What can a website do for my business (practical)?",
          a: "Attract search traffic, explain your offer clearly, capture leads, enable booking/payments, educate via blog/FAQ and automate follow-up.",
          jsx: (
            <p className="text-sm leading-relaxed">
              <strong>Trafic din căutări</strong>, ofertă clară, <strong>lead capture</strong>, <strong>booking/plăți</strong>,
              educație prin <strong>blog/FAQ</strong> și <strong>automatizări</strong> de follow-up.
            </p>
          ),
        },
      ],
    },
    {
      key: "platforms",
      title: "Platforms & builders (Google / Shopify / Canva / WordPress / Framer / Webflow)",
      icon: "mdi:layers-triple",
      description:
        "What website should I use for my small business? Best website/builder (free vs paid), app or website for my business.",
      orbitingIcons: ["mdi:google", "mdi:shopify", "mdi:palette-outline", "mdi:wordpress"],
      qas: [
        {
          q: "What platform should I use for my small business?",
          a: "Services: Framer/Webflow/WordPress (choose by SEO/editor/extensibility). E-commerce: Shopify. One-pager: Google Sites/Canva. Decide by objective, budget and time-to-market.",
          jsx: (
            <p className="text-sm leading-relaxed">
              <strong>Servicii</strong>: Framer/Webflow/WordPress (după SEO, editor, extensii).
              <strong> E-commerce</strong>: Shopify. <strong>One-pager</strong>: Google Sites/Canva.
              Alege după obiectiv, buget și timp-to-market. Vezi <Link ref={links.compare} className="underline underline-offset-2" href={""}>comparativul</Link>.
            </p>
          ),
          variations: [
            "best website for my small business",
            "best website builder for my business",
            "website builder for my small business",
          ],
        },
        {
          q: "App or website for my business?",
          a: "Start with a website (SEO, shareability, lower cost). Build an app only if you need native features (push, offline, hardware).",
          jsx: (
            <p className="text-sm leading-relaxed">
              Începe cu <strong>website</strong> (SEO, share-abil, cost mic). Fă <strong>app</strong> când chiar ai nevoie
              de funcții native (push/offline/hardware).
            </p>
          ),
        },
      ],
    },
    {
      key: "industries",
      title: "Industries, locations & languages",
      icon: "mdi:earth",
      description:
        "Booking website, cleaning/coaching/food/jewelry; in Nigeria/Tamil/South Africa/Vancouver/Burnaby; near me.",
      orbitingIcons: ["mdi:translate", "mdi:city-variant-outline", "mdi:briefcase", "mdi:hand-heart"],
      qas: [
        {
          q: "Do you build booking / cleaning / coaching / food / jewelry websites?",
          a: "Yes. Templates for local services (booking, reviews, city pages) and e-commerce (catalog, payments).",
          jsx: (
            <p className="text-sm leading-relaxed">
              Da — avem <strong>template-uri</strong> pentru booking/local services (recenzii, city pages) și
              pentru <strong>e-commerce</strong> (catalog, payments).
            </p>
          ),
          variations: [
            "booking website for my business",
            "website for my cleaning/coaching/food/jewelry business",
          ],
        },
        {
          q: "Can you build websites for other languages/regions (Tamil, Nigeria, South Africa, Vancouver/Burnaby)?",
          a: "We localize language, currency, tax and local SEO (maps, NAP, city pages).",
          jsx: (
            <p className="text-sm leading-relaxed">
              Da — localizăm <strong>limba</strong>, <strong>moneda</strong>, <strong>taxele</strong> și
              <strong> SEO local</strong> (Maps, NAP, city pages).
            </p>
          ),
          variations: [
            "how to create website for my business in tamil / in nigeria",
            "website for my business south africa",
          ],
        },
      ],
    },
    {
      key: "reddit-wp",
      title: "Reddit questions & “WordPress is very hard”",
      icon: "mdi:forum",
      description:
        "Making a website for my business (Reddit), do I need a website (Reddit), WordPress is hard — what now?",
      orbitingIcons: ["mdi:account-question", "mdi:wrench-outline", "mdi:arrow-decision-auto", "mdi:sync"],
      qas: [
        {
          q: "I did my website on WordPress — it’s very hard. What now?",
          a: "Keep domain and content, simplify the editor or migrate to Framer/Webflow if maintenance is a burden. We take over existing sites and make them manageable.",
          jsx: (
            <p className="text-sm leading-relaxed">
              Păstrează <strong>domeniul</strong> și conținutul, simplifică editorul sau migrează la
              <strong> Framer/Webflow</strong> dacă mentenanța te omoară. Putem prelua și stabiliza site-ul tău.
            </p>
          ),
          variations: [
            "i did website for my business on wordpress it very hard",
            "making a website for my business reddit",
            "do i really need a website for my business (reddit)",
          ],
        },
      ],
    },
  ];

  // Build compact JSON-LD (top ~10 QAs)
  const faqJsonLd = useMemo(() => {
    const allQAs = categories.flatMap((c) => c.qas);
    const top = allQAs.slice(0, 10);
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: top.map(({ q, a }) => ({
        "@type": "Question",
        name: q,
        acceptedAnswer: { "@type": "Answer", text: a },
      })),
    };
  }, [categories]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <SectionHeader icon="mdi:help-circle-outline" title="Business Website FAQ — Clear Answers" />

      {/* JSON-LD for rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Accordion selectionMode="multiple" variant="bordered">
        {categories.map((cat) => (
          <AccordionItem
            key={cat.key}
            aria-label={cat.title}
            title={cat.title}
            startContent={<Icon className="text-xl text-primary" icon={cat.icon} />}
          >
            <p className="mb-4 text-sm text-muted-foreground">{cat.description}</p>

            <div className="relative mb-6 h-[240px] w-full">
              <OrbitingCircles
                className="h-full w-full [&>div]:hover:scale-110 [&>div]:hover:text-primary-500"
                duration={22}
                radius={110}
              >
                {cat.orbitingIcons.map((ic) => (
                  <div key={ic}>
                    <Icon className="transition-all duration-300" height={24} width={24} icon={ic} />
                  </div>
                ))}
              </OrbitingCircles>
            </div>

            <Accordion selectionMode="multiple" variant="splitted">
              {cat.qas.map((qa, i) => (
                <AccordionItem
                  key={`${cat.key}-${i}`}
                  aria-label={qa.q}
                  title={qa.q}
                  startContent={<Icon className="text-base" icon="mdi:chat-question-outline" />}
                >
                  {qa.jsx ? (
                    <div className="text-sm leading-relaxed">{qa.jsx}</div>
                  ) : (
                    <p className="text-sm leading-relaxed">{qa.a}</p>
                  )}

                  {qa.variations && qa.variations.length > 0 && (
                    <ul className="pl-5 mt-3 text-xs list-disc text-muted-foreground">
                      {qa.variations.map((v) => (
                        <li key={v}>{v}</li>
                      ))}
                    </ul>
                  )}

                  {/* Soft CTA */}
                  <div className="flex flex-wrap gap-3 mt-4">
                    <Link
                              ref={links.services}
                              className="rounded-xl border px-3 py-1.5 text-xs hover:bg-primary hover:text-primary-foreground transition" href={""}                    >
                      Explore services
                    </Link>
                    <Link
                              ref={links.pricing}
                              className="rounded-xl border px-3 py-1.5 text-xs hover:bg-primary hover:text-primary-foreground transition" href={""}                    >
                      See pricing
                    </Link>
                    <Link
                              ref={links.ai}
                              className="rounded-xl border px-3 py-1.5 text-xs hover:bg-primary hover:text-primary-foreground transition" href={""}                    >
                      AI-assisted build
                    </Link>
                    <Link
                              ref={links.contact}
                              className="rounded-xl border px-3 py-1.5 text-xs hover:bg-primary hover:text-primary-foreground transition" href={""}                    >
                      Get a quick estimate
                    </Link>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.section>
  );
};
