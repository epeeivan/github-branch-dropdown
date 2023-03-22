<script setup>
import { ref } from 'vue';
import Icons from '../../../icons.vue';
const props = defineProps({
    isOpen:Boolean,
})

</script>
<template>
    <button class="border-[1px] border-slate-500 rounded px-3 py-2 bg-white flex">
        <span class="block">
            <slot/>
        </span>
        <div class="flex">
            <Icons name="ChevronDown" size="15" v-if="props.isOpen" class="my-auto"/>
            <Icons name="ChevronUp" size="15" v-if="!props.isOpen" class="my-auto"/>
        </div>
    </button>
</template>