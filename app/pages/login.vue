<script lang="ts" setup>
import LoginForm from "@/components/LoginForm.vue"
import {useColorMode} from "#imports"
import {ref, watch} from 'vue'

definePageMeta({
  layout: 'other',
})

const colorMode = useColorMode()
const logoSrc = ref('/LogoColorBlack.png')

watch(
    () => colorMode.value,
    (newMode) => {
      if (newMode === 'dark') {
        logoSrc.value = '/LogoColorWhite.png'
      } else {
        logoSrc.value = '/LogoColorBlack.png'
      }
    },
    {immediate: true}
)
</script>

<template>
  <div class="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
    <div class="flex w-full max-w-sm flex-col gap-6">
      <div class="flex items-center gap-2 self-center font-medium">
        <div
            :style="{ backgroundImage: `url('${logoSrc}')` }"
            class="flex h-16 w-48 items-center justify-center bg-contain bg-no-repeat bg-center"
        >
        </div>
      </div>
      <LoginForm/>
    </div>
  </div>
</template>

