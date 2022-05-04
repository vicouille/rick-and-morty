<template>
  <section>
    <div class="characters">
      <div class="characters_item" v-for="character in characters" :key="character.id">
<!--        <h2>Caracteres</h2>-->
  <CardCharacter  :character="character"/>
      </div>
    </div>
  </section>
</template>

<script>
import CardCharacter from '@/components/CardCharacter'

import {onMounted, computed} from "vue"
import { useStore } from 'vuex'






export default {

  components: {
  CardCharacter
  },
  setup(){
    const store = useStore()
    const characters = computed(() =>{
      return store.state.charactersFilter
    })
    onMounted(()=> {
      store.dispatch('getCharacters')
        })
    return {
      characters
    }
  }
}
</script>
<style>
.characters {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin: 3rem 0;

}

</style>