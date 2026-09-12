export default defineConfig({
    site: "https://tripic12.github.io",
    base: "/mishakazakov.github.io",

    integrations: [tailwind(), react()],

    vite: {
        resolve: {
            alias: {
                "@": "/src",
                "@components": "/src/components",
            },
        },
    },

    output: "static",

    build: {
        inlineStylesheets: "auto",
    },

    server: {
        host: true,
        port: 4321,
    },
});