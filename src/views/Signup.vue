<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-grid>
        <ion-avatar>

        </ion-avatar>
        <ion-text>
          <h1> Sign up </h1>
        </ion-text>
      </ion-grid>
      <ion-grid class="input-details">

        <ion-row>
          <ion-item>
            <ion-icon class="name" :icon="person"></ion-icon>
            <ion-input v-model="name" class="input" placeholder="Full name"></ion-input>
          </ion-item>
        </ion-row>
        <ion-row>
          <ion-item>
            <ion-icon class="email" :icon="mail"></ion-icon>
            <ion-input v-model="email" class="input" placeholder="Email address"></ion-input>
          </ion-item>
        </ion-row>
        <ion-row>
          <ion-item>
            <ion-icon class="lock" :icon="lockOpen"></ion-icon>
            <ion-input v-model="password" type="password" class="input" placeholder="Password"></ion-input>
          </ion-item>
        </ion-row>

        <ion-button class="button" @click="signup">
          Sign up
        </ion-button>
        <span class="text"> Already have an account?
          <a href="/login"> Log in</a>
        </span>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
    
<script lang="ts">
import {
  IonAvatar,
  IonItem,
  IonRow,
  IonText,
  IonGrid,
  IonInput,
  IonIcon,
  IonPage,
  IonHeader,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/vue';

import { person, mail, lockOpen } from 'ionicons/icons';

import { defineComponent } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: {
    IonAvatar,
    IonGrid,
    IonText,
    IonTitle,
    IonHeader,
    IonIcon,
    IonInput,
    IonItem,
    IonRow,
    IonPage,
    IonContent,
    IonButton
  },

  setup() {
    const router = useRouter();
    return { person, mail, lockOpen, router }
  },
  data() {
    return {
      email: 'heyabredda@gmail.com',
      password: 'password',
      device_name: 'iPhone 13 Pro',
      name: "Heyab"
    }
  },
  methods: {
    signup() {
      axios.post('api/register', {
        name: this.name,
        email: this.email,
        password: this.password,
        device_name: this.device_name
      }).then(response => {
        console.log(response.data);
        if (response.status == 200) {
          // Go to next page
          this.router.push("/smarlist");
        }
      });
    }
  }
});

</script>
  
<style scoped>
ion-avatar {
  height: 160px;
  width: 160px;
}

h1 {
  color: #000000;
}

ion-grid {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  --background: #000000;
}

ion-content {
  --min-height: 700px;
}

ion-row {
  width: 100%;
}

ion-icon {
  font-size: 22px;
}

.name {
  color: rgb(0, 208, 227);
}

.email {
  color: rgb(5, 79, 86);
}

.lock {
  color: rgb(245, 151, 35);
}

ion-item {
  --background: #fff;
  --min-height: 65px;
  --border-color: transparent;
  width: 100%;
  --border-radius: 25px;
  margin-bottom: 15px;
}

ion-input.input {
  --color: #000000;
  --placeholder-color: #000000;
  margin-left: 10px;
}

ion-button.button {
  --background: #032045;
  --border-radius: 25px;
  --color: #fff;
  font-size: 18px;
  width: 100%;
  height: 65px;
  margin-top: 40px;
}

.text {
  color: #000000;
  margin-top: 5px;
}

a {
  color: #3f3f3f !important;
}
</style>