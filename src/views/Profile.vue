<template>
    <ion-page>
        <ion-header>
            <!-- <ion-toolbar>
                <ion-title> Profile </ion-title>
            </ion-toolbar> -->
            <ion-toolbar>
                <ion-buttons slot="start">
                <ion-back-button default-href="/smartlist"></ion-back-button>
                </ion-buttons>
                <ion-title>Profile</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="content">
            <ion-item class="inner-content">
                <ion-label position="stacked"> Full name </ion-label>
                <ion-input v-model="name" placeholder="Enter full name" ref="input" type="text"></ion-input>

                <ion-label position="stacked"> Email address </ion-label>
                <ion-input v-model="name" placeholder="Enter email address" ref="input" type="text"></ion-input>

                <!-- <ion-label position="stacked">  </ion-label> -->
                <!-- <ion-input v-model="name" placeholder="Enter full name" ref="input" type="text"></ion-input> -->
            </ion-item>
        </ion-content>
        
    </ion-page>
</template>
  
<script lang="js">

import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonButtons,
    IonBackButton,
    IonItem,
    IonInput,
    IonLabel,

} from '@ionic/vue';


export default {
    components: { 
        IonPage, 
        IonHeader, 
        IonToolbar, 
        IonTitle, 
        IonContent, 
        IonButton,
        IonButtons,
        IonBackButton,
        IonItem,
        IonInput,
        IonLabel
    },
    data() {
        return {
            
        };
    },
    
    
};
</script>

<style scoped>

ion-label {
  color: #000000 !important;
}

/* ion-item {
  --background: #fff;
  --min-height: 65px;
  --border-color: transparent;
  width: 100%;
  --border-radius: 25px;
  margin-bottom: 15px;
} */

ion-input.input {
  --color: #000000;
  --placeholder-color: #000000;
  /* margin-left: 10px; */
} 

</style>