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

<style>
    .navbar {
        position: fixed;
        font-family: 'Bebas', sans-serif;
        font-size: 26px;
        width: 100%;
        height: 65px;
        padding: 0.2rem;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        z-index: 9999;
        margin-right: 0px;
        background: rgb(119, 16, 133);
        background: linear-gradient(23deg, rgba(119, 16, 133, 1) 0%, rgba(77, 0, 133, 1) 100%, rgba(0, 212, 255, 1) 100%);
    }

    .logo {
        width: 100px;
        cursor: pointer;
    }

    .desktop-menu {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-right: 30px;
    }

        .desktop-menu .menu-items {
            display: flex;
            align-items: center;
            margin-left: auto;
        }

            .desktop-menu .menu-items a {
                
                margin-left: 20px;
                color: white;
                text-decoration: none;
                transition: color 0.3s ease;
            }

                .desktop-menu .menu-items a:hover {
                    color: #67c4a5;
                }

            .desktop-menu .menu-items a {
                margin-left: 20px;
                color: white;
                text-decoration: none;
            }

                .desktop-menu .menu-items a:before {
                    content: "";
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background-color: transparent;
                    transform: scaleX(0);
                    transition: transform 0.3s ease;
                }

                .desktop-menu .menu-items a:hover:before {
                    background-color: #67c4a5;
                    transform: scaleX(1);
                }

    .mobile-menu {
        display: none;
        align-items: center;
    }

    .hamburger {
        display: inline-block;
        width: 30px;
        height: 20px;
        cursor: pointer;
        position: relative;
        z-index: 2;
    }

        .hamburger span {
            position: absolute;
            display: block;
            height: 2px;
            width: 100%;
            background-color: white;
            transition: background-color 0.3s ease, transform 0.3s ease;
            transform-origin: center;
        }

            .hamburger span:nth-child(1) {
                top: 25%;
            }

            .hamburger span:nth-child(2) {
                top: 50%;
            }

            .hamburger span:nth-child(3) {
                top: 75%;
            }

    .menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
        display: none;
    }

    .menu-content {
        display: grid;
        position: fixed;
        top: 0;
        left: 0;
        max-width: 300px;
        height: 40%;
        transform: translateX(-100%) scale(1);
        transition: transform 0.3s ease;
        z-index: 2;
        width: 56%;
        max-width: none;
        background-color: #67c4a5;
        margin-top: 56px;
    }

        .menu-content.show-menu {
            transform: translateX(0);
        }

        .menu-content a {
            display: block;
            margin-bottom: 10px;
            color: #000;
            text-decoration: none;
            transition: color 0.3s ease;
        }

            .menu-content a:hover {
                color: whitesmoke;
            }

    .social-icons {
        display: flex;
        flex-direction: column;
    }

        .social-icons img {
            width: 24px;
            margin: 0 8px;
            transition: transform 0.3s ease;
        }

            .social-icons img:hover {
                transform: scale(1.2);
            }

    /* Media Query for Mobile */
    @media (max-width: 767px) {
        .social-icons {
            background: rgb(119, 16, 133);
            background: linear-gradient(23deg, rgba(119, 16, 133, 1) 0%, rgba(77, 0, 133, 1) 100%, rgba(0, 212, 255, 1) 100%);
            display: flex;
            justify-content: center;
            flex-direction: row;
        }

        .menu-content .social-icons img {
            width: 24px;
            margin: 0 8px;
        }

        .navbar {
            position: sticky;
            height: 50px;
            
        }

        .logo-mobile {
            width: 100px;
            margin-right: 20px;
            cursor: pointer;
        }

        input#toggle-menu {
            display: none;
        }

        .desktop-menu {
            display: none;
        }

        .mobile-menu {
            display: flex;
        }

        .hamburger {
            margin-right: 10px;
        }

            .hamburger.is-active span:nth-child(1) {
                top: 50%;
                transform: translateY(-50%) rotate(-45deg);
            }

            .hamburger.is-active span:nth-child(2) {
                opacity: 0;
            }

            .hamburger.is-active span:nth-child(3) {
                top: 50%;
                transform: translateY(-50%) rotate(45deg);
            }

        .menu-content a {
            margin-top: 9px;
            display: flex;
            color: #27082b;
            text-decoration: none;
            flex-direction: row;
            align-content: center;
            justify-content: center;
            flex-wrap: nowrap;
            align-items: center;
        }

        .menu-content.show-menu {
            transform: translateX(0);
        }
    }
</style>
