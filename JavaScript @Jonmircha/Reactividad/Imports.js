// ? Contructor
export class Constructor {
  // $ Contructor de Componentes
  constructor(options) {
    this.el = options.el;
    this.data = options.data;
    this.template = options.template;
  }

  // $ Render UI
  render() {
    const el = document.querySelector(this.el);
    if (!el) return;
    el.innerHTML = this.template(this.data);
    console.log(this.data);
  }

  // $ Actualizar State
  setState(obj) {
    for (const key in obj) {
      if (this.data.hasOwnProperty(key)) {
        this.data[key] = obj[key];
      }
    }
    this.render();
  }

  // $ Obtener State
  getState() {
    return JSON.parse(JSON.stringify(this.data));
  }
}
