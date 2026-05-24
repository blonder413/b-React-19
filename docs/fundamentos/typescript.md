# 🟢 TypeScript esencial para React

> Aquí aprenderás el TypeScript mínimo necesario para entender React sin fricción.

## 🎯 Objetivo de esta sección

Al terminar podrás:

- Entender tipos básicos
- Tipar funciones
- Tipar objetos
- Leer código React con TypeScript
- Evitar errores comunes desde el inicio

---

## 🚫 Importante

No vamos a ver:

- Tipos avanzados
- Generics complejos
- Utility types

> Solo lo necesario para empezar con React

---

## 🧠 Tipos básicos

```ts
let nombre: string = "Jonathan";
let edad: number = 30;
let activo: boolean = true;
```

👉 TypeScript valida esto antes de ejecutar

---

## 🧱 Tipos en objetos

```ts
type Usuario = {
    id: number;
    nombre: string;
};
```

Uso:

```ts
const usuario: Usuario = {
    id: 1,
    nombre: "Jonathan",
};
```

---

## 🔄 Funciones tipadas

```ts
const saludar = (nombre: string): string => {
    return `Hola ${nombre}`;
};
```

👉 Entrada tipada + salida tipada

---

## 🧩 Destructuring tipado

```ts
type Usuario = {
    nombre: string;
};

const usuario: Usuario = {
    nombre: "Jonathan",
};

const { nombre } = usuario;
```

👉 Esto lo usarás en props

---

## 🔁 Arrays tipados

```ts
const numeros: number[] = [1, 2, 3];

const resultado = numeros.map((n) => n * 2);
```

👉 `map` es clave para React

---

## 📦 Import / Export

```ts
export const saludar = (nombre: string) => `Hola ${nombre}`;
```

```ts
import { saludar } from "./saludar";
```

---

## 🧠 Conexión con React

Esto será:

- Tipos → Props ✅
- Funciones → Componentes ✅
- Arrays → Render dinámico ✅

---

## 🧪 Ejercicios

### Nivel 1

Crear una función tipada que retorne un saludo.

<details>
<summary>✅ Ver solución</summary>

```ts
const saludar = (nombre: string): string => {
    return `Hola ${nombre}`;
};
```

</details>

---

### Nivel 2

Definir un tipo `Producto`.

<details>
<summary>✅ Ver solución</summary>

```ts
type Producto = {
    id: number;
    nombre: string;
    precio: number;
};
```

</details>

---

### Nivel 3 (integrado)

Crear un array de productos y usar `map`.

<details>
<summary>✅ Ver solución</summary>

```ts
type Producto = {
    id: number;
    nombre: string;
};

const productos: Producto[] = [{ id: 1, nombre: "Mouse" }];

const nombres = productos.map((p) => p.nombre);
```

</details>

---

## ✅ Resultado esperado

Deberías poder:

- Leer tipos básicos
- Entender funciones tipadas
- Usar objetos con tipos
- Comprender arrays tipados

---

## 🔜 Siguiente paso

👉 JSX — cómo TypeScript y React trabajan juntos
