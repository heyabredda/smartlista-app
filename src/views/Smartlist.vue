<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-title>Your list</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="content">
            <div class="card-container" v-if="smartlist.length">
                <span class="outer-card-title"> Most recent </span>
                
                <div v-for="card in smartlist" :key="card.id">
                    <ion-card class="latest" button="true" :router-link="'/smartlist/' + card.id">
                        <ion-card-header>
                            <ion-card-title> {{ card.name }}</ion-card-title>
                            <!-- <ion-card-subtitle>Last updated: 2 minutes ago</ion-card-subtitle> -->
                        </ion-card-header>

                        <ion-card-content v-if="card.description">
                            {{ card.description }}
                        </ion-card-content>

                        <!-- <ion-button size="small" fill="clear">
                            <ion-icon slot="icon-only" :icon="trash"></ion-icon>
                        </ion-button> -->

                    </ion-card>
                </div>
            </div>

            <div v-else>
                <h1 class="no"> No lists available </h1>
            </div>

        </ion-content>
        <ion-fab vertical="bottom" horizontal="end" slot="fixed">
            <ion-fab-button id="open-modal">
            <ion-icon :icon="add"></ion-icon>
            </ion-fab-button>
        </ion-fab>

        <NewList @emittedListDetails="createNewList" trigger="open-modal"/>
    </ion-page>
</template>
  
<script lang="js">

import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonIcon,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonCard,
    IonText,
    IonFab,
    IonFabButton
} from '@ionic/vue';
import { trash, add, refresh } from 'ionicons/icons';
import axios from 'axios';
import NewList from "../components/NewList.vue";
import { useRouter } from 'vue-router';
import { Storage } from '@ionic/storage';

export default {
    components: { 
        IonPage, 
        IonHeader, 
        IonToolbar, 
        IonTitle, 
        IonContent, 
        IonList, 
        IonIcon, 
        IonCardHeader, 
        IonCardTitle, 
        IonCardSubtitle, 
        IonCardContent, 
        IonButton, 
        IonCard, 
        IonText,
        IonFab, 
        IonFabButton,
        NewList
    },
    data() {
        return {
            trash,
            add,
            refresh,
            router: useRouter(),
            smartlist: []
        };
    },
    beforeMount() {
        this.getSmartlist();
    },
    methods: {
        getSmartlist() {
            axios.get('/api/smartlist')
            .then(response => {
                this.smartlist = response.data;
            });
        },
        createNewList(name) {
            axios.post('/api/smartlist', {
                name: name
            }).then(response => {
                this.getSmartlist();
                // Redirect to smartlist page after creation
                this.router.push("/smartlist/" + response.data.id);
            });
        }
    }
};
</script>

<style scoped>
.card-container {
    margin-top: 10px;
    margin-bottom: 0;
}

ion-card-header {
    padding: 0;
}

ion-card-title {
    color: #000000;
}

ion-card {
    padding: 10px;
    min-height: 80px;
    --background: #f3f3f3;
    border: 1px solid #3f3f3f;
}

ion-card-title {
    font-size: 22px;
}

ion-card-content {
    padding: 0;
    margin-top: 5px;
}

.outer-card-title {
    color: #000000;
    padding-left: 20px;
    font-size: 24px;
}

h1 {
    color: #000000;
    padding-left: 20px;
    font-size: 24px;
    text-align: center;
}

ion-button {
    color: #fff;
}
</style>