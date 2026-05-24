# 🟢 Introducción a React con TypeScript

> Antes de escribir código, es clave entender qué estamos usando y por qué.

## 🎯 Objetivo de esta sección

Al terminar esta sección podrás:

- Entender qué es React
- Comprender por qué se usa TypeScript
- Identificar cómo se estructura una app moderna
- Tener tu entorno listo para trabajar correctamente

## ⚛️ ¿Qué es React?

React es una librería de JavaScript para construir interfaces de usuario.

Pero más importante:

> React es una forma de **pensar la UI como estados y componentes**

## 🧠 Idea clave #1 — UI basada en estado

En React:

- La interfaz cambia según los datos (estado)
- No manipulas el DOM manualmente

Ejemplo conceptual:

```
estado = usuario_logueado

si estado = true → mostrar dashboard
si estado = false → mostrar login
```

## 🧱 Idea clave #2 — Componentes

Un componente es una función que devuelve UI.

Ejemplo (TypeScript):

```ts
type Props = {
    nombre: string
}

function Saludo({ nombre }: Props) {
return <h1>Hola {nombre}</h1>
}
```

👉 Aquí vemos dos cosas importantes:

- React (JSX)
- TypeScript (tipos)

## 🔷 ¿Por qué TypeScript?

TypeScript agrega tipos a JavaScript.

Esto permite:

- Detectar errores antes de ejecutar
- Mejor autocompletado
- Código más mantenible

Ejemplo:

```ts
type Usuario = {
    id: number;
    nombre: string;
};
```

👉 Sin TypeScript podrías pasar cualquier cosa  
👉 Con TypeScript el error aparece antes

## ⚙️ Cómo trabajaremos en este manual

Reglas clave:

- ✅ Siempre usaremos TypeScript
- ✅ Evitaremos `any`
- ✅ Tiparemos props, estado y funciones
- ✅ Explicaremos solo lo necesario en cada paso

## 🧱 Enfoque incremental

Importante:

> No aprenderás todo React de una vez

En su lugar:

- Paso 1 → Componentes
- Paso 2 → Props
- Paso 3 → Estado
- Paso 4 → Eventos

Y así sucesivamente.

## 🚫 Qué NO necesitas aún

Para evitar sobrecarga, en esta etapa NO veremos:

- Hooks avanzados
- Context API
- Librerías externas
- Arquitectura compleja

## 🧪 Ejercicio (nivel 0 — conceptual)

Responde sin código:

1. ¿Qué significa que la UI depende del estado?
2. ¿Qué es un componente?
3. ¿Por qué usar TypeScript en React?

## ✅ Resultado esperado

Si todo está claro, deberías poder explicar:

> "React es una forma de construir interfaces usando componentes y estado, apoyado por TypeScript para mayor seguridad"

## 🔜 Siguiente paso

👉 JavaScript esencial para React (solo lo que realmente necesitas)
