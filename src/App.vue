<template> 
    <div id="app">
        <PolygonScanner />        
    </div>
</template>

<script> 
    import PolygonScanner from './components/PolygonScanner.vue'; 
    import {computed, reactive } from 'vue'
    import { useHead } from '@vueuse/head'
    export default {
        name: 'App',
        components: {
            PolygonScanner,
        },
        setup() {
            const siteData = reactive({
                title: 'PolygonScan Scrapper | Discord Bot for Traders',
                url: 'https://polygonscan-scrapper.ovoono.studio/',
                description: 'An advanced Discord bot that is offering services as sending crypto signals, price alerts and scraping data from blockchain.'
            })
            useHead({
                title: computed(() => siteData.title),
                htmlAttrs: { lang: 'en', amp: true }, 
                meta: [
                    // set og:title and og:description meta tags
                    { name: 'og:url', content: computed(() => siteData.url) },
                    { name: 'og:type', content: 'website'},
                    { name: 'og:title', content: 'PolygonScan Scrapper'},
                    { name: 'og:description', content: computed(() => siteData.description) },
                    { name: 'og:image', content: 'https://ovoono.studio/assets/logo/ovo3dlogo.png'}
                ]
            })
        }
    };
</script>
