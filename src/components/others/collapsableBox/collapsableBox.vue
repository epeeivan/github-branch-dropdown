<script setup>
import { ref } from "vue";
import icons from "../../icons.vue";
import CollapsableBoxItem from "./subComponents/collapsableBoxItem.vue";
import TextIcon from "./subComponents/textIcon.vue";
const isOpen = ref(true);

function handleBox() {
    if (this.isOpen == true) {
        this.isOpen = false;
    } else {
        this.isOpen = true
    }
}
</script>
<template>
    <div class="rounded p-2 bg-slate-200 space-y-5">
        <!-- header  -->
        <div class="flex space-x-2">
            <!-- icon -->
            <button class="mr-auto" @click="handleBox()">
                <TextIcon icon="ChevronDown" v-if="isOpen"><span class="font-bold">Open</span></TextIcon>
                <TextIcon icon="ChevronUp" v-if="!isOpen"><span class="font-bold">Close</span></TextIcon>
            </button>
            <!-- options -->
            <div>
                <button class="rounded p-1 border-[1px] bg-white">
                    <icons name="Plus" size="15"/>
                </button>
            </div>
        </div>
        <!-- body -->
        <div class="space-y-2 max-h-[400px] overflow-y-auto" v-if="isOpen">
            <CollapsableBoxItem 
            title="Utilisation des attributs PHP8"
            badge="feature"
            date="Mar 7"
            id-tag="22"
            />
        </div>
    </div>
</template>