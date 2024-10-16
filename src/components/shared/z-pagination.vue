<script setup lang="ts">
import { Button } from "@/components/ui/button";

import {
  Pagination,
  PaginationEllipsis,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev,
} from "@/components/ui/pagination";
</script>

<template>
  <Pagination
    class="w-full"
    v-slot="{ page }"
    :total="100"
    :sibling-count="1"
    show-edges
    :default-page="1"
  >
    <PaginationList
      v-slot="{ items }"
      class="flex items-center justify-between gap-1 w-full"
    >
      <PaginationPrev
        class="w-[111px] flex items-center gap-x-2 pagination-btn"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8337 7.20321H1.16699M1.16699 7.20321L7.00033 13.0365M1.16699 7.20321L7.00033 1.36987"
            stroke="#344054"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <span class="text-sm">Previous</span>
      </PaginationPrev>

      <div class="flex items-center">
        <template v-for="(item, index) in items">
          <PaginationListItem
            v-if="item.type === 'page'"
            :key="index"
            :value="item.value"
            as-child
          >
            <Button
              class="w-10 h-10 p-0 hover:text-white"
              :class="[
                item.value === page
                  ? 'bg-[#F9FAFB] text-[#1D2939]'
                  : 'bg-transparent text-[#475467]',
              ]"
            >
              {{ item.value }}
            </Button>
          </PaginationListItem>

          <PaginationEllipsis v-else :key="item.type" :index="index" />
        </template>
      </div>

      <PaginationNext class="w-[84px] gap-x-2 pagination-btn">
        <span class="text-sm">Next</span>

        <svg
          width="12"
          height="12"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.16699 7.20321H12.8337M12.8337 7.20321L7.00033 1.36987M12.8337 7.20321L7.00033 13.0365"
            stroke="#344054"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </PaginationNext>
    </PaginationList>
  </Pagination>
</template>

<style>
.pagination-btn {
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
}
</style>
