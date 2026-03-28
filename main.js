function byId(id) {
  const el = document.getElementById(id);
  if (!el) throw new Error(`No se encontró el elemento #${id}`);
  return el;
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v == null) continue;
    if (k === "class") node.className = String(v);
    else if (k === "text") node.textContent = String(v);
    else if (k === "html") node.innerHTML = String(v);
    else if (k.startsWith("on") && typeof v === "function") node.addEventListener(k.slice(2), v);
    else node.setAttribute(k, String(v));
  }
  for (const c of children) node.append(c);
  return node;
}

function safeUrl(u) {
  try {
    return new URL(u).toString();
  } catch {
    return null;
  }
}

function initialsFromName(fullName) {
  return fullName
    .split(/\s+/g)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

function iconSvg(name) {
  // Íconos simples inline (sin dependencias)
  const common = 'viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false"';
  if (name === "github")
    return `<svg ${common} fill="currentColor"><path d="M12 .5C5.7.5.8 5.6.8 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.3c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.7 2.7 1.2 3.4.9.1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-6 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2.9-.3 1.9-.4 2.9-.4s2 .1 2.9.4c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.2 5.6 18.3.5 12 .5Z"/></svg>`;
  if (name === "mail")
    return `<svg ${common} fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/></svg>`;
  if (name === "phone")
    return `<svg ${common} fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3 5.2 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.7 2.6a2 2 0 0 1-.5 2.1L9.9 10.6a16 16 0 0 0 3.5 3.5l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7A2 2 0 0 1 22 16.9Z"/></svg>`;
  if (name === "pin")
    return `<svg ${common} fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z"/><path d="M12 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/></svg>`;
  if (name === "link")
    return `<svg ${common} fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.1 0l1.4-1.4a5 5 0 0 0-7.1-7.1L10.7 5"/><path d="M14 11a5 5 0 0 0-7.1 0L5.5 12.4a5 5 0 0 0 7.1 7.1L13.3 19"/></svg>`;
  if (name === "code")
    return `<svg ${common} fill="none" stroke="currentColor" stroke-width="2"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/><path d="m14 4-4 16"/></svg>`;
  if (name === "db")
    return `<svg ${common} fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>`;
  if (name === "cloud")
    return `<svg ${common} fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19a4.5 4.5 0 0 0 .5-9 6 6 0 0 0-11.5 2A3.5 3.5 0 0 0 7 19h10.5Z"/></svg>`;
  return `<svg ${common} fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/></svg>`;
}

const CV = {
  fullName: "Luciano Ferreyra",
  role: "Programador Full Stack (JavaScript/TypeScript)",
  tagline: "Desarrollo productos web escalables con foco en experiencia de usuario y calidad de codigo.",
  location: "Cordoba, Argentina · Remoto",
  years: 6,
  github: "https://github.com/luciano-ferreyra",
  website: "https://lucianoferreyra.dev",
  email: "luciano.ferreyra.dev@gmail.com",
  phone: "+54 351 444-7788",
  about:
    "Programador con experiencia construyendo aplicaciones web, APIs y procesos de automatizacion. Trabajo con buenas practicas, testing y entregas iterativas en equipos agiles.",
  top: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker", "AWS"],
  skills: [
    { icon: "code", name: "Frontend", detail: "React · Next.js · Vite · UX/UI" },
    { icon: "code", name: "Backend", detail: "Node.js · NestJS · REST · GraphQL" },
    { icon: "db", name: "Base de Datos", detail: "PostgreSQL · MongoDB · Redis" },
    { icon: "cloud", name: "Cloud/DevOps", detail: "Docker · AWS · GitHub Actions" },
  ],
  experience: [
    {
      company: "ByteWave Solutions",
      title: "Senior Full Stack Developer",
      period: "2023 — Actualidad",
      bullets: [
        "Lidero el desarrollo de una plataforma SaaS para gestion comercial con React y Node.js.",
        "Optimice procesos criticos, reduciendo un 40% los tiempos de respuesta del backend.",
        "Implemente pipelines de CI/CD y estrategia de despliegue continuo en AWS.",
      ],
      stack: ["TypeScript", "React", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      company: "SoftAr",
      title: "Frontend Developer",
      period: "2020 — 2023",
      bullets: [
        "Desarrolle interfaces para e-commerce y sistemas internos con React y TypeScript.",
        "Implemente tests de interfaz y mejoras de accesibilidad para aumentar conversion.",
      ],
      stack: ["React", "TypeScript", "Jest", "Styled Components"],
    },
  ],
  projects: [
    {
      name: "DevTrack",
      description: "App para seguimiento de proyectos con tablero Kanban, reportes y autenticacion.",
      repo: "https://github.com/luciano-ferreyra/devtrack",
      demo: "https://devtrack-demo.vercel.app",
      tags: ["React", "Node.js", "PostgreSQL"],
    },
    {
      name: "Shop API",
      description: "API REST para e-commerce con pagos, inventario y panel de administracion.",
      repo: "https://github.com/luciano-ferreyra/shop-api",
      tags: ["NestJS", "MongoDB", "Docker"],
    },
  ],
};

function render() {
  byId("fullName").textContent = CV.fullName;
  byId("role").textContent = CV.role;
  byId("tagline").textContent = CV.tagline;
  byId("location").textContent = CV.location;
  byId("yearsBadge").textContent = `${CV.years}+ años`;
  byId("about").textContent = CV.about;
  byId("initials").textContent = initialsFromName(CV.fullName) || "CV";
  byId("updatedAt").textContent = `Actualizado: ${new Date().toLocaleDateString("es-AR")}`;

  const githubUrl = safeUrl(CV.github);
  const websiteUrl = safeUrl(CV.website);

  const githubBtn = byId("githubBtn");
  if (githubUrl) githubBtn.setAttribute("href", githubUrl);
  else githubBtn.setAttribute("href", "#");

  const chips = byId("topChips");
  chips.replaceChildren(
    ...CV.top.map((t) => el("span", { class: "chip", text: t }))
  );

  const contact = byId("contact");
  contact.replaceChildren(
    el("a", { class: "contact__item", href: `mailto:${CV.email}` }, [
      el("span", { class: "icon", html: iconSvg("mail") }),
      el("span", { class: "contact__text", text: CV.email }),
    ]),
    el("a", { class: "contact__item", href: `tel:${CV.phone.replace(/\s/g, "")}` }, [
      el("span", { class: "icon", html: iconSvg("phone") }),
      el("span", { class: "contact__text", text: CV.phone }),
    ]),
    websiteUrl
      ? el("a", { class: "contact__item", href: websiteUrl, target: "_blank", rel: "noreferrer" }, [
          el("span", { class: "icon", html: iconSvg("link") }),
          el("span", { class: "contact__text", text: CV.website }),
        ])
      : el("span", { class: "contact__item is-disabled" }, [
          el("span", { class: "icon", html: iconSvg("link") }),
          el("span", { class: "contact__text", text: "Sitio web" }),
        ])
  );

  const skills = byId("skills");
  skills.replaceChildren(
    ...CV.skills.map((s) =>
      el("div", { class: "skill" }, [
        el("div", { class: "skill__icon", html: iconSvg(s.icon) }),
        el("div", { class: "skill__body" }, [
          el("div", { class: "skill__name", text: s.name }),
          el("div", { class: "skill__detail", text: s.detail }),
        ]),
      ])
    )
  );

  const exp = byId("experience");
  exp.replaceChildren(
    ...CV.experience.map((j) =>
      el("article", { class: "job" }, [
        el("div", { class: "job__top" }, [
          el("div", { class: "job__who" }, [
            el("div", { class: "job__title", text: j.title }),
            el("div", { class: "job__company", text: j.company }),
          ]),
          el("div", { class: "job__period", text: j.period }),
        ]),
        el("ul", { class: "job__bullets" }, j.bullets.map((b) => el("li", { text: b }))),
        el("div", { class: "job__stack" }, j.stack.map((t) => el("span", { class: "pill", text: t }))),
      ])
    )
  );

  const projects = byId("projects");
  projects.replaceChildren(
    ...CV.projects.map((p) => {
      const repoUrl = safeUrl(p.repo);
      const demoUrl = p.demo ? safeUrl(p.demo) : null;
      return el("article", { class: "project" }, [
        el("div", { class: "project__head" }, [
          el("div", { class: "project__name", text: p.name }),
          el("div", { class: "project__links" }, [
            repoUrl
              ? el("a", { class: "miniLink", href: repoUrl, target: "_blank", rel: "noreferrer" }, [
                  el("span", { class: "icon icon--small", html: iconSvg("github") }),
                  el("span", { text: "Repo" }),
                ])
              : el("span", { class: "miniLink is-disabled" }, [el("span", { text: "Repo" })]),
            demoUrl
              ? el("a", { class: "miniLink", href: demoUrl, target: "_blank", rel: "noreferrer" }, [
                  el("span", { class: "icon icon--small", html: iconSvg("link") }),
                  el("span", { text: "Demo" }),
                ])
              : el("span", { class: "miniLink is-disabled" }, [el("span", { text: "Demo" })]),
          ]),
        ]),
        el("div", { class: "project__desc", text: p.description }),
        el("div", { class: "project__tags" }, p.tags.map((t) => el("span", { class: "pill", text: t }))),
      ]);
    })
  );
}

function wirePdfButton() {
  const btn = byId("downloadPdfBtn");
  btn.addEventListener("click", () => {
    // Opción universal: imprimir y "Guardar como PDF" en el diálogo del navegador.
    window.print();
  });
}

function wireAvatarFallback() {
  const img = document.querySelector(".avatar__photo");
  const initials = document.getElementById("initials");
  if (!img || !initials) return;
  img.addEventListener("error", () => {
    img.classList.add("avatar__photo--broken");
    initials.classList.add("avatar__initials--fallback");
  });
}

function wireContactForm() {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");
  if (!form || !feedback) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    feedback.hidden = false;
    feedback.textContent =
      "Listo: es solo una demostración; no se envía ningún correo ni se guarda en servidor.";
    form.reset();
  });
}

render();
wireAvatarFallback();
wirePdfButton();
wireContactForm();
