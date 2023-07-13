<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-grid>
        <ion-avatar>
        </ion-avatar>
        <ion-text>
          <h1> Log in </h1>
        </ion-text>
      </ion-grid>
      <ion-grid class="input-details">

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

        <ion-button @click="login" class="button">
          Log in
        </ion-button>

        <span class="text"> Not registered yet?
          <a href="/signup"> Sign up</a>
        </span>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>
  
<script lang="js">
import { IonAvatar, IonItem, IonRow, IonText, IonGrid, IonInput, IonIcon, IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/vue';
import { mail, lockOpen } from 'ionicons/icons';
import { defineComponent } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';
import { Storage } from '@ionic/storage';

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
    const store = new Storage();
    store.create();
    return { mail, lockOpen, router, store }
  },
  data() {
    return {
      email: null,
      password: null,
      device_name: 'iPhone 13 Pro',
      token: null
    }
  },
  methods: {
    login() {
      axios.post('api/login', {
        email: this.email,
        password: this.password,
        device_name: this.device_name
      }).then(response => {
        console.log({ response });
        this.token = response.data;
        this.router.push("/smarlist");
        // Set authorization token
        this.setToken();
      }).catch(err => {
      });
    },
    async setToken() {
      await this.store.set('authorization_token', this.token);
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

.email {
  color: rgb(5, 86, 13);
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