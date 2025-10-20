<script lang="ts" setup>
import {computed, ref} from 'vue'
import {useI18n} from 'vue-i18n'
import {toast} from 'vue-sonner'
import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import 'remixicon/fonts/remixicon.css'
import Altcha from "./Altcha.vue"

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
})

const {t} = useI18n()
const userId = ref('')
const password = ref('')
const altchaPayload = ref('')

const isFormValid = computed(() => {
  return userId.value.trim() && password.value.trim() && altchaPayload.value
})

const isFormEmpty = computed(() => {
  return userId.value && password.value
})

function handleFormSubmit(e: Event) {
  e.preventDefault()

  if (!userId.value.trim()) {
    toast.error(t('login.userIdRequired'))
    return
  }

  if (!password.value.trim()) {
    toast.error(t('login.passwordRequired'))
    return
  }

  if (!altchaPayload.value) {
    toast.error(t('login.altchaRequired'))
    return
  }

  console.log("表单提交:", {userId: userId.value, password: password.value})
  // 添加实际的登录逻辑
}

function handleWechatLogin() {
  console.log("微信登录")
  // 添加微信登录逻辑
}
</script>

<template>
  <div :class="cn('flex flex-col gap-6', props.class)">
    <Card>
      <CardHeader class="text-center">
        <CardTitle class="text-xl">{{ t('login.welcome') }}</CardTitle>
      </CardHeader>
      <CardContent>
        <form @submit="handleFormSubmit">
          <div class="grid gap-6">
            <div class="grid gap-4">
              <Label for="userId">{{ t('login.userId') }}</Label>
              <Input id="userId" v-model="userId" :placeholder="t('login.userIdPlaceholder')" required type="text"/>
            </div>
            <div class="grid gap-4">
              <div class="flex items-center">
                <Label for="password">{{ t('login.password') }}</Label>
                <a class="ml-auto text-sm underline-offset-4 hover:underline" href="#">
                  {{ t('login.forgotPassword') }}
                </a>
              </div>
              <Input id="password" v-model="password" :placeholder="t('login.passwordPlaceholder')" required type="password"/>
            </div>
            <ClientOnly class="grid gap-4">
              <Altcha v-model:payload="altchaPayload" />
            </ClientOnly>
            <div class="grid gap-4">
              <Button :disabled="!isFormEmpty" :variant="isFormValid ? 'default' : 'secondary'" type="submit">
                {{ t('login.login') }}
              </Button>
              <div class="relative my-2">
                <div class="absolute inset-0 flex items-center">
                  <span class="w-full border-t"/>
                </div>
                <div class="relative flex justify-center text-xs uppercase">
                  <span class="bg-background px-2 text-muted-foreground">
                    {{ t('login.loginWith3rdParty') }}
                  </span>
                </div>
              </div>
              <Button class="mb-2" type="button" variant="outline" @click="handleWechatLogin">
                <i class="ri-wechat-line ri-lg"></i>
                {{ t('login.loginWithWeixin') }}
              </Button>
              <p class="text-center text-sm text-muted-foreground">
                {{ t('login.dontHaveAccount') }}
                <a class="underline underline-offset-4 hover:underline" href="#">
                  {{ t('login.signUp') }}
                </a>
              </p>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
    <p class="px-6 text-center text-sm text-muted-foreground">
      {{ t('login.agreeToTerms') }}
      <a class="underline underline-offset-4 hover:underline" href="#">
        {{ t('login.termsOfService') }}
      </a>
      {{ t('login.and') }}
      <a class="underline underline-offset-4 hover:underline" href="#">
        {{ t('login.privacyPolicy') }}
      </a>
    </p>
  </div>
</template>

