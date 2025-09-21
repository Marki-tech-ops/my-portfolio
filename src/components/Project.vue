<template>
  <section>
  <p class="heading">My Recent Projects</p>
  <div class="gallery-image">
    <div
      class="img-box"
      v-for="(image, index) in images"
      :key="index"
      @click="openImage(image.src)"
    >
      <img :src="image.src" :alt="image.title" />
      <div class="transparent-box">
        <div class="caption">
          <p>{{ image.title }}</p>
          <p class="opacity-low">{{ image.description }}</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal Viewer -->
  <div v-if="showModal" class="modal" @click="closeImage">
    <img :src="modalSrc" class="modal-content" />
  </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
const modalSrc = ref('')

function openImage(src) {
  modalSrc.value = src
  showModal.value = true
}

function closeImage() {
  showModal.value = false
}

const images = [
  {
    src: '/src/assets/Screenshot 2025-09-05 225005.png',
    title: 'Goldenarrow Head',
    description: 'Manpower Agency Website',
  },
  {
    src: '/src/assets/Screenshot 2025-09-20 110851.png',
    title: 'Goldenarrow Head',
    description: 'Manpower Agency Website',
  },
  {
    src: '/src/assets/Screenshot 2025-09-20 000122.png',
    title: 'Goldenarrow Head',
    description: 'Manpower Agency Website',
  },
  {
    src: '/src/assets/Screenshot 2025-09-05 225327.png',
    title: 'CSPN',
    description: 'Construction and Architecture Website',
  },
  {
    src: '/src/assets/Screenshot 2025-09-05 225448.png',
    title: 'CSPN',
    description: 'Construction and Architecture Website',
  },
  {
    src: '/src/assets/Screenshot 2025-09-19 235703.png',
    title: 'CSPN',
    description: 'Construction and Architecture Website',
  },
]
</script>

<style scoped>
.heading {
  text-align: center;
  font-weight: 600;
  font-size: 40px;
  letter-spacing: 1px;
  padding: 10px;
  color: rgb(14, 1, 1);
  font-family: 'Changa', sans-serif;
  margin-top: 19px;
  margin-bottom: -30px;
}

.gallery-image {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.gallery-image img {
  height: 250px;
  width: 350px;
  transform: scale(1.0);
  transition: transform 0.4s ease;
}

.img-box {
  box-sizing: content-box;
  margin: 10px;
  height: 250px;
  width: 350px;
  overflow: hidden;
  display: inline-block;
  color: white;
  position: relative;
  background-color: white;
  border: 4px solid #000;
  box-shadow: 8px 8px 0 #000;
  transition: all 0.2s ease;
}

.img-box:hover {
  box-shadow: 6px 6px 0 #000;
  transform: translate(2px, 2px);
}

.caption {
  position: absolute;
  bottom: 5px;
  left: 20px;
  opacity: 0.0;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.transparent-box {
  height: 250px;
  width: 350px;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  top: 0;
  left: 0;
  transition: background-color 0.3s ease;
}

.img-box:hover img {
  transform: scale(1.1);
}

.img-box:hover .transparent-box {
  background-color: rgba(0, 0, 0, 0.5);
}

.img-box:hover .caption {
  transform: translateY(-20px);
  opacity: 1.0;
}

.img-box:hover {
  cursor: pointer;
}

.caption > p:nth-child(2) {
  font-size: 0.8em;
}

.opacity-low {
  opacity: 0.5;
}

/* Modal Styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  max-width: 80%;
  max-height: 80%;
  border: 4px solid #000;
  box-shadow: 8px 8px 0 #000;
  margin-top: 50px;
}
</style>
