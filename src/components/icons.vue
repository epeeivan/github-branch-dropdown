<script setup>
import { AlertCircle } from 'lucide-vue-next';
import { AlertOctagon } from 'lucide-vue-next';
import { AlertTriangle } from 'lucide-vue-next';
import { LogOut } from 'lucide-vue-next';
import { Minus } from 'lucide-vue-next';
import { Home } from 'lucide-vue-next';
import { Box } from 'lucide-vue-next';
import { ChevronDown } from 'lucide-vue-next';
import { ChevronUp } from 'lucide-vue-next';
import { ChevronLeft } from 'lucide-vue-next';
import { ChevronRight } from 'lucide-vue-next';
import { LineChart } from 'lucide-vue-next';
import { Info } from 'lucide-vue-next';
import { MoreHorizontal } from 'lucide-vue-next';
import { MoreVertical } from 'lucide-vue-next';
import { Edit } from 'lucide-vue-next';
import { Trash } from 'lucide-vue-next';
import { Eye } from 'lucide-vue-next';
import { LayoutTemplate } from 'lucide-vue-next';
import { Search } from 'lucide-vue-next';
import { ref } from 'vue';
import { Phone } from 'lucide-vue-next';
import { MessageCircle } from 'lucide-vue-next';
import { MessageSquare } from 'lucide-vue-next';
import { Calendar } from 'lucide-vue-next';
import { File } from 'lucide-vue-next';
import { User } from 'lucide-vue-next';
import { Percent } from 'lucide-vue-next';
import { Banknote } from 'lucide-vue-next';
import { Headphones } from 'lucide-vue-next';
import { AlignLeft } from 'lucide-vue-next';
import { X } from 'lucide-vue-next';
import { Lock } from 'lucide-vue-next';
import { Check } from 'lucide-vue-next';
import { EyeOff } from 'lucide-vue-next';
import { Mail } from 'lucide-vue-next';
import { Plus } from 'lucide-vue-next';

const props = defineProps({
    name: String,
    size: Number,
    color: String,
    strokeWidth: String,
    defaultClass: String,
})

function name() {
    return props.name
}


</script>
<template>
    <div class="flex">
        <AlertCircle v-if="props.name == 'AlertCircle'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <AlertOctagon v-if="props.name == 'AlertOctagon'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <AlertTriangle v-if="props.name == 'AlertTriangle'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <LogOut v-if="props.name == 'LogOut'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <Minus v-if="props.name == 'Minus'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <Home v-if="props.name == 'Home'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <Box v-if="props.name == 'Box'" :size="props.size ?? 19" :color="props.color" :stroke-width="props.strokeWidth ?? 2"
            :default-class="props.defaultClass" />
        <ChevronDown v-if="props.name == 'ChevronDown'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <ChevronLeft v-if="props.name == 'ChevronLeft'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <ChevronRight v-if="props.name == 'ChevronRight'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <ChevronUp v-if="props.name == 'ChevronUp'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <LineChart v-if="props.name == 'LineChart'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <Info v-if="props.name == 'Info'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <MoreHorizontal v-if="props.name == 'MoreHorizontal'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <MoreVertical v-if="props.name == 'MoreVertical'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <Edit v-if="props.name == 'Edit'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <Trash v-if="props.name == 'Trash'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <Eye v-if="props.name == 'Eye'" :size="props.size ?? 19" :color="props.color" :stroke-width="props.strokeWidth ?? 2"
            :default-class="props.defaultClass" />
        <LayoutTemplate v-if="props.name == 'LayoutTemplate'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <Search v-if="props.name == 'Search'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <Phone v-if="props.name == 'Phone'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <MessageCircle v-if="props.name == 'MessageCircle'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <MessageSquare v-if="props.name == 'MessageSquare'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <Calendar v-if="props.name == 'Calendar'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <File v-if="props.name == 'File'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <User v-if="props.name == 'User'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <Percent v-if="props.name == 'Percent'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <Banknote v-if="props.name == 'Banknote'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <Headphones v-if="props.name == 'Headphones'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <AlignLeft v-if="props.name == 'AlignLeft'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <X v-if="props.name == 'X'" :size="props.size ?? 19" :color="props.color" :stroke-width="props.strokeWidth ?? 2"
            :default-class="props.defaultClass" />
        <Lock v-if="props.name == 'Lock'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <Check v-if="props.name == 'Check'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <EyeOff v-if="props.name == 'EyeOff'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <Mail v-if="props.name == 'Mail'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
        <Plus v-if="props.name == 'Plus'" :size="props.size ?? 19" :color="props.color"
            :stroke-width="props.strokeWidth ?? 2" :default-class="props.defaultClass" />
    </div>
</template>