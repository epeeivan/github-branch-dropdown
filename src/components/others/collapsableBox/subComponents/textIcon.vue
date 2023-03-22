<script setup>
import icons from '../../../icons.vue';
const props = defineProps({
    icon: String
})
</script>
<template>
    <div :class='[props.icon?"space-x-2 flex":""]'>
        
        <icons v-if="props.icon" :name="icon" size="15" class="my-auto" />
        <slot/>
    </div>
</template>