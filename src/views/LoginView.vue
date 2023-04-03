<script setup>
import { ref } from "vue";
import { useHeroStore } from "../stores/hero";
import { storeToRefs } from "pinia";
import router from "../router";
const store = useHeroStore()
const { setNickname } = useHeroStore()
const { nickname } = storeToRefs(store)
const valid = ref('')

const nick = ref('')
const form = ref(null)

const rules = [
    value => !!value || 'Required.',
    value => (value && value.length >= 3) || 'Min 3 characters',
    value => (value && value.length <= 15) || 'Max 15 characters'
]



const nicknameConfirm = async (nick) => {
    valid.value = await form.value.validate()
    console.log(valid.value.valid)
    if (valid.value.valid === true) {
        setNickname(nick)
        router.push('/')
    } 
}
</script>

<template>
    <v-sheet width="300" class="mx-auto mt-15">
        <v-form ref="form" @submit.prevent @keyup.enter="nicknameConfirm(nick)">
            <v-text-field v-model="nick" :rules="rules" label="Nickname"></v-text-field>
            <v-btn @click="nicknameConfirm(nick)" type="submit" block class="mt-2">Submit</v-btn>
        </v-form>
    </v-sheet>
</template>