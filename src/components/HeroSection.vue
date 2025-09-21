<template>
    <section>
<!-- Content -->
<v-row>
    <v-col class="d-md-flex">
        <div style="position: relative; z-index: 1; padding-left: 5vw; padding-right: 5vw; color: black; top: 100px;">
            <h2 style="font-size: 2.5vw;  text-align: start;  font-family: 'Changa', sans-serif; font-weight: 500;" class="name">Hi I'm Mark Christian N. Corsiga</h2>
            <div style="font-size: 2vw; text-align: start;  font-family: 'Changa', sans-serif; font-weight: 500;" class="type mb-2">
                A <span>{{ displayText }}</span><span class="blinking-cursor">|</span>
            </div>
            <h1 style="font-size: 6vw; font-family: 'Bebas Neue', sans-serif; text-align: start; letter-spacing: 2px;">I grow, I create, I innovate.</h1>
            <v-btn class="markbtn" @click="ProfileDialog()">
                <v-icon class="mr-1" >mdi-account-search</v-icon>Check Profile
            </v-btn>
        </div>

        <div>
            <img src="/src/assets/Meet Mark.png" alt="" class="mainimg d-none d-md-flex">
        </div>
    </v-col>
</v-row>

<!-- Section 2 -->

<v-row>
    <v-col>
        <h1 class="ml-3 mr-5 mb-5 whatcontainer" style="font-family: 'Changa', sans-serif;">WHAT I CAN DO?</h1>
        <div class="timeline">
            <div class="container left" @click="DialogHandler" role="button" tabindex="0" @keydown.enter="DialogHandler">
                <div class="content">
                    <h2>Front-End</h2>

                    <img src="/src/assets/frontend.jpeg" alt="Programming Icon" style="display: block; margin: 10px auto; width: 200px; height: auto;" class="imgLang">
                  <h3 class="Clickme">Click Me!</h3>
                </div>
            </div>

            <div class="container right" @click="DialogHandler2" role="button" tabindex="0" @keydown.enter="DialogHandler2">
                <div class="content">
                    <h2>Back-End</h2>
                   
                   <img src="/src/assets/backend.png" alt="Programming Icon" style="display: block; margin: 10px auto; width: 200px; height: auto;" class="imgLang">
                  <h3 class="Clickme mt-9">Click Me!</h3>
                </div>
            </div>

            <div class="container left" @click="DialogHandler3" role="button" tabindex="0" @keydown.enter="DialogHandler3">
                <div class="content">
                    <h2>Database</h2>
                
                   <img src="/src/assets/Database.png" alt="Programming Icon" style="display: block; margin: 10px auto; width: 200px; height: auto;" class="imgLang">
                  <h3 class="Clickme">Click Me!</h3>
                </div>
            </div>
        </div>

    </v-col>
</v-row>
    <!-- Dialog Box For Front end -->
     <v-dialog v-model="DialogHandlerVariable" max-width="500"> 
        <v-card class="FrontendDialog"> 
            <v-card-title style=" font-family: 'Changa', sans-serif; font-size: 40px; font-weight: 600;"><v-icon size="40" class="mr-3">mdi-language-javascript</v-icon>Front-End</v-card-title>
                <v-card-text style="font-family: 'Changa', sans-serif; font-size: 20px;">
                    <span v-if="!typewriterDone" class="typewriter">{{ displayedText}}</span>
                    <span v-else>{{ fullText }}</span>
                </v-card-text>   
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="DialogHandlerVariable = false" style="font-family: 'Changa', sans-serif; font-size: 15px;" class="closebtn">Close</v-btn>
                </v-card-actions>
        </v-card>
     </v-dialog>
     <!-- Dialog Box for Back-End -->
      <v-dialog v-model="DialogHandlerVariable2" max-width="500"> 
        <v-card class="FrontendDialog"> 
            <v-card-title style=" font-family: 'Changa', sans-serif; font-size: 40px; font-weight: 600;"><v-icon size="40" class="mr-3">mdi-language-php</v-icon>Back-End</v-card-title>
                <v-card-text style="font-family: 'Changa', sans-serif; font-size: 20px;">
                    <span v-if="!typewriterDone2" class="typewriter">{{ displayedText2}}</span>
                    <span v-else>{{ fullText2 }}</span>
                </v-card-text>   
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="DialogHandlerVariable2 = false" style="font-family: 'Changa', sans-serif; font-size: 15px;" class="closebtn">Close</v-btn>
                </v-card-actions>
        </v-card>
     </v-dialog>
     <!-- Dialog Box for SQL -->
      <v-dialog v-model="DialogHandlerVariable3" max-width="500"> 
        <v-card class="FrontendDialog"> 
            <v-card-title style=" font-family: 'Changa', sans-serif; font-size: 40px; font-weight: 600;"><v-icon size="40" class="mr-3">mdi-database</v-icon>Database</v-card-title>
                <v-card-text style="font-family: 'Changa', sans-serif; font-size: 20px;">
                    <span v-if="!typewriterDone3" class="typewriter">{{ displayedText3 }}</span>
                    <span v-else>{{ fullText3 }}</span>
                </v-card-text>   
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="DialogHandlerVariable3 = false" style="font-family: 'Changa', sans-serif; font-size: 15px;" class="closebtn">Close</v-btn>
                </v-card-actions>
        </v-card>
     </v-dialog>

     <!-- DIALOG FOR ABOUT BUTTON -->

     <v-dialog v-model="profileDialogbox">
        <v-card class="card-container">
            <v-card-text>
            <div class="card">
                <div class="upper-container">
                    <div class="image-container">
                    <img src="/src/assets/IMG_0149.jpg" alt="profile image" />
                    </div>
                </div>

                <div class="lower-container">
                    <div>
                    <h3>Mark Christian Corsiga</h3>
                    <h4>Full-Stack Developer</h4>
                    </div>
                    <div>
                    <p>Mark is a full-Stack developer who builds dynamic websites using Laravel and Vue.js, combining powerful backend logic with responsive frontend design.</p>
                    </div>
                </div>
                </div>
            </v-card-text>
            <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="profileDialogbox = false" style="font-family: 'Changa', sans-serif; font-size: 15px;" class="closebtn mb-4 mr-3">Close</v-btn>
                </v-card-actions>
        </v-card>
     </v-dialog>
     </section>
