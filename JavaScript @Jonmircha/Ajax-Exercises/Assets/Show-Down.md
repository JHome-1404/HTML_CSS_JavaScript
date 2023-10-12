# INTRODUCCION

## CARACTERISTICAS

- Lenguaje de Alto Nivel
- Interpretado
- Dinámico
- Débilmente Tipado
- Multi paradigma
- Sensible a MAYÚSCULAS y minúsculas.
- No necesitas los puntos y comas al final de cada línea.

## ESCRITURA DE CODIGO

Los identificadores deben comenzar con:

- Una letra

  **var a = 7;**

- Un signo de dolar $

  **var $a = 8;**

- Un guión bajo \_

  **var \_a = 10;**

- Nunca con números o caracteres especiales.

  **var -a = 8**

  **var 1a = 5**

## BUENAS PRACTICAS

### **SNAKE_CASE**

Espacios con Guion bajos

**mi_archivo_javascript.js;**

### **UPPER_CASE**

Constantes en MAYUSCULAS

```
const UNA_CONSTANTE = "Soy una constante",
PI = 3.141592653589793;
```

### **UPPERCAMELCASE**

Mayuscukas y minusculas

```
class SerHumano {
constructor(nombre, genero) {
this.nombre = nombre;
this.genero = genero;
}

miNombreEs() {
return `Mi nombre es ${this.nombre}`;
}
}
```

## PALABRAS RESERVADAS

Palabras que no pueden ser utilizadas para nombrar ninguna vaiable

- A: abstract
- B: boolean, break, byte
- C: case, catch, char, class, const, continue
- D: debugger, default, delete, do, double
- E: else, enum, export, extends
- F: false, final, finally, float, for, function
- G: goto
- I: if, implements, import, in, instanceof, int, interface
- L: let, long
- N: native, new, null
- P: package, private, protected, public
- R: return
- S: short, static, super, switch, synchronized
- T: this, throw, throws, transient, true, try, typeof
- V: var, volatile, void
- W: while, with

## ORDENAMIENTO DEL CODIGO

1. IMPORTACIÓN DE MÓDULOS.
2. DECLARACIÓN DE VARIABLES.
3. DECLARACIÓN DE FUNCIONES.
4. EJECUCIÓN DE CÓDIGO.

## TIPOS DE DATOS

- Primitivos: Se accede directamente al valor.
  - string
  - number
  - boolean
  - null
  - undefined
  - NaN
- Compuestos: Se accede a la referencia del valor.
  - object = {}
  - array = []
  - function () { }
  - Class {}
  - etc.
