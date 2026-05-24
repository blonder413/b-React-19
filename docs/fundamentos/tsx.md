# 🟢 TSX — TypeScript + UI en React

> TSX es la forma en la que React combina TypeScript y JSX para construir interfaces.

## 🎯 Objetivo de esta sección

Al terminar podrás:

- Entender qué es TSX
- Escribir UI tipada dentro de funciones
- Usar variables y tipos dentro del render
- Comprender cómo React interpreta el código

## 🧠 ¿Qué es TSX?

TSX es JSX + TypeScript.

Ejemplo:

```tsx
const elemento = <h1>Hola mundo</h1>;
```

👉 No es HTML  
👉 Es TypeScript que React transforma a elementos reales

## ⚠️ Regla importante

Un componente debe retornar un solo elemento raíz.

✅ Correcto:

```tsx
function App() {
    return (
        <div>
            <h1>Hola</h1>
            <p>Texto</p>
        </div>
    );
}
```

❌ Incorrecto:

```tsx
function App() {
  return (
    <h1>Hola</h1>
    <p>Texto</p>
  )
}
```

## 🧱 Componentes como funciones tipadas

```tsx
function Saludo() {
    return <h1>Hola</h1>;
}
```

👉 Aquí ya estás usando:

- Funciones ✅
- TSX ✅
- Tipado de retorno ✅

## 🔄 Uso de variables en TSX

```tsx
function Saludo() {
    const nombre: string = "Jonathan";

    return <h1>Hola {nombre}</h1>;
}
```

## 🧠 Expresiones en TSX

Puedes usar cualquier expresión válida de TypeScript:

```tsx
function Edad() {
    const edad: number = 30;

    return <p>Edad: {edad + 1}</p>;
}
```

## 🚫 Qué no puedes hacer directamente

No puedes usar estructuras como `if` dentro del return:

```tsx
function Test() {
    return <div>if (true) {<p>Hola</p>}</div>;
}
```

👉 Esto se resolverá con render condicional más adelante

## 🔤 Diferencias con HTML

- `class` → `className`
- `for` → `htmlFor`

```tsx
function Caja() {
    return <div className="container">Contenido</div>;
}
```

## 🧠 Qué hace React internamente

Esto:

```tsx
<h1>Hola</h1>
```

Se transforma en:

```ts
React.createElement("h1", null, "Hola");
```

👉 No lo usarás directamente, pero explica el comportamiento

## 🔗 Conexión con lo anterior

- TypeScript → Tipos ✅
- Funciones → Componentes ✅
- TSX → UI dinámica ✅

## 🧪 Ejercicios

### Nivel 1

Crear un componente con título y párrafo.

<details>
<summary>✅ Ver solución</summary>

```tsx
function MiComponente() {
    return (
        <div>
            <h1>Título</h1>
            <p>Este es un párrafo</p>
        </div>
    );
}
```

</details>

### Nivel 2

Mostrar una variable tipada en pantalla.

<details>
<summary>✅ Ver solución</summary>

```tsx
function Saludo() {
    const nombre: string = "Jonathan";

    return <h1>Hola {nombre}</h1>;
}
```

</details>

### Nivel 3 (integrado)

Usar un objeto tipado dentro del TSX.

<details>
<summary>✅ Ver solución</summary>

```tsx
type Usuario = {
    nombre: string;
};

function UsuarioInfo() {
    const usuario: Usuario = { nombre: "Jonathan" };

    return <h1>Hola {usuario.nombre}</h1>;
}
```

</details>

## ✅ Resultado esperado

Deberías poder:

- Escribir TSX correctamente
- Entender cómo se combina lógica y UI
- Crear componentes básicos con tipos

## 🔜 Siguiente paso

👉 Componentes con props tipadas (reutilización real)
