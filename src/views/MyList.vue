<template>
    <ion-page>
        <!-- Invitation menu  -->
        <InvitationMenu content-id="main-content"> </InvitationMenu>

        <ion-page id="main-content">
            <ion-header>
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-back-button default-href="/smarlist"></ion-back-button>
                    </ion-buttons>

                    <ion-title v-if="smartlist"> {{ smartlist.name }}</ion-title>

                    <ion-buttons slot="end">
                        <ion-menu-button>
                            <ion-icon :icon="cogOutline"></ion-icon>
                        </ion-menu-button>
                    </ion-buttons>

                </ion-toolbar>

                <ion-toolbar class="toolbar-search">
                    <ion-searchbar autocomplete="true" autocorrect="true" type="search" @change="itemAdded($event)"
                        animated="true" placeholder="Search">
                    </ion-searchbar>
                </ion-toolbar>
            </ion-header>
            <ion-content class="content">
                <ion-list :inset="true">
                    <div v-if="smartlist && smartlist.items.length > 0">
                        <span class="items-count"> Total items: {{ smartlist.items.length }} </span>
                        <div v-for="(item, index) in smartlist.items" :key="index">
                            <ion-item-sliding ref="slider" @ionSwipe="deleteItem(index, item)">
                                <ion-item>
                                    <ion-checkbox @ionChange="checkboxEvent($event, item)" :checked="item.checked"
                                        justify="start" labelPlacement="end">
                                        {{ item.name }}
                                    </ion-checkbox>
                                </ion-item>
                                <ion-item-options>
                                    <ion-icon class="trash" slot="icon-only" :icon="trash"></ion-icon>
                                </ion-item-options>
                            </ion-item-sliding>
                        </div>

                    </div>
                    <h1 v-else> Add some items </h1>
                </ion-list>
            </ion-content>
        </ion-page>
    </ion-page>
</template>
  
<script lang="js">
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSearchbar,
    IonList,
    IonItem,
    IonCheckbox,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    IonButtons,
    IonButton,
    IonBackButton,
    IonMenuButton,
    IonLabel,
} from '@ionic/vue';
import { searchCircle, trash, cogOutline } from 'ionicons/icons';
import { useRoute } from 'vue-router';
import axios from 'axios';
import InvitationMenu from "../components/InvitationMenu.vue";

export default {
    components: {
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,
        IonContent,
        IonSearchbar,
        IonList,
        IonItem,
        IonCheckbox,
        IonItemSliding,
        IonItemOptions,
        IonItemOption,
        IonIcon,
        IonButtons,
        IonButton,
        IonBackButton,
        IonMenuButton,
        IonLabel,
        InvitationMenu
    },
    data() {
        return {
            searchCircle,
            trash,
            cogOutline,
            items: [],
            search: null,
            id: null,
            smartlist: null
        };
    },
    beforeMount() {
        const route = useRoute();
        this.id = route.params.id;
        this.getItems();
    },
    methods: {
        getItems() {
            axios.get('/api/smartlist/' + this.id)
                .then(response => {
                    this.smartlist = response.data;
                });
        },
        itemAdded(event) {
            // Get text and make it lowercase
            let query = event.target.value.toLowerCase();

            // Capitalize first letter
            query = query.charAt(0).toUpperCase() + query.slice(1);
            if (query !== '') {
                if (this.smartlist.items.includes(query) === false) {
                    // Add new item to the list
                    this.updateList(query, false);
                }
            }
            // Clear searchbar after submission
            event.target.value = null;
        },
        deleteItem(i, itemDetails) {
            axios.patch('/api/smartlist/' + this.id, {
                item_id: itemDetails.id,
                action: 'delete'
            }).then(response => {
                // Update list
                this.smartlist.items = response.data;
            })
        },
        checkboxEvent(event, item) {
            // Update item status
            this.updateList(item.name, event.detail.checked);
        },
        updateList(itemName, itemStatus) {
            axios.patch('/api/smartlist/' + this.id, {
                name: itemName,
                checked: itemStatus
            }).then(response => {
                // Update list
                this.smartlist.items = response.data;
            })
        }
    }
};
</script>

<style scoped>
.toolbar-search {
    padding-top: 10px;
}

h1 {
    color: #000000;
    text-align: center;
}

.items-count {
    color: #000000;
    font-weight: 700;
}

.trash {
    background-color: #3f3f3f;
    width: 25px;
    height: 70%;
    align-self: center;
}

ion-checkbox {
    color: #000000;
    --checkbox-background: #fff;
}

ion-checkbox {
    --size: 22px;
}

ion-checkbox::part(container) {
    border: 1px solid #000000;
}
</style>