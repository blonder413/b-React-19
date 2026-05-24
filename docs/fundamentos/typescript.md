# 🟢 TypeScript esencial para React + TypeScript

> Aquí aprenderás solo lo necesario de TypeScript para trabajar con React correctamente.

## 🎯 Objetivo de esta sección

Al terminar podrás:

- Entender funciones modernas
- Usar destructuring
- Trabajar con arrays (map)
- Usar import/export
- Leer código React sin perderte

## 🚫 Importante

No vamos a ver:

- Clases
- Prototypes
- Temas avanzados de JS

> Solo lo que React realmente usa

## 🧠 Funciones modernas

En React usamos funciones constantemente.

Ejemplo:

```ts
function saludar(nombre: string) {
    return `Hola ${nombre}`;
}
```

También usamos funciones flecha:

```ts
const saludar = (nombre: string) => {
    return `Hola ${nombre}`;
};
```

Forma simplificada:

```ts
const saludar = (nombre: string) => `Hola ${nombre}`;
```

## 🧱 Destructuring

Permite extraer valores de objetos fácilmente.

```ts
const usuario = {
    id: 1,
    nombre: "Jonathan",
};

const { nombre } = usuario;
```

👉 Esto se usa TODO el tiempo en React (props)

## 🔁 Arrays y map()

React usa listas para renderizar UI.

```ts
const numeros = [1, 2, 3];

const resultado = numeros.map((n) => n * 2);
```

Resultado:

```ts
[2, 4, 6];
```

👉 Luego esto se convierte en componentes

## 📦 Import / Export

Los proyectos React están separados en archivos.

Exportar:

```ts
export const Saludo = () => {
  return <h1>Hola</h1>
}
```

Importar:

```ts
import { Saludo } from "./Saludo";
```

## 🧩 Tipos básicos en TypeScript

Tipos más comunes:

```ts
let nombre: string = "Jonathan";
let edad: number = 30;
let activo: boolean = true;
```

Objetos:

```ts
type Usuario = {
    id: number;
    nombre: string;
};
```

## 🔄 Funciones con tipos

```ts
const sumar = (a: number, b: number): number => {
    return a + b;
};
```

## 🧠 Conexión con React

Todo esto se usa así:

- Funciones → Componentes
- Destructuring → Props
- map → Listas en UI
- Types → Seguridad en componentes

## 🧪 Ejercicios

### Nivel 1

1. Crea una función que reciba un nombre y retorne un saludo
2. Crea un array de números y duplícalos con map

### Nivel 2

1. Define un tipo `Producto` con:
    - id
    - nombre
    - precio

2. Crea una función que reciba un producto y retorne su nombre

### Nivel 3 (integrado)

Simula esto:

```ts
productos = [ { id: 1, nombre: 'Mouse' } ]

→ transforma con map → retorna nombres
```

## ✅ Resultado esperado

Deberías poder:

- Leer funciones modernas
- Entender destructuring
- Usar map sin problemas
- Comprender imports/exports
- Leer código React básico sin confusión

## 🔜 Siguiente paso

👉 JSX — cómo React mezcla TypeScript y HTML
