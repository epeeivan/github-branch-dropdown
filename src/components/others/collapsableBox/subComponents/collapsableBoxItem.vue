
<script setup>
import textIcon from "../subComponents/textIcon.vue";
const props = defineProps({
    title: String,
    badge: String,
    idTag: String,
    date: String,
    profileImage: String,
})
</script>
<template>
    <div class="rounded p-3 space-y-3 bg-white">
        <!-- title -->
        <h1 class="font-bold capitalize">{{ title }}</h1>
        <!-- badge,date,id and image Box -->
        <div class="space-y-2">
            <!-- badge -->
            <span class="px-2 bg-green-500 text-white rounded-full">{{ badge }}</span>
            <!-- date,id and image Box -->
            <div class="flex">
                <!-- id And Date Box -->
                <div class="flex space-x-2 mr-auto">
                    <textIcon icon="Box" class="text-slate-600">#{{ idTag }}</textIcon>
                    <textIcon icon="Calendar" class="text-red-700">{{ date }}</textIcon>
                </div>
                <!-- image box -->
                <div>
                    <img v-if="props.profileImage" :src="profileImage" class="w-[35px] h-[35px]" alt="">
                </div>
            </div>
        </div>
    </div>
</template>