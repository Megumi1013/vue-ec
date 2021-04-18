<template>
  <div
    class="sidebar rounded-xl py-3 px-8 min-h-screen shadow-lg text-gray-500 hidden md:block"
  >
    <ul class="text-left">
      <li class="p-4 text-3xl"><router-link to="/top">LOGO</router-link></li>
      <li class="p-4 sidebar-link">
        <router-link to="/dashboard" class="block flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z"
              clip-rule="evenodd"
            />
          </svg>
          商品</router-link
        >
      </li>
      <li class="p-4 sidebar-link">
        <router-link to="/dashboard/reviews" class="block flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
          レビュー</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script language="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "DashboardSidebar",
  props: {},
});
</script>

<style scoped>
.sidebar {
  background: linear-gradient(135deg, #8ac6d1, #beebe9);
  color: #ffffff;
  font-weight: bold;
  margin: 2.6rem 0 2.6rem 2.6rem;
  width: 260px;
}
.sidebar-link {
  @apply duration-700;
}
</style>
