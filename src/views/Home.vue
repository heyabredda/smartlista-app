<template>
    <ion-page>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="list" href="/card-list">
            <ion-icon :icon="listOutline"></ion-icon>
            <ion-label>My list</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="create" href="/profile">
            <ion-icon :icon="personOutline" />
            <ion-label>Profile</ion-label>
          </ion-tab-button>
  
        </ion-tab-bar>
      </ion-tabs>
    </ion-page>
  </template>
  
  <script lang="ts">
    import { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon } from '@ionic/vue';
  
    import { listOutline, bulbOutline, addOutline, personOutline } from 'ionicons/icons';
  
    export default {
      components: { IonPage, IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonLabel, IonIcon },
      data() {
        return {
          listOutline,
          bulbOutline,
          personOutline,
        };
      },
    };
  </script>