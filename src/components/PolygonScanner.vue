<template>
    <div class="app">
        <NavBar/>
        <header>
            <div class="video-container">
                <video
                    class="header-video"
                    :src="vid"
                    autoplay="autoplay"
                    loop="loop"
                    muted="muted"></video>
            </div>
            <div class="header-text">
                <span id="typewriter">{{ headerText }}</span>
            </div>
        </header>

        <section class="hidden" ref="section0">
            <div class="container">
                <h1>
                    PolygonScan Scrapper</h1>
                <p id="botdesc">{{ botDescription }}</p>
            </div>
        </section>

        <section class="hidden" ref="section1">
            <div class="container">
                <h2>{{ section1Title }}</h2>
                <div>
                    <CustomListItem
                        v-for="(text, index) in section1Texts"
                        :key="index"
                        :text="text"
                        :icon="icon"/>
                </div>
            </div>
        </section>

        <section class="hidden" ref="section2">
            <div class="container">
                <h2>{{ section2Title }}</h2>
                <div>
                    <CustomListItem
                        v-for="(item, index) in section2Items"
                        :key="index"
                        :text="item.text"
                        :icon="icon"
                        :link="item.link"/>
                </div>
            </div>
        </section>

        <section class="header-content">
            <div class="info-container">
                <img :src="rage" alt="rage"/>
            </div>
            <h2>{{ coffee }}</h2>
            <ul>
                <li v-for="(item, index) in headerContentItems" :key="index">{{ item }}</li>
            </ul> 
        </section>

        <CardComponent/>

        <footer class="footer">
            <div class="footer-content">
                <img class="footer-logo" :src="FLogo" alt="Logo"/>
                <p>Powered By  <a href="https://ovoono.studio/" target="_blank">OvoOno Studio</a> </p>
                <p> <!-- Trigger Modal Button --> <button @click="isModalVisible = true">Privacy & Policy</button> </p>
            </div>
        </footer>
    </div>
    <!-- Privacy Policy Modal -->
    <PrivacyPolicyModal :showModal="isModalVisible" @close-modal="isModalVisible = false"></PrivacyPolicyModal>
</template>

<script>
    import NavBar from "@/components/NavBar.vue";
    import CardComponent from "@/components/CardComponent.vue";
    import vid from "@/assets/logoanimation.mp4";
    import LogoNav from "@/assets/logo2.png";
    import FLogo from "@/assets/logoovo.png";
    import icon from "@/assets/logo.png";
    import rage from "@/assets/jaluzele/rageEmote.png";
    import CustomListItem from "@/components/CustomListItem.vue";
    import PrivacyPolicyModal from "@/components/PrivacyPolicyModal.vue";

    export default {
        name: "App",
        components: {
            NavBar,
            CardComponent,
            CustomListItem,
            PrivacyPolicyModal
        },
        data() {
            return {
                LogoNav: LogoNav,
                FLogo: FLogo,
                vid: vid,
                icon: icon,
                rage: rage,
                isModalVisible: false,
                headerText: "Hi!\nI'm PolygonScan\nScrapper Bot",
                coffee: "Premium features",
                coffeeImg: "https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=bezm" +
                        "ir&button_colour=FFDD00&font_colour=000000&font_family=Poppins&outline_colour=" +
                        "000000&coffee_colour=ffffff",
                coffeeLink: "https://www.buymeacoffee.com/bezmir",
                headerContentItems: [
                    "Access all commands",
                    "TA signal for trading",
                    "Volume and Current Price",
                    "VOL, EMA, MACD, RSI, ADX and BB",
                    "Chart with 4 subplots included",
                    "Sending signal every hour",
                    "88% accurate",
                    "Only 100 spots",
                    "0.088 ETH one-time payment for life time access!"
                ],
                section1Title: "Discover the Exclusive Features",
                section1Texts: [
                    "Effortlessly monitor the value of your Ethereum and Polygon tokens.", "Set customized price alerts to stay informed.", "Stay updated on the latest market trends.", "Gwei Monitoring", "Sending crypto signals as TA indicators such as MACD, RSI, BB and more"
                ],
                section2Title: "How to use my services?",
                section2Items: [
                    {
                        text: "Invite me to your Discord server and unlock a world of possibilities.",
                        link: "https://discord.com/api/oauth2/authorize?client_id=1041454438595965049&permiss" +
                                "ions=2147534848&scope=bot%20applications.commands"
                    }, {
                        text: "Use in-app commands such as /help to display help message",
                        link: null
                    }, {
                        text: "Enjoy the PolygonScan Scrapper features and consider supporting it by voting.",
                        link: null
                    }
                ],
                botDescription: "A Discord bot that calculates algorithmically trading strategy to generate Crypto Signal! Bot also uses the Polygonscan API, Disnake library to provide access to various blockchain data and functionality, such as querying the state of a contract, retrieving transaction history, or submitting transactions."
            };
        },

        mounted() {
            // Scroll animations
            const observer = new IntersectionObserver(this.handleScrollAnimations, {
                root: null,
                rootMargin: this.rootMargin,
                threshold: this.threshold
            });

            const section0 = this.$refs.section0;
            const section1 = this.$refs.section1;
            const section2 = this.$refs.section2;

            observer.observe(section0);
            observer.observe(section1);
            observer.observe(section2);

            // Typewriter effect
            const headerText = document.getElementById("typewriter");
            const text = headerText.textContent;
            headerText.textContent = " ";

            let i = 0;
            const typeSpeed = 100;

            const type = () => {
                if (i < text.length) {
                    if (text.charAt(i) === " ") {
                        headerText.innerHTML += "&nbsp;";
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
                        entry.target.style.opacity = 1;
                    } else {
                        entry.target.style.opacity = 0;
                    }
                });
            }
        }
    };
</script>

<style scoped="scoped">
    @import '../assets/styles.css';
</style>