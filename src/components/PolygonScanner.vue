<template>
    <div class="app">
        <nav class="navbar">
            <div class="navbar-content">
                <img class="logo" :src="logo" alt="Logo" />
                <a href="https://discord.com/api/oauth2/authorize?client_id=1041454438595965049&permissions=2147534848&scope=bot%20applications.commands"
                   target="_blank"
                   rel="noopener noreferrer">
                    <button class="invite-button">Invite me</button>
                </a>
            </div>
            <button class="hamburger" @click="toggleMenu">
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
                <span class="hamburger-line"></span>
            </button>
        </nav>
        <div class="header">
            <video class="header-video" src="../assets/hi1.mp4" autoplay loop muted></video>
        </div>

        <section class="hidden" ref="section1">
            <div class="container">
                <h1>{{ section1Title }}</h1>
                <ul>
                    <li>
                        <p>{{ section1Text1 }}</p>
                        <img class="image" :src="section1Image1" alt="Token Update" />
                    </li>
                    <li>
                        <p>{{ section1Text2 }}</p>
                        <img class="image" :src="section1Image2" alt="Price Alert" />
                    </li>
                    <li>
                        <p>{{ section1Text3 }}</p>
                    </li>
                </ul>
            </div>
        </section>

        <section class="hidden" ref="section2">
            <div class="container">
                <h1>{{ section2Title }}</h1>
                <ul>
                    <li>
                        <p>
                            <a href="https://discord.com/api/oauth2/authorize?client_id=1041454438595965049&permissions=2147534848&scope=bot%20applications.commands"
                               target="_blank"
                               rel="noopener noreferrer">
                                <button class="invite-button">Invite me</button>
                            </a>
                            to your Discord server and unlock a world of possibilities.
                        </p>
                    </li>
                    <li>
                        <p>{{ section2Text1 }}</p>
                    </li>
                    <li>
                        <p>{{ section2Text2 }}</p>
                    </li>
                </ul>
            </div>
        </section>

        <footer class="footer">
            <div class="footer-content">
                <img class="footer-logo" src="../assets/logoovo.png" alt="Logo" />
                <p>Powered By <a href="https://ovoono.studio/" target="_blank">OvoOno Studio</a></p>
            </div>
        </footer>
    </div>
</template>

<script>
    import Image1 from '@/assets/tokenUpdate.png';
    import Image2 from '@/assets/priceAlert.png';
    import Logo from '@/assets/logo2.png'

export default {
  name: 'App',
  data() {
    return {
      logo: Logo,
      section1Title: 'What can I offer?',
      section1Text1: 'Effortlessly monitor the value of your Ethereum and Polygon tokens.',
      section1Image1: Image1,
      section1Text2: 'Set customized price alerts to stay informed.',
      section1Image2: Image2,
      section1Text3: 'Stay updated on the latest market trends.',
      section2Title: 'How to use my services?',
      section2Text1: 'Utilize the ps- prefix for commands. For example, try ps-help',
      section2Text2: 'Enjoy the PolyganScan Scrapper features and consider supporting it by voting.',
    };
  },
  methods: {
    toggleMenu() {
      // Implement the logic to toggle the mobile menu here
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
    const observer = new IntersectionObserver(this.handleScrollAnimations, {
      root: null,
      rootMargin: '0px',
      threshold: 0.3, // Adjust this threshold as needed
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
