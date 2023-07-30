<template>
    <ion-page>
        Test
    </ion-page>
</template>


<script lang="js">
import {
    IonPage
} from '@ionic/vue';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';

export default {
    components: {
        IonPage
    },
    data() {
        return {

        }
    },

    mounted() {
        let id = null;
        let code = null;
        const router = useRouter();
        const route = useRoute();

        id = route.params.id;
        code = route.params.code;

        if (code) {
            axios.post('/api/smartlist/' + id + '/join', {
                code: code
            }).then(response => {
                console.log({ response });
                router.push('/smartlist');
            });
        }
    }
}
</script>