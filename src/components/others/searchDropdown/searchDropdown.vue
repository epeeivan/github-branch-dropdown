<script setup>
import { ref } from "vue";
import Icons from "../../icons.vue";
import SearchDropdownhandlerButton from "./subComponents/searchDropdownhandlerButton.vue";
import SearchDropdownItem from "./subComponents/searchDropdownItem.vue";


const isOpen = ref(true);
const isFoscus = ref(true);
const isSearchFound = ref(false);
const selectedValue = ref("main");
const searchInput = ref("seachInput");
// fakedatas
let items = [{ name: "main", active: true }, { name: "develop", active: false }]
const searchItems = [];
/**
 * 
 */
function handleDropdown() {
    if (this.isOpen == true) {
        this.isOpen = false;
    } else {
        this.isOpen = true
    }
}
/**
 * 
 */
function search() {
    // 
    let searchedValue = searchInput.value.value;
    this.searchItems = [];
    this.isSearchFound = false;
    //
    if (searchedValue != "") {
        items.forEach(item => {
            if (item.name.split(searchedValue).length > 1) {
                this.searchItems.push(item);
                this.isSearchFound = true;
            }
        });
        console.log(this.searchItems)
    }
}
/**
 * 
 * @param {*} event 
 */
function setSelectedValue(event) {
    this.selectedValue = event.value
}
</script>
<template>
    <div class="relative">
        <SearchDropdownhandlerButton @click="handleDropdown()" :is-open="isOpen">{{ selectedValue }}
        </SearchDropdownhandlerButton>
        <!-- dropmenu -->
        <div class="absolute block bg-white border-[1px] border-slate-500 mt-2 rounded" v-if="isOpen">
            <!-- header -->
            <div class="p-2 py-3">
                <h1 class="font-bold">Select a git version</h1>
            </div>
            <!-- search item -->
            <div :class="['flex px-2 rounded', isFoscus ? 'border-2 border-blue-400 ' : '']">
                <div class="flex text-slate-500">
                    <Icons name="Search" size="15" class="my-auto" />
                </div>
                <div>
                    <input type="text" ref="searchInput" @keyup="search()" class="outline-none focus:outline-none p-2"
                        placeholder="Search for a git version">
                </div>
            </div>
            <!-- branches / ites -->
            <div>
                <!-- title -->
                <div class="p-2">
                    <h1 class="font-bold">Branches</h1>
                </div>
                <!-- options -->
                <div class="p-2" v-if="!isSearchFound">
                    <SearchDropdownItem v-for="(item, index) in items" :key="index" :value="item.name" :active="item.active"
                        @selectSearchedDropdownOption="setSelectedValue($event)" />
                </div>
                <!-- options when search -->
                <div class="p-2" v-else>
                    <SearchDropdownItem v-for="(item, index) in searchItems" :key="index" :value="item.name" :active="item.active" @selectSearchedDropdownOption="setSelectedValue($event)" />
                </div>
            </div>
        </div>
    </div>
</template>