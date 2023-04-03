<script setup>
import { ref } from "vue";
import { useHeroStore } from "../stores/hero";
import { storeToRefs } from "pinia";
import router from "../router";
const store = useHeroStore()
const {setNickname} = useHeroStore()
const { nickname } = storeToRefs(store)

const nick = ref('')
const validation = ref('')

const rules = [
    value => !!value || 'Required.',
    value => (value && value.length >= 3) || 'Min 3 characters',
    value => (value && value.length <= 15) || 'Max 15 characters'
]

const nicknameConfirm = (val) => {
    setNickname(val)
    router.push('/')
}
</script>

<template>
    <v-card  v-if="!nickname" class="mx-auto d-flex flex-column justify-center align-center text-center mt-15 rounded-lg" width="300"
        height="250" variant="outlined">
        <v-card-item>
            <div>
                <div class="text-h6 mb-1">
                    Set Your Nickname
                </div>
            </div>
            <v-text-field label="Nickname" v-model="nick" :rules="rules"
                hide-details="auto"></v-text-field>
        </v-card-item>

        <v-card-actions>
            <v-btn @click="nicknameConfirm(nick)" variant="outlined">
                Play
            </v-btn>
        </v-card-actions>
    </v-card>
</template>