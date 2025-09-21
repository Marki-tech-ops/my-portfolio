<template>
<section> 
  <div class="container">
    <div class="main-box">
      <div class="header">
        <div class="title-wrapper">
          <div class="icon-circle">
            <v-icon size="50">mdi-account-check</v-icon>
          </div>
          <h1>ABOUT ME</h1>
        </div>
      </div>
      <div class="secondary-box">
        <div class="full-width-card">
          <div class="card-header">
            <div class="icon-circle">
                <v-icon size="40">mdi-application-braces</v-icon>
            </div>
            <h2 class="card-title">FULLSTACK AND WEBSITE DEVELOPER</h2>
          </div>

          <br>

          <p>
            As a full-stack developer, I assist clients in resolving system-related issues by creating effective, specially designed solutions.  My specialty is creating systems for estimating and intricate computations, where I guarantee precision, speed, and dependability.  Whether it's adding new features like automatic data collecting, refining calculation logic, or streamlining data management operations, I work closely with clients to understand their needs and make sure any solution I provide efficiently meets their problems.  I build streamlined solutions that not only satisfy technical specifications but also advance their corporate objectives by fusing my expertise in frontend and backend development.
          </p>

          <br>

          <h3><v-icon size="40" class="mr-3">mdi-face-man-profile</v-icon>MY PERSONAL INFORMATION</h3>
          <ul>
            <li>Birthday: September 13, 2002</li>
            <li>Age: 23</li>
            <li>Degree: Bachelor of Science in Information Technology</li>
            <li>Address: Gulod, Munting mapino, Naic, Cavite, Philippines</li>
          </ul>

          <br>

          <h3><v-icon size="40" class="mr-3">mdi-atom</v-icon>MY SKILLS AND EXPERTISE</h3>
          <ul>
            <li>Website Troubleshooting and Maintainance</li>
            <li>Front-end Development (Vue.js, Vuetify, BootStrap, Css, HTML, JavaScript)</li>
            <li>Back-end Development (PHP, Laravel)</li>
            <li>Database Management (Headi, SqlDBX, SQLLite, MySQL)</li>
          </ul>

          <br>

          <h3><v-icon size="40" class="mr-3">mdi-history</v-icon>MY RECENT PROJECTS AND CAPSTONE PROJECT</h3>
          <ul>
            <li>User Website and Administrator Wensite for Manpower Agency (GoldenArrow Head)</li>
            <li>Information and Showcase Website for Construction and Architectural Company (CSPN)</li>
            <li>Augmented Reality base application for Rabies Bite awareness</li>
          </ul>
        </div>
    </div>
</div>
</div>
    </section>

</template>
<script>
export default {
    
}
</script>

<style scoped>

.container {
    margin-top: 30px;
    min-height: 100vh;
    padding: 20px;
}

.main-box {
    background-color: #ffffff;
    border: 4px solid #000000;
    box-shadow: 6px 6px 0 #000000;
    padding: 20px;
    max-width: 900px;
    margin: 0 auto;
}

.header {
    border-bottom: 3px solid #000000;
    padding-bottom: 10px;
    margin-bottom: 20px;
}

.title-wrapper {
    display: flex;
    align-items: center;
    gap: 10px; /* Chunky spacing */
}

h1 {
    font-size: 3rem;
    font-weight: bold;
    color: #000000;
    text-transform: uppercase; /* Brutalist typography */
    font-family: 'Changa', sans-serif;
}

.full-width-card {
    background-color: #ffffff;
    border: 3px solid #000000;
    box-shadow: 4px 4px 0 #000000;
    padding: 15px;
}


.card-header {
    display: flex;
    align-items: center;
    gap: 10px;
    border-bottom: 2px solid #000000;
    padding-bottom: 10px;
    margin-bottom: 15px;
}

h2.card-title {
    font-size: 2rem;
    font-weight: bold;
    color: #000000;
    text-transform: uppercase;
    font-family: 'Changa', sans-serif;
}


h3 {
    font-size: 1.7rem;
    font-weight: bold;
    color: #000000;
    margin: 15px 0 10px;
    text-transform: uppercase;
    font-family: 'Changa', sans-serif;
}

p {
    font-size: 1.1rem;
    color: #000000;
    line-height: 1.5;
    margin-bottom: 10px;
    font-family: 'Changa', sans-serif;
}

ul {
    list-style: none;
    margin-left: 20px;
    font-family: 'Changa', sans-serif;
}

ul li {
    font-size: 1.1rem;
    color: #000000;
    position: relative;
    margin-bottom: 8px;
    font-family: 'Changa', sans-serif;
}

ul li:before {
    content: "■"; 
    color: #000000;
    font-size: 1.2rem;
    position: absolute;
    left: -20px;
    top: 0;
}

</style>