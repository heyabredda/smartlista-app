<template>
  <ion-modal ref="modal" trigger="open-modal">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="cancel()">Cancel</ion-button>
        </ion-buttons>
        <ion-title>New list</ion-title>
        <ion-buttons slot="end">
          <ion-button :strong="true" @click="confirm()">Confirm</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen="true">
      <ion-item class="inner-content">
        <ion-label position="stacked">Enter your list name</ion-label>
        <ion-input v-model="name" placeholder="Name" ref="input" type="text"></ion-input>
      </ion-item>
    </ion-content>
  </ion-modal>
</template>
  
<script lang="js">
import {
  IonButtons,
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonItem,
  IonInput,
  IonLabel,
} from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonInput,
    IonLabel,
  },
  data() {
    return {
      name: null
    };
  },
  methods: {
    cancel() {
      this.$refs.modal.$el.dismiss(null, 'cancel');
    },
    confirm() {
      this.$refs.modal.$el.dismiss(null, 'confirm');
      this.$emit('emittedListDetails', this.name);
      this.name = null;
    },
  },
});
</script>

<style scoped>
ion-label {
  color: #000000 !important;
}

ion-input {
  color: #000000;
}

ion-content>>>* {
  height: 100%;
}

.inner-content {
  background-color: #fff;
}
</style>