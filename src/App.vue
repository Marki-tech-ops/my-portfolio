<template>
    <v-app>
        <v-app-bar
            class="text-black transparent-gray-bar"
            >
            <v-app-bar-nav-icon
            v-if="smAndDown"
            @click.stop="drawer = !drawer"
            temporary
            >
            </v-app-bar-nav-icon>

            <!-- SOCIAL -->
             <v-toolbar-title>
             <div class="d-md-flex ml-2">
             <h2 class="socialh2 text-black ml-3 mt-1 mr-1" v-if="mdAndUp">Follow Me <v-icon>mdi-minus</v-icon></h2>
              <div class="mt-1 mr-3 mb-2">
              <a href="https://www.facebook.com/markchristian.corsiga.1702/">
                <v-icon class="facebook-link mr-2" size="40" color="primary">mdi-facebook</v-icon>
              </a>
             
              <a href="https://www.instagram.com/mochuzilla/">
                <v-icon class="facebook-link" color="primary" size="40">mdi-instagram</v-icon>
              </a>
               </div>
            </div>
            </v-toolbar-title>
            
            <div class="d-none d-md-flex mr-9 nav">
            <v-btn 
            v-for="(item, i) in items"
            :key="i"
            :to="item.path"
            variant="text"
            class="text-black nav-btn mr-4 navbtn"
            active-class="navbtn"
           style="font-size: 15px; font-family: 'Changa', sans-serif;"
            >
              {{ item.title }}
            </v-btn>
            </div>
        </v-app-bar>

        <v-navigation-drawer
      v-model="drawer"
      temporary
      class="d-md-none mt-7"
      style="background-color: rgba(51, 51, 51, 0.6); backdrop-filter: blur(6px); font-family: 'Changa', sans-serif;">
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.path"
          @click="drawer = false"
        >
          <v-list-item-title class="text-white">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      </v-navigation-drawer>

        <v-main>
          <transition name="fade" mode="out-in">
          <router-view></router-view>
          </transition>
        </v-main>
    </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { useDisplay } from 'vuetify';

const { xs, sm, md, lg, xl, mdAndUp, smAndDown } = useDisplay();

const drawer = ref(false);


const items = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/About' },
  { title: 'Projects', path: '/Project' },
  { title: 'Contact', path: '/Contact' }
];


</script>

<style>
.v-navigation-drawer {
  z-index: 1000;
}
.transparent-gray-bar {
  background-color: rgba(51, 51, 51, 0.253) !important; /* semi-transparent gray */
  backdrop-filter: blur(1px) !important; /* frosted glass effect */
  border-bottom: 1px solid rgba(255, 255, 255, 0) !important; /* optional subtle border */
  height: 90px;
  padding-top: 16px;
  padding-bottom: 16px;
}
.nav-btn.router-link-active,
.nav-btn.router-link-exact-active,
.nav-btn.no-active {
  color: inherit !important;
  box-shadow: none !important;
  border: none !important;
}
.facebook-link:hover {
  transform: scale(1.2);
  transition: all 0.5s ease;
}
.facebook-link {
  transition: transform 0.5s ease, color 0.5s ease;
  text-shadow: 2px 2px black;
}
.socialh2 {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: 600;
  font-family: 'Changa', sans-serif;
}
.navbtn {
 border: 4px solid #000 !important;
  box-shadow: 8px 8px 0 #000;
  transition: all 0.2s ease;
  background-color: #f4d738 !important;
} 

.navbtn:hover {
  box-shadow: 6px 6px 0 #000;
  transform: translate(2px, 2px);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
