class Menu extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="../css/menu-full.css">

        <div class='container_menu'>
          <div class='logo'>COLORFUL ASSET LOGO</div>

          <div class='item'>Menu-1</div>
          <div class='item'>Menu-2</div>
          <div class='item'>Menu-3</div>
          <div class='item'>Menu-4</div>
          <div class='item'>Menu-5</div>
          <div class='item'>Menu-6</div>
        </div>
        `
      }
  }

  customElements.define('menu-full', Menu);