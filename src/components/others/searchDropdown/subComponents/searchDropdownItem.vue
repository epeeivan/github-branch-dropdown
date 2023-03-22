<script setup>
import Icons from '../../../icons.vue';
import { ref } from 'vue';
const props = defineProps({
    active:Boolean,
    value:String

})
const isActive = (props.active)? ref(true):ref(false);
function activeItem(){
    let activeItem = document.querySelector(".itemActive");
    activeItem?activeItem.click():null;
    if (this.isActive == true) {
        this.isActive = false;
    } else {
        this.isActive = true
    }
}
</script>
<template>
    <div :class="['p-2 rounded flex space-x-2',isActive?'bg-blue-500/[0.2] itemActive':'']" @click="activeItem(), $emit('selectSearchedDropdownOption',{value:props.value})">
        <Icons name="Check" size="15" :class="['my-auto',isActive?'text-blue-500':'text-white']"/>
        <span>
           {{ value }}
        </span>
    </div>
</template>