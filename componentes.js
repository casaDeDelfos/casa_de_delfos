/* ============================= */
/* HEADER */
/* ============================= */
class MiHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="container">
                <div class="header-subtext">
                    <div class="logo-wrapper">
                        <a href="index.html">
                            <span class="sub-logo">Escuela de Estudios Simbólicos</span>
                        </a>
                    </div>
                </div>

                <div class="header-content">
                    <div class="logo-wrapper">
                        <a href="index.html" class="logo">
                            <span class="sub-logo">Casa de Delfos</span>
                        </a>
                    </div>
                </div>
            </div>

            <nav class="navbar">
                <div class="container">
                    <ul>
                        <li><a href="../index.html">Inicio</a></li>
                        <li><a href="../nosotros.html">Nosotros</a></li>
                        <li><a href="../contacto.html">Contacto</a></li>
                    </ul>
                </div>
            </nav>
        </header>`;
    }
}
customElements.define('mi-header', MiHeader);


/* ============================= */
/* FOOTER */
/* ============================= */
class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="container">
                <p>&copy; 2026 La Casa de Delfos.</p>
            </div>
        </footer>`;
    }
}
customElements.define('mi-footer', MiFooter);


/* ============================= */
/* ACORDEONES (H2 retraíbles) */
/* ============================= */
window.addEventListener("load", function () {

  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    const acc = section.querySelector(".accordion");
    const panel = section.querySelector(".panel");

    if (!acc || !panel) return;

    acc.addEventListener("click", function () {
      acc.classList.toggle("active");
      panel.classList.toggle("open");
    });
  });

});
