<template>
    <ion-menu>
        <ion-header>
            <ion-toolbar>
                <ion-segment @ionChange="currentView" value="share">
                    <ion-segment-button value="share">
                        <ion-label>Share</ion-label>
                    </ion-segment-button>
                    <ion-segment-button value="invitations">
                        <ion-label>Invitations</ion-label>
                    </ion-segment-button>
                </ion-segment>
            </ion-toolbar>


        </ion-header>
        <ion-content class="menu-content">
            <div class="menu-inner-content" v-if="view === 'share'">

                <!-- <ion-card>
                    <ion-card-header>
                        <ion-card-subtitle> An invitation link will be sent to this email address</ion-card-subtitle>
                        <ion-card-title>Share via email</ion-card-title>

                    </ion-card-header>

                    <ion-card-content>
                        <ion-row>
                            <ion-item>
                                <ion-icon class="email" :icon="mail"></ion-icon>
                                <ion-input v-model="email" class="input" placeholder="Email address"></ion-input>
                            </ion-item>
                            <ion-button @click="send()" class="button">
                                Send
                            </ion-button>
                        </ion-row>
                    </ion-card-content>
                </ion-card> -->


                <ion-card>
                    <ion-card-header>
                        <ion-card-subtitle> Anyone with this link will be able to access the list</ion-card-subtitle>
                        <ion-card-title>Share magic link</ion-card-title>

                    </ion-card-header>

                    <ion-card-content>
                        <ion-row>
                            <ion-item>
                                <ion-input ref="link" readonly="true" v-model="link" class="link"
                                    placeholder=""></ion-input>
                            </ion-item>
                        </ion-row>
                    </ion-card-content>
                </ion-card>

                <!-- <ion-card>
                    <ion-card-header>
                        <ion-card-subtitle> Select a social media of your choice </ion-card-subtitle>
                        <ion-card-title>Share via Social Media</ion-card-title>
                        
                    </ion-card-header>

                    <ion-card-content>
                        <ion-row>
                        <ion-item>
                            <ion-input readonly="true" v-model="link" class="link" placeholder=""></ion-input>
                        </ion-item>
                        </ion-row>
                    </ion-card-content>
                    </ion-card> -->

            </div>
        </ion-content>
    </ion-menu>
</template>

<script>

import {
    IonMenu,
    IonHeader,
    IonToolbar,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonContent,
    IonRow,
    IonItem,
    IonIcon,
    IonInput,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonButton
} from '@ionic/vue';
import { mail } from 'ionicons/icons';

export default {
    components: {
        IonMenu,
        IonHeader,
        IonToolbar,
        IonSegment,
        IonSegmentButton,
        IonLabel,
        IonContent,
        IonRow,
        IonItem,
        IonIcon,
        IonInput,
        IonCard,
        IonCardContent,
        IonCardHeader,
        IonCardSubtitle,
        IonCardTitle,
        IonButton
    },
    data() {
        return {
            mail,
            view: 'share',
            email: null,
            link: 'https://smartlista-api.test/api/smartlist/join/0FOWRA'
        }
    },
    methods: {
        currentView(event) {
            console.log(event);
            this.view = event.detail.value;
        },
        send() {
            axios.post('api/smartlist/join/{smartlist}', {
                email: this.email,
            }).then(response => {
                console.log({ response });
            });
        }
    }
}

</script>

<style scoped>
.menu-content {
    --color: black;
    padding: 15px;
    margin: 15px;
    ;
}

ion-card-header {
    padding-top: 10px;
}

ion-card-title {
    color: #000000;
    font-size: 20px;
}

ion-card-subtitle {
    text-transform: initial;
    font-size: 14px;
    margin-top: 5px;
    font-weight: normal;
    color: #000000;
}

ion-card {
    min-height: 100px;
    --background: #fff;
    border: 1px solid #3f3f3f3f;
}

ion-card-content {
    padding: 0 10px 20px 10px;

}

ion-icon {
    font-size: 22px;
}

.email {
    color: rgb(5, 86, 13);
}

ion-item {
    --background: #fff;
    --min-height: 65px;
    --border-color: transparent;
    width: 100%;
    border-radius: 25px;
    border: 1px solid #000000;
}

ion-input.input {
    --color: #000000;
    --placeholder-color: #000000;
    margin-left: 10px;
}

ion-input.link {
    --color: #000000;
}

ion-button.button {
    --background: #032045;
    --color: #fff;
    font-size: 18px;
    width: 40%;
    height: 50px;
    margin-top: 40px;
    align-self: center;
    align-self: center;
    margin: auto;
    margin-top: 20px;
}
</style>