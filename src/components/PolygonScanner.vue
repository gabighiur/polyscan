<template>
    <div class="app">
        <nav class="navbar" :class="{ 'show-mobile-menu': showMobileMenu }">
            <div class="navbar-content">
                <img class="logo" :src="LogoNav" alt="Logo" @click="scrollToTop" />
                <a href="https://discord.com/api/oauth2/authorize?client_id=1041454438595965049&permissions=2147534848&scope=bot%20applications.commands"
                   target="_blank"
                   rel="noopener noreferrer">
                    Invite
                </a>
                <a href="https://upgrade.chat/ovoono-studio/p/ovodonator"
                   target="_blank"
                   rel="noopener noreferrer">
                    Donate
                </a>
                <a href="https://top.gg/bot/1041454438595965049/vote?__cf_chl_tk=EH95WEe2Mhc7Vfz6DnJgWrZBVPUiWKJTGu_GBW8jtcQ-1686419311-0-gaNycGzNC9A" target="_blank" rel="noopener noreferrer">Vote</a>
                <a href="https://top.gg/bot/1041454438595965049" target="_blank" rel="noopener noreferrer">Top GG</a>
            </div>
            <button class="hamburger" :class="{ 'show-mobile-menu': showMobileMenu }" @click="toggleMenu">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
        </nav>

        <div class="header">
            <video class="header-video" :src="vid" autoplay loop muted></video>
        </div>

        <div class="header-content">
            <div class="info-container">
                <img :src="rage" alt="rage"/>
                <h2>
                   {{coffee}} 
                </h2>
            </div>
            <div class="hero-container">
                <a href="https://www.buymeacoffee.com/bezmir/membership"
                   target="_blank"
                   rel="noopener noreferrer">
                    <button class="invite-button"><img class="coffee" :src="coffeeImg" /></button>
                </a>
            </div>
        </div>

        <section class="hidden" ref="section1">
            <div class="container">
                <h1>{{ section1Title }}</h1>
                <div>
                    <div class="custom-list-item">
                        <img class="list-icon" :src="icon" alt="Logo" />
                        <p>{{ section1Text1 }}</p>
                    </div>
                    <div class="custom-list-item">
                        <img class="list-icon" :src="icon" alt="Logo" />
                        <p>{{ section1Text2 }}</p>
                    </div>
                    <div class="custom-list-item">
                        <img class="list-icon" :src="icon" alt="Logo" />
                        <p>{{ section1Text3 }}</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="hidden" ref="section2">
            <div class="container">
                <h1>{{ section2Title }}</h1>
                <div>
                    <div class="custom-list-item">
                        <img class="list-icon" :src="icon" alt="Logo" />
                        <p>
                            <a href="https://discord.com/api/oauth2/authorize?client_id=1041454438595965049&permissions=2147534848&scope=bot%20applications.commands"
                               target="_blank"
                               rel="noopener noreferrer">
                                Invite
                            </a>
                             me to your Discord server and unlock a world of possibilities.
                        </p>
                    </div>
                    <div class="custom-list-item">
                        <img class="list-icon" :src="icon" alt="Logo" />
                        <p>{{ section2Text1 }}</p>
                    </div>
                    <div class="custom-list-item">
                        <img class="list-icon" :src="icon" alt="Logo" />
                        <p>{{ section2Text2 }}</p>
                    </div>
                </div>
            </div>
        </section>

       
        <CardComponent />


        <footer class="footer">
            <div class="footer-content">
                <img class="footer-logo" :src="FLogo" alt="Logo" />
                <p>Powered By <a href="https://ovoono.studio/" target="_blank">OvoOno Studio</a></p>
            </div>
        </footer>
    </div>
</template>

<script>
    import CardComponent from '@/components/CardComponent.vue';
    import vid from '@/assets/hi1.webm';
    import LogoNav from '@/assets/logo2.png';
    import FLogo from '@/assets/logoovo.png';
    import icon from '@/assets/logo.png';
    import rage from '@/assets/jaluzele/rageEmote.png'
    import coffeeImg from '@/assets/jaluzele/cofee.png'
    
    export default {
        name: 'App',
        components: {
            CardComponent
        },
        

        data() {
            return {
                LogoNav: LogoNav,
                FLogo: FLogo,
                vid: vid,
                icon: icon,
                rage: rage,
                coffeeImg: coffeeImg,
                coffee: 'Buy me a  coffee and unlock RAGEMODE',
                section1Title: 'Discover the Exclusive Features',
                section1Text1: 'Effortlessly monitor the value of your Ethereum and Polygon tokens.',
                section1Text2: 'Set customized price alerts to stay informed.',
                section1Text3: 'Stay updated on the latest market trends.',
                section2Title: 'How to use my services?',
                section2Text1: 'Utilize the ps- prefix for commands. For example, try ps-help',
                section2Text2: 'Enjoy the PolygonScan Scrapper features and consider supporting it by voting.',
                
            };
        },
        methods: {
            scrollToTop() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            },
            toggleMenu() {
                this.showMobileMenu = !this.showMobileMenu;
            },
            handleScrollAnimations(entries) {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
        },
        mounted() {
            const isMobile = window.innerWidth <= 768;
            const threshold = isMobile ? 0.01 : 0.01;

            const observer = new IntersectionObserver(this.handleScrollAnimations, {
                root: null,
                rootMargin: '0px',
                threshold: threshold,
            });

            const section1 = this.$refs.section1;
            const section2 = this.$refs.section2;
            

            observer.observe(section1);
            observer.observe(section2);
            
        },

    };
</script>

<style scoped>
    @import '../assets/styles.css';
</style>
