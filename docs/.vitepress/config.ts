import { defineConfig } from "vitepress";

export default defineConfig({
    title: "React Manual",
    description: "Aprendizaje incremental de React con TypeScript",

    themeConfig: {
        nav: [{ text: "Inicio", link: "/" }],

        sidebar: [
            {
                text: "🟢 Fundamentos",
                items: [
                    { text: "Introducción", link: "/fundamentos/introduccion" },
                    {
                        text: "TypeScript esencial",
                        link: "/fundamentos/typescript",
                    },
                    { text: "JSX", link: "/fundamentos/jsx" },
                ],
            },
            {
                text: "🔵 React básico",
                items: [
                    {
                        text: "Primer componente",
                        link: "/react-basico/componente",
                    },
                    { text: "Props", link: "/react-basico/props" },
                ],
            },
            {
                text: "🟡 State y eventos",
                items: [
                    { text: "useState", link: "/state/use-state" },
                    { text: "Eventos", link: "/state/eventos" },
                    { text: "Inputs controlados", link: "/state/inputs" },
                ],
            },
            {
                text: "🟠 Render dinámico",
                items: [
                    { text: "Listas", link: "/render/listas" },
                    { text: "Condicionales", link: "/render/condicionales" },
                ],
            },
            {
                text: "🔴 Hooks",
                items: [
                    { text: "useEffect", link: "/hooks/use-effect" },
                    { text: "Custom hooks", link: "/hooks/custom-hooks" },
                ],
            },
            {
                text: "🟣 Routing",
                items: [
                    { text: "Introducción", link: "/router/introduccion" },
                    { text: "Rutas dinámicas", link: "/router/dinamicas" },
                ],
            },
            {
                text: "⚫ APIs",
                items: [
                    { text: "Fetch", link: "/api/fetch" },
                    { text: "Estados (loading/error)", link: "/api/estados" },
                ],
            },
            {
                text: "⚪ Arquitectura",
                items: [
                    { text: "Estructura", link: "/arquitectura/estructura" },
                    {
                        text: "Separación de responsabilidades",
                        link: "/arquitectura/separacion",
                    },
                ],
            },
            {
                text: "🧪 Testing",
                items: [
                    { text: "Introducción", link: "/testing/intro" },
                    {
                        text: "Testing componentes",
                        link: "/testing/componentes",
                    },
                ],
            },
            {
                text: "🔧 Tooling",
                items: [
                    { text: "ESLint y formato", link: "/tooling/eslint" },
                    { text: "Debugging", link: "/tooling/debugging" },
                ],
            },
        ],
    },
});
