import { h } from "vue"
import type { ColumnDef } from "@tanstack/vue-table"
import type { Shipping } from "@/services"

import { Checkbox } from "../ui/checkbox"
import DropdownAction from '@/components/dashboard/data-table-dropdown.vue'

export const columns: ColumnDef<Shipping>[] = [
  {
    id: 'select',
    header: ({ table }) => h(Checkbox, {
      'checked': table.getIsAllPageRowsSelected(),
      'onUpdate:checked': (value: boolean) => table.toggleAllPageRowsSelected(!!value),
      'ariaLabel': 'Select all',
    }),
    cell: ({ row }) => h(Checkbox, {
      'checked': row.getIsSelected(),
      'onUpdate:checked': (value: boolean) => row.toggleSelected(!!value),
      'ariaLabel': 'Select row'
    }),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'orderId',
    header: () => h('div', { class: 'text-left' }, 'Order ID'),
    // cell: ({ row }) => {
    //   const amount = Number.parseFloat(row.getValue('amount'))
    //   const formatted = new Intl.NumberFormat('en-US', {
    //     style: 'currency',
    //     currency: 'USD',
    //   }).format(amount)

    //   return h('div', { class: 'text-right font-medium' }, formatted)
    // },
  },
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Status'),
  },
  {
    accessorKey: 'emailAddress',
    // header: () => h('div', { class: 'text-right' }, 'Amount'),
  },
  {
    accessorKey: 'category',
    // header: () => h('div', { class: 'text-right' }, 'Amount'),
  },
  {
    accessorKey: 'weight',
    // header: () => h('div', { class: 'text-right' }, 'Amount'),
  },
  {
    accessorKey: 'fee',
    // header: () => h('div', { class: 'text-right' }, 'Amount'),
  },
  {
    accessorKey: 'status',
    // header: () => h('div', { class: 'text-right' }, 'Amount'),
  },
  {
    accessorKey: 'date',
    // header: () => h('div', { class: 'text-right' }, 'Amount'),
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const shipping = row.original

      return h('div', { class: 'relative' }, h(DropdownAction, { 
        shipping, 
        onExpand: row.toggleExpanded,
      }))
    },
  },
]