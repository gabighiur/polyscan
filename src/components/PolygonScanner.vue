<template>
    <div class="app">
        <NavBar />

        <header>
            <div class="video-container">
                <video class="header-video" :src="vid" autoplay loop muted></video>
            </div>
            <div class="header-text">
                <span id="typewriter">{{ headerText }}</span>
            </div>

            <section class="bot-description">
                <div id="container">
                    <h1>What Can I Do?</h1>
                    <p id="botdesc">{{ botDescription }}</p>
                </div>
            </section>
        </header>

        <div class="header-content">
            <div class="info-container">
                <img :src="rage" alt="rage" />
                <h2>{{ coffee }}</h2>
            </div>
            <div class="hero-container">
                <a href="https://www.buymeacoffee.com/bezmir/membership"
                   target="_blank"
                   rel="noopener noreferrer">
                    <button class="invite-button">
                        <img class="coffee" :src="coffeeImg" alt="Coffee Icon" />
                    </button>
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
                    <div class="custom-list-item">
                        <img class="list-icon" :src="icon" alt="Logo" />
                        <p>{{ section1Text4 }}</p>
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
    import NavBar from "@/components/NavBar.vue";
    import CardComponent from "@/components/CardComponent.vue";
    import vid from "@/assets/logoanimation.mp4";
    import LogoNav from "@/assets/logo2.png";
    import FLogo from "@/assets/logoovo.png";
    import icon from "@/assets/logo.png";
    import rage from "@/assets/jaluzele/rageEmote.png";
    import coffeeImg from "@/assets/jaluzele/cofee.png";

    export default {
        name: "App",
        components: {
            NavBar,
            CardComponent,
        },
        data() {
            return {
                LogoNav: LogoNav,
                FLogo: FLogo,
                vid: vid,
                icon: icon,
                rage: rage,
                coffeeImg: coffeeImg,
                headerText: "Hi!\nI'm PolygonScan\nScrapper Bot",
                coffee: "Buy me a coffee and unlock RAGEMODE",
                section1Title: "Discover the Exclusive Features",
                section1Text1: "Effortlessly monitor the value of your Ethereum and Polygon tokens.",
                section1Text2: "Set customized price alerts to stay informed.",
                section1Text3: "Stay updated on the latest market trends.",
                section1Text4: "Gwei Monitoring",
                section2Title: "How to use my services?",
                section2Text1: "Utilize the ps- prefix for commands. For example, try ps-help",
                section2Text2: "Enjoy the PolygonScan Scrapper features and consider supporting it by voting.",
                botDescription:
                    "I can access blockchain data, monitor wallets, and receive real-time alerts. Upgrade for advanced features like exporting data and increased transaction limits.",
            };
        },
        mounted() {
            // Scroll animations
            const isMobile = window.innerWidth <= 768;
            const threshold = isMobile ? 0.01 : 0.01;

            const observer = new IntersectionObserver(this.handleScrollAnimations, {
                root: null,
                rootMargin: "0px",
                threshold: threshold,
            });

            const section1 = this.$refs.section1;
            const section2 = this.$refs.section2;

            observer.observe(section1);
            observer.observe(section2);

            // Typewriter effect
            const headerText = document.getElementById("typewriter");
            const text = headerText.textContent;
            headerText.textContent = " ";

            let i = 0;
            const typeSpeed = 100; // Speed of typewriter effect (in milliseconds)

            const type = () => {
                if (i < text.length) {
                    if (text.charAt(i) === " ") {
                        headerText.innerHTML += "&nbsp;"; // Add a non-breaking space for actual spaces
                    } else {
                        headerText.innerText += text.charAt(i);
                    }
                    i++;
                    setTimeout(type, typeSpeed);
                }
            };

            type();
        },
        methods: {
           
            handleScrollAnimations(entries) {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    } else {
                        entry.target.classList.remove("visible");
                    }
                });
            },
        },
    };
</script>

<style scoped>
    @import '../assets/styles.css'; 
</style>
