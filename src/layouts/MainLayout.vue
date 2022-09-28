<template>
  <div class="flex flex-wrap text-gray-500 dark:text-gray-400">
    <Sidebar />
    <!-- side bar test-->

    <!-- side bar test-->

    <div
      class="w-full bg-gray-200 dark:bg-gray-900 pl-0 lg:pl-64 min-h-screen"
      id="main-content"
    >
      <Navbar />

      <div class="min-h p-6 bg-gray-200 dark:bg-gray-900">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style scoped>
.min-h {
  min-height: calc(100% - 8rem);
}
</style>

<script>
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
export default {
  name: "Dashboard",
  components: {
    Sidebar,
    Navbar,
  },
};
</script>
