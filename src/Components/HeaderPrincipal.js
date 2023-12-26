class HeaderPrincipal extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: 'open'});
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        const componentRoot = document.createElement('header');
        componentRoot.setAttribute('class', 'banner');

        const bannerContent = document.createElement('div');
        bannerContent.setAttribute('class', 'banner-content');

        const logoMarca = document.createElement('div');
        logoMarca.setAttribute('class', 'logo');

        const imagemHeader = document.createElement('img');
        imagemHeader.src = 'assets/images/logo.png';

        const tituloPrincipalHeader = document.createElement('h1');
        tituloPrincipalHeader.textContent = this.getAttribute('tituloPrincipal');

        const paragrafoHeader = document.createElement('p');
        paragrafoHeader.textContent = this.getAttribute('paragrafo');

        const botaoheader = document.createElement('button');
        botaoheader.textContent = this.getAttribute('botao');

        componentRoot.appendChild(bannerContent);
        bannerContent.appendChild(logoMarca);
        ('');
        bannerContent.appendChild(tituloPrincipalHeader);
        bannerContent.appendChild(paragrafoHeader);
        bannerContent.appendChild(botaoheader);
        logoMarca.appendChild(imagemHeader);

        return componentRoot;
    }

    style() {
        const style = document.createElement('style');
        style.textContent = `
        @import url('reset.css');

body {
  background-color: black;
}

h2 {
  font-size: 2rem;
  color: #33A8DB;
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 24px;
}

p {
  color: white;
}

section {
  margin: 100px auto;
}

.banner {
  background-image: linear-gradient(rgba(0, 0, 0, .6), rgba(49, 168, 221, .2), rgba(0, 0, 0, .6)), url('/assets/images/banner.png');
  background-size: cover;
  background-repeat: no-repeat;
  height: 600px;
  padding-top: 60px;
  border-bottom: 1px solid #33A8DB80;
}

.banner .banner-content {
  color: white;
  width: 600px;
  margin: auto;
  text-align: center;
}

.banner h1 {
  font-size: 2.5rem;
  font-weight: 900;
  text-transform: uppercase;
  color: transparent;
  background: -webkit-linear-gradient(#33A8DB, #1472B7);
  background-clip: text;
  -webkit-background-clip: text;
}

.banner p {
  font-size: 1.25rem;
  margin: 16px 0 24px;
}

.banner .logo {
  background-color: rgba(0, 0, 0, .2);
  height: 260px;
  width: 260px;
  margin: auto;
  border-radius: 50%;
  padding: 16px;
  margin-bottom: 16px;
}

.banner .logo img {
  margin: auto;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.banner .banner-content button {
  color: #31A8DD;
  font-size: 1rem;
  font-weight: bold;
  padding: 16px 32px;
  text-transform: uppercase;
  letter-spacing: 4px;
  background-color: transparent;
  border-image: linear-gradient(#3BA1CD, #1572B7);
  border-image-slice: 10;
  border-radius: 30px;
	cursor: pointer;
}

#course-content {
  width: 800px;
  text-align: center;
}

#course-content .modules-list {
  margin: 24px 0;
}

#course-content .modules-list .module {
  color: white;
  width: 530px;
  margin: 0 auto 24px;
  border: 1px solid #33A8DB;
  background-color: #252525;
  padding: 16px;
  border-radius: 100px;
  box-shadow: inset -5px 6px 8px rgba(0, 0, 0, .7);
	cursor: pointer;
}

#course-content .modules-list .module span {
  color: #33A8DB;
}

#transform-world {
  height: 560px;
  background-size: cover;
  background-image: url("/assets/images/woman-code.png");
  background-attachment: fixed;
  border-top: 1px solid #33A8DB80;
  border-bottom: 1px solid #33A8DB80;
  padding: 200px;
}

#transform-world p {
  font-weight: 900;
  font-size: 2.5rem;
  text-transform: lowercase;
  max-width: 250px;
  text-shadow: 3px 2px #33A8DB;
}

#professional-challenges {
  text-align: center;
  width: 800px;
}

#professional-challenges img {
  margin: 32px 0;
}

footer {
  padding: 60px 0;
  text-align: center;
  background-image: linear-gradient(rgba(50, 168, 219, .0), rgba(50, 168, 219, .2));
  border-top: 1px solid #33A8DB80;
}

footer .dio-logo {
  width: 300px;
}

footer a {
  color: #33A8DB;
  font-weight: bold;
  text-decoration: none;
}`;

        return style;
    }
}

customElements.define('header-principal', HeaderPrincipal);
