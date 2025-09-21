<template>
  <section>
    <!-- Contact Container -->
    <v-row>
        <v-col>
                <div class="contact-section-contact">
                <h3 class="contact-section-heading">My Contact Information</h3>
                <form action="#">
                    <label class="contact-label">My Gmail</label>
                    <div class="contact-input"><v-icon size="25" class="mr-3">mdi-card-account-mail</v-icon>Corsigamarkchristian@gmail.com</div>

                    <label class="contact-label">My Phone Number</label>
                    <div class="contact-input"> <v-icon size="25" class="mr-3">mdi-cellphone-check</v-icon>+639501391767</div>

                    <label class="contact-label">My Address</label>
                    <div class="contact-input"><v-icon size="25" class="mr-3">mdi-map-marker</v-icon>Gulod Munting Mapino, Naic, Cavite, Philippines</div>
                </form>
                </div>
        </v-col>
    </v-row>
  </section>  
</template>


<script>
 
</script>

<style scoped>
.contact-section-contact {
  background-color: #fdfdfd;
  border: 4px solid #000;
  padding: 30px;
  box-shadow: 10px 10px 0 #000;
  max-width: 600px;
  width: 100%;
    position: relative;
    left: 450px;
    top: 60px;
    height: 100%;
}


.contact-section-heading {
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  border-bottom: 4px solid #000;
  display: inline-block;
  margin-bottom: 30px;
  font-family: 'Changa', sans-serif;
}

.contact-label {
  font-weight: bold;
  display: block;
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 25px;
  font-family: 'Changa', sans-serif;
}

.contact-input {
  width: 100%;
  padding: 14px;
  font-size: 20px;
  border: 3px solid #000;
  background-color: #f4d738;
  font-family: 'Changa', sans-serif;
  margin-bottom: 20px;
  resize: vertical;
  box-shadow: 8px 8px 0 #000;
 transition: all 0.2s ease;
}

.contact-input:hover {
  box-shadow: 6px 6px 0 #000;
    transform: translate(2px, 2px);
}

@media screen and (max-width: 767px) {

  .contact-section-contact {
    position: relative;
    left: 30px;
    top: 50px;
    width: 80%;
    height: 100%;
  }
  .contact-input {
    font-size: 10px;
  }
  .contact-label {
    font-size: 18px;
  }
  .contact-section-heading {
    font-size: 20px;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
    .contact-section-contact {
     position: relative;
     top: 50px;
     left: 70px;
     margin-bottom: -30px;
     align-items: center;
    }
}
@media (min-width: 1024px) and (max-width: 1440px){

.contact-section-contact {
  position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 75%;
    margin-top: 30px;
}
.contact-label {
  margin-top: -5px;
}
}

@media (min-width: 2560px) {
  .contact-section-contact {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 40%;
  }
}

</style>