</template>

<script>
export default {
    data() {
        return {
            // TypeWriter Variables
            words: ['Full-stack Developer', 'Website Developer'],
            currentWordIndex: 0,
            displayText: '',
            isDeleting: false,
            typingSpeed: 100,
            // Front-End Dialog Variables
            DialogHandlerVariable: false,
            fullText: " I'm using HTML, CSS, and JavaScript for the frontend in order to develop a responsive, web application.",
            displayedText: "",
            typewriterDone: false,
            // Back-end Dialog Variables
            DialogHandlerVariable2: false,
            fullText2: "Im using PHP as the core programming language and Laravel as the framework to power your application behind the scenes.  This configuration guarantees that your system is quick, safe, and scalable—prepared to meet present demands and accommodate future expansion.",
            displayedText2: "",
            typewriterDone2: false,
            // SQL Dialog Variables
            DialogHandlerVariable3: false,
            fullText3: "A SQL database for backend data management and database management tools like MySQL, HeadiSQL, SQLLITE. I've used to create a data-driven website application.  Your system will be quick, safe, and easy to use with this configuration.",
            displayedText3: "",
            typewriterDone3: false,
            // About MArk Variables
            profileDialogbox: false,
            
        }
    },
    mounted() {
        this.type()
    },

    methods: {
        type() {
            const currentWord = this.words[this.currentWordIndex]
            const fullText = currentWord

            if (this.isDeleting) {
                this.displayText = fullText.substring(0, this.displayText.length - 1)
            } else {
                this.displayText = fullText.substring(0, this.displayText.length + 1)
            }

            const el = document.getElementById('type-target')
            if (el) {
                el.textContent = this.displayText
            }

            let speed = this.typingSpeed

            if (!this.isDeleting && this.displayText === fullText) {
                speed = 1500
                this.isDeleting = true
            } else if (this.isDeleting && this.displayText === '') {
                this.isDeleting = false
                this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length
                speed = 500
            }

            setTimeout(() => this.type(), speed)
        },

        // Button Handlers
        DialogHandler() {
            this.DialogHandlerVariable = !this.DialogHandlerVariable;
        },
        DialogHandler2() {
            this.DialogHandlerVariable2 = !this.DialogHandlerVariable2;
        },
        DialogHandler3() {
            this.DialogHandlerVariable3 = !this.DialogHandlerVariable3;
        },
        ProfileDialog() {
            this.profileDialogbox = !this.profileDialogbox
        },

        // Functions for TypeWriters inside of Dialogs
        startTypewriter() {
            this.displayedText = "";
            let i = 0;
            const speed = 10;
            const interval = setInterval(() => {
                if (i < this.fullText.length) {
                    this.displayedText += this.fullText.charAt(i);
                    i++;
                } else {
                    clearInterval(interval);
                    this.typewriterDone = true;
                    
                }
            }, speed);
        },
        startTypewriter2() {
            this.displayedText2 = "";
            let i = 0;
            const speed = 10;
            const interval = setInterval(() => {
                if (i < this.fullText.length) {
                    this.displayedText2 += this.fullText2.charAt(i);
                    i++;
                } else {
                    clearInterval(interval);
                    this.typewriterDone2 = true;
                    
                }
            }, speed);
        },
        startTypewriter3() {
            this.displayedText3 = "";
            let i = 0;
            const speed = 10;
            const interval = setInterval(() => {
                if (i < this.fullText.length) {
                    this.displayedText3 += this.fullText3.charAt(i);
                    i++;
                } else {
                    clearInterval(interval);
                    this.typewriterDone3 = true;
                    
                }
            }, speed);
        }


    },
    watch: {
        DialogHandlerVariable(val) {
            if (val && !this.typewriterDone) {
                this.startTypewriter()
            }
    },
    DialogHandlerVariable2(val) {
            if (val && !this.typewriterDone2) {
                this.startTypewriter2()
            }
    },
    DialogHandlerVariable3(val) {
            if (val && !this.typewriterDone3) {
                this.startTypewriter3()
            }
    }
}
}
</script>

