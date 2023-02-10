console.log("Vue OK", Vue);

const app = Vue.createApp({
    data() {
        return {
           movie: {

             images: [
                
                "./img/01.webp",
                "./img/02.webp",
                "./img/03.webp",
                "./img/04.webp",
                "./img/05.webp"

             ],

             activeImage : 0

           } 
           
        }
    },


    methods: {
        prevImage() {
            // alert("click prev");
            if (this.movie.activeImage - 1 < 0) {
                this.movie.activeImage = this.movie.images.length -1
            } else {
                this.movie.activeImage--;
            }

        },

        nextImage() {
            // alert("click next");
            if (this.movie.activeImage + 1 >= this.movie.images.length) {
                this.movie.activeImage = 0;
            } else {
                this.movie.activeImage++;
            }
            
        },

        switchToImage(index) {
            
            this.movie.activeImage = index;
        }

    },

    // created() {
        
    // },

    // mounted() {

    // }

});


app.mount("#root");