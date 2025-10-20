// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    modules: ['shadcn-nuxt', '@nuxtjs/i18n', '@nuxtjs/color-mode', '@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxt/eslint'],
    shadcn: {
        prefix: '', componentDir: '~/components/ui'
    },
    i18n: {
        defaultLocale: 'zh-CN', locales: [{
            code: 'zh-CN', file: 'zh-CN.json', name: '简体中文'
        }],
    },
    colorMode: {
        classSuffix: ''
    },
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => tag === 'altcha-widget'
        }
    }
})