<style scoped>
/* TypeWriter in Dialog  */
.typewriter::after {
    content: "|";
    animation: blink 0.7s infinite;
}
@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}
.blinking-cursor {
    animation: blink 1s step-end infinite;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

.three-d-image {
    transform: perspective(800px) rotateX(5deg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
    transition: transform 0.5s ease, box-shadow 0.5s ease;
}

.three-d-image:hover {
    transform: perspective(800px) rotateY(-10deg) rotateX(10deg) scale(1.05);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
}

.markbtn {
    font-family: "Lexend Mega", sans-serif;
    font-weight: 900;
    letter-spacing: -2px;
    margin-top: 30px;
    font-size: 20px;
    background-color: #f4d738;
    cursor: pointer;
    border: 4px solid #000;
    box-shadow: 8px 8px 0 #000;
    transition: all 0.2s ease;
}

.markbtn:hover {
    box-shadow: 6px 6px 0 #000;
    transform: translate(2px, 2px);
}

.name {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 100;
    letter-spacing: -2px;
}

.type {
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-weight: 100;
    letter-spacing: -2px;
}

.mainimg {
    position: relative;
    top: 50px;
    right: 30px;
    height: 600px;
    animation: float 4s ease-in-out infinite;
}

@keyframes float {
    0% {
        transform: translatey(0px);
    }

    50% {
        transform: translatey(-20px);
    }

    100% {

        transform: translatey(0px);
    }
}

h1 {
    text-align: center;
    font-size: 2.5em;
    margin-bottom: 10px;
    background: #f4d738;
    padding: 10px 20px;
    border: 5px solid #000;
    box-shadow: 8px 8px 0 #000;
    transition: all 0.2s ease;
     
}
h1:hover {
    box-shadow: 6px 6px 0 #000;
    transform: translate(2px, 2px);
}

p.subheading {
    text-align: center;
    font-size: 1.2em;
    margin-bottom: 40px;
    background: #ff4c4c;
    color: #fff;
    padding: 8px 20px;
    border: 4px solid #000;
    box-shadow: 6px 6px 0 #000;
}

.timeline {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
    padding: 0 15px;
}

.timeline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 100%;
    background: #000;
}

.container {
    position: relative;
    width: 45%;
    padding: 20px;
    margin-bottom: 20px;
}

.container::before {
    content: '';
    position: absolute;
    top: 30px;
    width: 20px;
    height: 20px;
    background: #ff4c4c;
    border: 4px solid #000;
    box-shadow: 4px 4px 0 #000;
    border-radius: 4px;
}

.left {
    left: 0;
    text-align: right;
}

.left::before {
    right: -33px;
}

.left .content {
    background: #fff;
    border: 4px solid #000;
    padding: 20px;
    box-shadow: 8px 8px 0 #000;
    border-radius: 4px 0 0 4px;
    max-width: 350px;
    margin-left: auto;
    transition: all 0.2s ease;
}

.left .content:hover {
    box-shadow: 6px 6px 0 #000;
    transform: translate(2px, 2px);
}

.right {
    left: 55%;
    text-align: left;
}

.right::before {
    left: -33px;
}

.right .content {
    background: #fff;
    border: 4px solid #000;
    padding: 20px;
    box-shadow: 8px 8px 0 #000;
    border-radius: 0 4px 4px 0;
    max-width: 350px;
    transition: all 0.2s ease;
}

.right .content:hover {
    box-shadow: 6px 6px 0 #000;
    transform: translate(2px, 2px);
}

.content h2 {
    color: #ff4c4c;
    font-weight: 700;
    font-size: 1.8em;
    margin-bottom: 8px;
    border-bottom: 2px solid #ff4c4c;
    display: inline-block;
    padding-bottom: 4px;
    font-family: 'Changa', sans-serif;
}

.content p {
    font-size: 1em;
    line-height: 1.5;
    margin-top: 10px;
    color: #333;
    font-family: 'Changa', sans-serif;
}

@media screen and (max-width: 768px) {
    .timeline::before {
        left: 30px;
        transform: none;
    }

    .container {
        width: 100%;
        padding-left: 60px;
        padding-right: 15px;
    }

    .container::before {
        left: -10px;
    }

    .left,
    .right {
        left: 0 !important;
        text-align: left !important;
    }

    .left .content,
    .right .content {
        max-width: none;
        border-radius: 4px;
    }
    .imgLang {
      width: 150px !important;
    }
}

.FrontendDialog {
    background: #fff;
    border: 4px solid #000;
    padding: 20px;
    box-shadow: 8px 8px 0 #000 !important;
    max-width: 500px;
}
.closebtn {
   border: 4px solid #000 !important;
  box-shadow: 8px 8px 0 #000;
  transition: all 0.2s ease;
  border-radius: 4px;
  background-color: #f4d738 !important;
}
.closebtn:hover {
    box-shadow: 6px 6px 0 #000;
    transform: translate(2px, 2px);
}
.Clickme {
    text-align: center;
    font-size: 30px;
    font-family: 'Changa', sans-serif;
}
.whatcontainer {
    margin-top: 150px;
}

/* Mobile */
@media screen and (max-width: 767px) {
    h2 {
        margin-top: -50px;
        font-size: 6vw !important;
    }

    h1 {
        font-size: 8vw !important;
    }

    div[style*="font-size: 2vw"] {
        font-size: 5vw !important;
    }

    .markbtn {
        font-family: "Lexend Mega", sans-serif;
        font-weight: 900;
        letter-spacing: -2px;
        margin-top: 20px;
        font-size: 10px;
        box-shadow: 4px 4px black;
        background-color: #f4d738;
        border: 2px solid #000;
        cursor: pointer;
        transition: transform 0.1s ease-in-out;
    }

    .markbtn:active {
        box-shadow: 4px 4px black;
        transform: translate(2px, 2px);
    }

    .markbtn:hover {
        animation: brutalBounce 0.5s ease forwards;
        box-shadow: 4px 4px black;
    }

   
    
}

/* Tablets */
@media (min-width: 768px) and (max-width: 1023px) {
    h2 {
        margin-top: -70px;
        font-size: 4vw !important;
    }

    h1 {
        font-size: 7vw !important;
    }

    div[style*="font-size: 2vw"] {
        font-size: 4vw !important;
    }

    .markbtn {
        font-family: "Lexend Mega", sans-serif;
        font-weight: 900;
        letter-spacing: -2px;
        margin-top: 20px;
        font-size: 20px;
        box-shadow: 4px 4px black;
        background-color: #f4d738;
        border: 2px solid #000;
        cursor: pointer;
        transition: transform 0.1s ease-in-out;
    }

    .markbtn:active {
        box-shadow: 4px 4px black;
        transform: translate(2px, 2px);
    }

    .markbtn:hover {
        animation: brutalBounce 0.5s ease forwards;
        box-shadow: 4px 4px black;
    }

    .mainimg {
        height: 500px;
        position: relative;
        top: 80px;
        left: 270px;
        margin-bottom: 30px;
        margin-top: 30px;

    }
}

@media (width: 1440px) {
  h2 {
    margin-top: -60px;
  }
}

.card-container {
  width: 350px;
  background: #ffffff;
  border: 4px solid #000000;
  box-shadow: 8px 8px 0 #000;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 8px 8px 0 #000 !important;
}
.card{
    border: 4px solid black;
    margin-top: 20px;
    height: 500px;
}

.upper-container {
  height: 140px;
  background: #f4d738;
  border-bottom: 4px solid #000;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.image-container {
  width: 150px;
  height: 150px;
  background: #ffffff;
  border: 4px solid #000;
  transform: translateY(50%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border: 2px solid #000;
}

.lower-container {
  padding: 60px 20px 30px;
  text-align: center;
  margin-top: 30px;
}

.lower-container h3 {
  margin: 0;
  font-size: 15px;
  font-weight: bold;
  color: #000;
  font-size: 15px; 
  font-family: 'Changa', sans-serif;
}

.lower-container h4 {
  margin: 5px 0 15px;
  font-size: 14px;
  color: #333;
  font-weight: normal;
  font-family: 'Changa', sans-serif;
}

.lower-container p {
  font-size: 14px;
  color: #000;
  border: 2px solid #000;
  padding: 10px;
  background: #f0f0f0;
  margin-bottom: 20px;
  font-family: 'Changa', sans-serif;
}
</style>
