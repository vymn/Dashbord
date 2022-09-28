<template>
  <div class="z-30 lg:w-64 fixed md:top-0 md:left-12 h-screen bg-gray-100">
    <aside class="py-16 px-10 w-full border-r-2 border-gray-300">
      <img src="@/assets/logo.png" alt="" class="mb-24 w-28" />
      <ul class="inline-flex flex-col w-64 pt-8 gap-y-6 font-mono">
        <!-- hover test -->

        <!-- hover test -->

        <li class="flex flex-row">
          <router-link
            active-class="text-yellow-300"
            to="/home"
            class="flex gap-x-4 items-center w-full py-2 font-bold hover:text-yellow-300"
          >
            <svg
              class="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 4H5.5C4.67157 4 4 4.67157 4 5.5V9.5C4 10.3284 4.67157 11 5.5 11H9.5C10.3284 11 11 10.3284 11 9.5V5.5C11 4.67157 10.3284 4 9.5 4Z"
                fill="currentColor"
              />
              <path
                opacity="0.3"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.5 13H9.5C10.3284 13 11 13.6716 11 14.5V18.5C11 19.3284 10.3284 20 9.5 20H5.5C4.67157 20 4 19.3284 4 18.5V14.5C4 13.6716 4.67157 13 5.5 13ZM14.5 4H18.5C19.3284 4 20 4.67157 20 5.5V9.5C20 10.3284 19.3284 11 18.5 11H14.5C13.6716 11 13 10.3284 13 9.5V5.5C13 4.67157 13.6716 4 14.5 4ZM14.5 13H18.5C19.3284 13 20 13.6716 20 14.5V18.5C20 19.3284 19.3284 20 18.5 20H14.5C13.6716 20 13 19.3284 13 18.5V14.5C13 13.6716 13.6716 13 14.5 13Z"
                fill="currentColor"
              />
            </svg>
            <span>Dashboard</span>
            <span
              class="absolute w-1 h-10 bg-yellow-300 rounded-r right-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out"
            />
          </router-link>
        </li>
        <li class="flex flex-row">
          <router-link
            active-class="text-yellow-300"
            to="/Procurement"
            class="flex gap-x-4 items-center w-full py-2 font-bold text-gray-500 hover:text-yellow-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
              />
            </svg>

            <span>Procurement</span>
          </router-link>
          <span
            class="absolute w-1 h-10 text-transparent rounded right-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out"
          />
        </li>
        <li class="flex flex-row">
          <router-link
            to="/"
            class="flex gap-x-4 items-center w-full py-2 font-bold text-gray-500 hover:text-yellow-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z"
              />
            </svg>

            <span>Invoices Center </span>
          </router-link>
          <span
            class="absolute w-1 h-10 text-transparent rounded right-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out"
          />
        </li>
        <li class="flex flex-row">
          <router-link
            to="/"
            class="flex gap-x-4 items-center w-full py-2 font-bold text-gray-500 hover:text-yellow-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
              />
            </svg>

            <span>Recriving Center </span>
          </router-link>
          <span
            class="absolute w-1 h-10 text-transparent rounded right-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out"
          />
        </li>
        <li class="flex flex-row">
          <router-link
            to="/"
            class="flex gap-x-4 items-center w-full py-2 font-bold text-gray-500 hover:text-yellow-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
              />
            </svg>

            <span>Users Mangement </span>
          </router-link>
          <span
            class="absolute w-1 h-10 text-transparent rounded right-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out"
          />
        </li>
        <li class="flex flex-row">
          <router-link
            to="/"
            class="flex gap-x-4 items-center w-full py-2 font-bold text-gray-500 hover:text-yellow-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>

            <span>Suplier Mangment</span>
          </router-link>
          <span
            class="absolute w-1 h-10 text-transparent rounded right-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out"
          />
        </li>
      </ul>
    </aside>
  </div>
</template>

<style scoped></style>

<script>
import OverviewIcon from "@/assets/overview.svg";
export default {
  OverviewIcon,
};
</script>
