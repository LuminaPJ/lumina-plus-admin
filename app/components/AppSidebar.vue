<script lang="ts" setup>
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from '@/components/ui/collapsible'
import {
  Calendar,
  ChevronRight,
  ChevronsUpDown,
  Home,
  Inbox,
  Landmark,
  ListTodo,
  Moon,
  Search,
  Sun,
  Zap
} from 'lucide-vue-next'
import {process} from "std-env";

const {locales, t} = useI18n()
const colorMode = useColorMode()

const placeholderItems = [{
  title: t("main.function.home"), url: '#', icon: Home,
}, {
  title: t("main.function.activity"), url: '#', icon: Inbox,
}, {
  title: t("main.function.todo"), url: '#', icon: Calendar,
}, {
  title: t("main.function.institution"), url: '#', icon: Search,
}]

const getThemeI18n = () => {
  switch (colorMode.preference) {
    case 'light':
      return t("theme.lightMode")
    case 'dark':
      return t("theme.darkMode")
    case 'system':
      return t("theme.system")
    default:
      return t("theme.lightMode")
  }
}
</script>

<template>
  <Sidebar collapsible="icon">
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton as-child size="lg">
            <div>
              <div
                  class="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                <div class="size-5 bg-center bg-contain bg-no-repeat"
                     style="background-image: url('/LuminaLOGO.svg')"/>
              </div>
              <div class="flex flex-col gap-0.5 leading-none">
                <span class="font-medium">{{ process.env.SITE_NAME }}</span>
                <span class="text-xs">{{ process.env.SITE_ORG }}</span>
              </div>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton as-child>
              <a href="#">
                <Home class="w-4 h-4"/>
                <span>{{ t("main.function.home") }}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          <Collapsible as-child class="group/collapsible" default-open>
            <SidebarMenuItem>
              <CollapsibleTrigger as-child>
                <SidebarMenuButton :tooltip="t('main.function.activity')">
                  <Zap class="w-4 h-4"/>
                  <span>{{ t("main.function.activity") }}</span>
                  <ChevronRight
                      class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"/>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuSubItem v-for="subItem in placeholderItems" :key="subItem.title">
                    <SidebarMenuSubButton as-child>
                      <a :href="subItem.url">
                        <span>占位</span>
                      </a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarMenu>
        <SidebarMenu>
          <Collapsible as-child class="group/collapsible" default-open>
            <SidebarMenuItem>
              <CollapsibleTrigger as-child>
                <SidebarMenuButton :tooltip="t('main.function.todo')">
                  <ListTodo class="w-4 h-4"/>
                  <span>{{ t("main.function.todo") }}</span>
                  <ChevronRight
                      class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"/>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuSubItem v-for="subItem in placeholderItems" :key="subItem.title">
                    <SidebarMenuSubButton as-child>
                      <a :href="subItem.url">
                        <span>占位</span>
                      </a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarMenu>
        <SidebarMenu>
          <Collapsible as-child class="group/collapsible" default-open>
            <SidebarMenuItem>
              <CollapsibleTrigger as-child>
                <SidebarMenuButton :tooltip="t('main.function.institution')">
                  <Landmark class="w-4 h-4"/>
                  <span>{{ t("main.function.institution") }}</span>
                  <ChevronRight
                      class="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"/>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  <SidebarMenuSubItem v-for="subItem in placeholderItems" :key="subItem.title">
                    <SidebarMenuSubButton as-child>
                      <a :href="subItem.url">
                        <span>占位</span>
                      </a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <SidebarMenuButton>
                <Sun
                    class="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"/>
                <Moon
                    class="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"/>
                {{ getThemeI18n() }}
                <ChevronsUpDown class="ml-auto"/>
              </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="w-[--radix-popper-anchor-width]" side="right">
              <DropdownMenuLabel>{{ t("theme.toggle") }}</DropdownMenuLabel>
              <DropdownMenuSeparator/>
              <DropdownMenuCheckboxItem :model-value="colorMode.preference === 'light'"
                                        @click="colorMode.preference ='light'">
                {{ t("theme.light") }}
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem :model-value="colorMode.preference === 'dark'"
                                        @click="colorMode.preference='dark'">
                {{ t("theme.dark") }}
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem :model-value="colorMode.preference === 'system'"
                                        @click="colorMode.preference='system'">
                {{ t("theme.system") }}
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  </Sidebar>
</template>