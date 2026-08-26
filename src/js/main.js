// Array Data Proyek
const projects = [
  {
    title: "Website Kedai Gatheli",
    description:
      "Website Landing Page Untuk Melihat Menu Dan Memesan Produk Kopi, responsif dengan layout modern dan integrasi form kontak.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Design UIUX Aplikasi Kula Kopi",
    description: "Membuat wireferame hingga prototyping ",
    tech: ["Figma"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "Web Reservasi Lapangan",
    description:
      "SM Sport Center adalah aplikasi reservasi lapangan olahraga berbasis web yang memudahkan pengguna melakukan pemesanan secara online serta membantu admin mengelola data reservasi, transaksi, dan laporan dengan lebih cepat, akurat, dan terstruktur.",
    tech: ["HTML5", "PHP", "CSS3", "MySQL", "JavaScript"],
    demoLink: "#",
    githubLink: "#",
  },
];

// Fungsi untuk render proyek ke HTML
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container) return;

  container.innerHTML = projects
    .map(
      (project) => `
    <div class="bg-slate-800/50 border border-slate-700/60 rounded-xl p-6 flex flex-col justify-between hover:border-teal-400/50 transition duration-300">
      <div>
        <h3 class="text-xl font-bold text-slate-100 mb-3">${project.title}</h3>
        <p class="text-slate-400 text-sm mb-6 leading-relaxed">${project.description}</p>
      </div>
      <div>
        <div class="flex flex-wrap gap-2 mb-6">
          ${project.tech
            .map(
              (tech) => `
            <span class="text-xs font-mono text-teal-300 bg-teal-950/60 border border-teal-800/40 px-2.5 py-1 rounded-md">
              ${tech}
            </span>
          `,
            )
            .join("")}
        </div>
        <div class="flex gap-4 text-sm font-semibold">
          <a href="${project.demoLink}" class="text-teal-400 hover:underline">Live Demo →</a>
          <a href="${project.githubLink}" class="text-slate-400 hover:text-slate-200 transition">GitHub</a>
        </div>
      </div>
    </div>
  `,
    )
    .join("");
}

// Jalankan fungsi saat DOM siap
document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
});

// Data Keahlian Alfian Dwiyanto (Dikelompokkan berdasarkan kategori)
const skillsData = [
  {
    category: "Bahasa Pemrograman",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)"],
  },
  {
    category: "Styling & UI Frameworks",
    skills: ["Tailwind CSS", "Bootstrap", "Responsive Web Design"],
  },
  {
    category: "Tools & Workflow",
    skills: ["Git & GitHub", "VS Code", "Chrome DevTools", "npm"],
  },
];

// Fungsi Render Keahlian
function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  container.innerHTML = skillsData
    .map(
      (group) => `
    <div class="bg-slate-800/40 border border-slate-700/60 rounded-xl p-6 hover:border-teal-400/40 transition duration-300">
      <h3 class="text-lg font-bold text-teal-400 mb-4 font-mono">${group.category}</h3>
      <ul class="space-y-3">
        ${group.skills
          .map(
            (skill) => `
          <li class="flex items-center gap-3 text-slate-300 text-sm">
            <span class="w-2 h-2 rounded-full bg-teal-400"></span>
            ${skill}
          </li>
        `,
          )
          .join("")}
      </ul>
    </div>
  `,
    )
    .join("");
}

// Panggil fungsi renderSkills saat DOM selesai dimuat
document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  if (typeof renderProjects === "function") {
    renderProjects();
  }
});
