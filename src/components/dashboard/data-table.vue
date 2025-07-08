<script setup lang="ts" generic="TData, TValue">
import type {
  ColumnDef,
  ColumnFiltersState,
  VisibilityState,
  ExpandedState,
} from "@tanstack/vue-table";

// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu'

// import { valueUpdater } from '@/lib/utils'

// import { ChevronDown } from 'lucide-vue-next'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
import { h, ref } from "vue";

import {
  FlexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
  getExpandedRowModel,
  useVueTable,
} from "@tanstack/vue-table";

// Basic Table
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const props = defineProps<{
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}>();

 

const columnFilters = ref<ColumnFiltersState>([]);
const columnVisibility = ref<VisibilityState>({});
const rowSelection = ref({});
const expanded = ref<ExpandedState>({});

const table = useVueTable({
  get data() {
    return props.data;
  },
  get columns() {
    return props.columns;
  },
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  getExpandedRowModel: getExpandedRowModel(),
  // onColumnFiltersChange: updaterOrValue => valueUpdater(updaterOrValue, columnFilters),
  // onColumnVisibilityChange: updaterOrValue => valueUpdater(updaterOrValue, columnVisibility),
  // onRowSelectionChange: updaterOrValue => valueUpdater(updaterOrValue, rowSelection),
  // onExpandedChange: updaterOrValue => valueUpdater(updaterOrValue, expanded),
  state: {
    get columnFilters() {
      return columnFilters.value;
    },
    get columnVisibility() {
      return columnVisibility.value;
    },
    get rowSelection() {
      return rowSelection.value;
    },
    get expanded() {
      return expanded.value;
    },
  },
});
</script>

<template>
  <div>
    <!-- <div class="flex items-center py-4">

      <Input 
        class="max-w-sm ml-1"
        placeholder="Filter emails..."
        :model-value="table.getColumn('emailAddress')?.getFilterValue() as string"
        @update:model-value="table.getColumn('emailAddress')?.setFilterValue($event)"
      />

      <DropdownMenu>

        <DropdownMenuTrigger as-child>
          <Button variant="outline" class="ml-auto">

            Columns
            <ChevronDown class="w-4 h-4 ml-2" />

          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuCheckboxItem
            v-for="column in table.getAllColumns().filter((column) => column.getCanHide())"
            :key="column.id"
            class="capitalize"
            :checked="column.getIsVisible()"
            @update:checked="(value) => {
              column.toggleVisibility(!!value)
            }"
          >
            {{ column.id }}
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>

      </DropdownMenu>

    </div> -->

    <div>
      <Table>
        <TableHeader class="bg-[#F9FAFB] border-t border-[#E4E7EC]">
          <TableRow
            v-for="headerGroup in table.getHeaderGroups()"
            :key="headerGroup.id"
          >
            <TableHead
              v-for="header in headerGroup.headers"
              :key="header.id"
              class="text-[#475467] h-[44px] "
            >
              <FlexRender
                v-if="!header.isPlaceholder"
                :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <template v-if="table.getRowModel().rows?.length">
            <template v-for="row in table.getRowModel().rows" :key="row.id">
              <TableRow
                :data-state="row.getIsSelected() ? 'selected' : undefined"
              >
                <TableCell v-for="cell in row.getVisibleCells()" :key="cell.id">
                  <FlexRender
                    :render="cell.column.columnDef.cell"
                    :props="cell.getContext()"
                  />
                </TableCell> 
              </TableRow>

              <TableRow v-if="row.getIsExpanded()">
                <TableCell :colspan="row.getAllCells().length">
                  {{ JSON.stringify(row.original) }}
                </TableCell>
              </TableRow>
            </template>
          </template>

          <template v-else>
            <TableRow>
              <TableCell :colspan="columns.length" class="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          </template>
        </TableBody>
      </Table>
    </div>
  </div>
</template>
