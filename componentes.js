/* componentes.js */
class MiHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="container">
                <div class="header-subtext">
                    <div class="logo-wrapper">
                        <a href="index.html">
                            <span class="sub-logo">Escuela de Estudios Simbólicos
                        </a>
                    </div>
                </div>
                <div class="header-content">
                    <div class="logo-wrapper">
                        <a href="index.html" class="logo">
                            <span class="sub-logo">La Casa de Delfos
                        </a>
                    </div>
                </div>
            </div>
            <nav class="navbar">
            <div class="container">
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="nosotros.html">Nosotros</a></li>
                    <li><a href="#">Talleres</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
        </nav>
        </header>`;
    }
}

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

customElements.define('mi-header', MiHeader);
customElements.define('mi-footer', MiFooter);