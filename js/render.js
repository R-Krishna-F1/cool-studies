(function () {
  const sections = Array.isArray(window.DS_SECTIONS) ? window.DS_SECTIONS : [];
  const nav = document.getElementById("nav");
  const content = document.getElementById("content");

  if (!sections.length || !nav || !content) return;

  const esc = value => String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

  const withBreaks = value => esc(value).replace(/\n/g, "<br>");

  nav.innerHTML = sections
    .map((section, index) =>
      `<button class="nav-btn${index === 0 ? " active" : ""}" data-panel="${esc(section.id)}">${esc(section.label)}</button>`
    )
    .join("");

  content.innerHTML = sections
    .map((section, index) => {
      const props = (section.properties || [])
        .map(([label, value]) => `
          <div class="cell">
            <div class="clbl">${esc(label)}</div>
            <div class="cval">${withBreaks(value)}</div>
          </div>
        `)
        .join("");

      return `
        <section id="${esc(section.id)}" class="panel${index === 0 ? " active" : ""}">
          <div class="ptitle">${esc(section.title || section.label)}</div>
          <span class="badge ${esc(section.badgeClass || "bb")}">${esc(section.badge || "")}</span>
          <div class="tabs">
            <button class="tab active" data-tab-target="${esc(section.id)}-props">Properties</button>
            <button class="tab" data-tab-target="${esc(section.id)}-code">Java Code</button>
          </div>
          <div id="${esc(section.id)}-props" class="tab-content active">
            <div class="grid">${props}</div>
            ${section.note ? `<div class="note">${esc(section.note)}</div>` : ""}
          </div>
          <div id="${esc(section.id)}-code" class="tab-content">
            <div class="code-wrap">
              <button class="copy-btn">copy</button>
              <pre class="code-block">${esc(section.code || "")}</pre>
            </div>
          </div>
        </section>
      `;
    })
    .join("");
})();