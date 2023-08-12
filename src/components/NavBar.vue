<template>
    <nav class="navbar">
        <div class="desktop-menu">
            <div class="social-icons">
                <a href="https://twitter.com/OvoOnoStudio" target="_blank" rel="noopener noreferrer">
                    <img :src="Twitter" alt="Twitter" />
                </a>
                <a href="https://discord.gg/AgKDuxY9hV" target="_blank" rel="noopener noreferrer">
                    <img :src="Discord" alt="Discord" />
                </a>
            </div>
            <img class="logo" :src="LogoNav" alt="Logo" @click="scrollToTop" />
            <div class="menu-items">
                <a href="https://discord.com/api/oauth2/authorize?client_id=1041454438595965049&permissions=2147534848&scope=bot%20applications.commands" target="_blank" rel="noopener noreferrer">Invite</a>
                <a href="https://www.buymeacoffee.com/bezmir/membership" target="_blank" rel="noopener noreferrer">Coffee</a>
                <a href="https://top.gg/bot/1041454438595965049/vote?__cf_chl_tk=EH95WEe2Mhc7Vfz6DnJgWrZBVPUiWKJTGu_GBW8jtcQ-1686419311-0-gaNycGzNC9A" target="_blank" rel="noopener noreferrer">Vote</a>
                <a href="https://top.gg/bot/1041454438595965049" target="_blank" rel="noopener noreferrer">Top GG</a>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div class="mobile-menu">
            <img class="logo-mobile" :src="LogoNav" alt="Logo" />
            <input type="checkbox" id="toggle-menu" v-model="showMobileMenu">
            <label for="toggle-menu" class="hamburger" :class="{ 'is-active': showMobileMenu }">
                <span></span>
                <span></span>
                <span></span>
            </label>

            <div class="menu-overlay" v-if="showMobileMenu" @click="toggleMobileMenu"></div>
            <div class="menu-content" :class="{ 'show-menu': showMobileMenu }">
                <a href="https://discord.com/api/oauth2/authorize?client_id=1041454438595965049&permissions=2147534848&scope=bot%20applications.commands" target="_blank" rel="noopener noreferrer">Invite</a>
                <a href="https://www.buymeacoffee.com/bezmir/membership" target="_blank" rel="noopener noreferrer">Coffee</a>
                <a href="https://top.gg/bot/1041454438595965049/vote?__cf_chl_tk=EH95WEe2Mhc7Vfz6DnJgWrZBVPUiWKJTGu_GBW8jtcQ-1686419311-0-gaNycGzNC9A" target="_blank" rel="noopener noreferrer">Vote</a>
                <a href="https://top.gg/bot/1041454438595965049" target="_blank" rel="noopener noreferrer">Top GG</a>
                <div class="social-icons">
                    <a href="https://twitter.com/OvoOnoStudio" target="_blank" rel="noopener noreferrer"><img :src="Twitter" alt="Twitter" /></a>
                    <a href="https://discord.gg/AgKDuxY9hV" target="_blank" rel="noopener noreferrer"><img :src="Discord" alt="Discord" /></a>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    import LogoNav from '@/assets/logo2.png';
    import Twitter from '@/assets/twitter.png';
    import Discord from '@/assets/discord.png';

    export default {
        data() {
            return {
                Twitter,
                Discord,
                LogoNav,
                showMobileMenu: false, // Controls the visibility of the mobile menu
            };
        },
        methods: {
            scrollToTop() {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            },
            toggleMobileMenu() {
                this.showMobileMenu = !this.showMobileMenu;
                document.body.style.overflow = this.showMobileMenu ? 'hidden' : 'auto';
            },
        },
    };
</script>

