<script setup>
import { ref } from 'vue';

import { onMounted } from 'vue';
import CollapsableBox from './components/others/collapsableBox/collapsableBox.vue';
import SearchDropdown from './components/others/searchDropdown/searchDropdown.vue';


</script >
<template>
  <div class="p-5">
    <SearchDropdown/>
  </div>
  <div class="flex p-5">
    <CollapsableBox/>
  </div>
</template>

