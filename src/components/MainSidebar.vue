<template>
  <div class="h-screen flex">
    <!-- Sidebar -->
    <aside
      :class="[
        'bg-white border-r border-gray-200 transition-all duration-300 ease-in-out overflow-hidden',
        isCollapsed ? 'w-20' : 'w-64',
      ]"
      @mouseenter="toggleCollapse(false)"
      @mouseleave="toggleCollapse(true)"
      role="navigation"
      aria-label="Main Sidebar"
    >
      <div class="flex flex-col h-full">
        <!-- Logo and Brand -->
        <div
          class="flex items-center justify-center h-20 border-b border-gray-200"
        >
          <img
            src="https://th.bing.com/th/id/OIG3.HSn5qRO14Dg74D0k3h18?pid=ImgGn"
            alt="Hiwar Logo"
            class="h-10 w-10 rounded-full"
          />
          <span
            v-if="!isCollapsed"
            class="ml-3 text-xl font-semibold text-gray-800"
            >Hiwar</span
          >
        </div>

        <!-- Navigation Menu -->
        <nav class="flex-grow py-6">
          <ul class="space-y-1 px-3">
            <li v-for="item in menuItems" :key="item.name">
              <a
                :href="item.link"
                :class="[
                  'flex items-center py-2 px-3 rounded-lg transition-colors duration-200',
                  item.isActive
                    ? 'bg-primary bg-opacity-10 text-primary'
                    : 'text-gray-600 hover:bg-gray-100',
                  isCollapsed ? 'justify-center' : 'justify-start',
                ]"
                @click="setActive(item.name)"
                role="menuitem"
                :aria-current="item.isActive ? 'page' : null"
              >
                <component :is="item.icon" class="w-6 h-6" />
                <span v-if="!isCollapsed" class="ml-3 text-sm font-medium">
                  {{ item.name }}
                </span>
              </a>
            </li>
          </ul>
        </nav>

        <!-- User Profile -->
        <div class="p-4 border-t border-gray-200">
          <div class="flex items-center">
            <img
              src="https://xsgames.co/randomusers/avatar.php?g=male"
              alt="User Avatar"
              class="w-8 h-8 rounded-full"
            />
            <div v-if="!isCollapsed" class="ml-3">
              <p class="text-sm font-medium text-gray-700">John Doe</p>
              <p class="text-xs text-gray-500">john@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  HomeIcon,
  ChartBarIcon,
  EnvelopeIcon,
  UserIcon,
  Cog6ToothIcon,
} from "@heroicons/vue/24/outline";

export default {
  setup() {
    const isCollapsed = ref(false);
    const menuItems = ref([
      { name: "Dashboard", icon: HomeIcon, link: "#", isActive: true },
      { name: "Analytics", icon: ChartBarIcon, link: "#", isActive: false },
      { name: "Messages", icon: EnvelopeIcon, link: "#", isActive: false },
      { name: "Profile", icon: UserIcon, link: "#", isActive: false },
      { name: "Settings", icon: Cog6ToothIcon, link: "#", isActive: false },
    ]);

    const toggleCollapse = (collapse) => {
      isCollapsed.value = collapse;
    };

    const setActive = (name) => {
      menuItems.value.forEach((item) => {
        item.isActive = item.name === name;
      });
    };

    return {
      isCollapsed,
      menuItems,
      toggleCollapse,
      setActive,
    };
  },
};
</script>
