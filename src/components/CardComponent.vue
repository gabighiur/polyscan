<template>
    <section id="card-component" class="visible" ref="section3">
        <div class="container">
            <h2>{{ title }}</h2>
            <div class="row">
                <div class="col-lg-4" v-for="testimonial in testimonials" :key="testimonial.id">
                    <div class="card">
                        <div class="face front-face">
                            <img :src="testimonial.image" alt="" class="profile">
                            <div class="pt-3 text-uppercase name">
                                {{ testimonial.name }}
                            </div>
                            <div class="designation">{{ testimonial.designation }}</div>
                        </div>
                        <div class="face back-face">
                            <span class="fas fa-quote-left"></span>
                            <div class="testimonial">
                                {{ testimonial.comment }}
                            </div>
                            <span class="fas fa-quote-right"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
        title: 'What other says',
        testimonials: [
            {
            id: 1,
            image: require('@/assets/null.png'),
            name: 'NullofGehenna',
            designation: 'Blockchain Researcher',
            comment: 'Polygon Bot has transformed how I manage my crypto investments. It simplifies tracking and provides timely alerts.'
            },
            {
            id: 2,
            image: require('@/assets/popeye.png'),
            name: 'Popeye',
            designation: 'Crypto Enthusiast',
                comment: "It's intuitive and integrates well with my workflow, keeping me informed about blockchain data and price changes."
            },
            {
            id: 3,
            image: require('@/assets/filip.png'),
            name: 'The Filip',
            designation: 'Blockchain Researcher',
                comment: 'It has become an essential tool to stay on top of earnings and make informed investment decisions'
            }
        ]
    };
  }
};
</script>

<style scoped>
    #card-component .container {
        width: unset;
    }

    #card-component .container h2 { 
        text-align: center;
    }

    .container {
        margin-top: 80px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    }

    .row {
        display: flex;
        justify-content: space-between;
    }

    .col-lg-4 {
        flex: 0 0 calc(33.33% - 20px);
        margin-bottom: 20px;
    }

    .card {
        margin: 30px;
        width: 300px;
        height: 300px;
        transform-style: preserve-3d;
        perspective: 500px;
        border: none;
        background-color: inherit;
    }

    .card .face {
        position: absolute;
        color: #fff;
        width: 100%;
        height: 100%;
        overflow: hidden;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
        border-radius: 15px;
        background: rgba(255, 255, 255, 0.06);
        transform-style: preserve-3d;
        transition: 0.5s;
        backface-visibility: hidden;
        border-top: 1px solid #ddd;
        border-left: 1px solid #ddd;
    }

    .card .face.front-face,
    .card .face.back-face {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .card .face.front-face .profile {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
    }

    .card .face.front-face .name {
        letter-spacing: 2px;
        margin: 10px;
        font-size: 20px;
        text-transform: uppercase;
        margin-top: 15px;
    }

    .card .face.front-face .designation {
        font-size: 0.8rem;
        color: #ddd;
        letter-spacing: 0.8px;
    }

    .card:hover .face.front-face {
        transform: rotateY(180deg);
    }

    .card .face.back-face {
        position: absolute;
        background: rgba(255, 255, 255, 0.06);
        transform: rotateY(180deg);
        padding: 20px 30px;
        text-align: center;
        user-select: none;
    }

    .card .face.back-face .fa-quote-left {
        position: absolute;
        top: 25px;
        left: 25px;
        font-size: 1.2rem;
    }

    .card .face.back-face .fa-quote-right {
        position: absolute;
        bottom: 35px;
        right: 25px;
        font-size: 1.2rem;
    }

    .card .back-face{
        width: 80%;
        height: 80%;
    }

    .card .back-face .testimonial {
        font-size: 22px;
        text-align: left;
    }

    .card:hover .face.back-face {
        transform: rotateY(360deg);
    }

   

    @media (max-width: 991.5px) {
        .row {
            flex-wrap: wrap;
        }

        .col-lg-4 {
            flex: 0 0 100%;
        }
    }
</style>
