import { h } from "vue";
import type { ColumnDef } from "@tanstack/vue-table";
import type { Shipping } from "@/services";

import { Checkbox } from "../ui/checkbox";
import DropdownAction from "@/components/dashboard/data-table-dropdown.vue";

const statusMap = {
  delivered: "border border-[#F1FFEC] bg-[#F0F9F3] text-[#17B26A]",
  pending: "border border-[#FFF8EC] bg-[#F9F2E5] text-[#DCAD0D]",
  failed: "border border-[#FFECEC] bg-[#FFDCDC] text-[#DC4242]",
  shipping: "border border-[#ECFAFF] bg-[#DCF3FF] text-[#4284DC]",
};

type TStatusMap = "delivered" | "pending" | "failed" | "shipping";

export const columns: ColumnDef<Shipping>[] = [
  {
    id: "select",
    header: ({ table }) =>
      h(Checkbox, {
        checked: table.getIsAllPageRowsSelected(),
        "onUpdate:checked": (value: boolean) =>
          table.toggleAllPageRowsSelected(!!value),
        ariaLabel: "Select all",
        class: "border border-[#D0D5DD] rounded-[6px] shrink-0 ml-[6px]",
      }),
    cell: ({ row }) =>
      h(Checkbox, {
        checked: row.getIsSelected(),
        "onUpdate:checked": (value: boolean) => row.toggleSelected(!!value),
        ariaLabel: "Select row",
        class: "border border-[#D0D5DD] rounded-[6px] shrink-0 ml-[6px]",
      }),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "orderId",
    header: () =>
      h(
        "div",
        { class: "text-left text-[#475467] font-medium text-xs" },
        "Order ID"
      ),
    cell: (data) => {
      return h(
        "div",
        { class: "text-[#475467] text-sm" },
        data.getValue() as any
      );
    },

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
    accessorKey: "name",
    header: () =>
      h(
        "div",
        { class: "text-left text-[#475467] font-medium text-xs" },
        "Name"
      ),
    cell: (data) => {
      return h(
        "div",
        { class: "text-[#475467] text-sm" },
        data.getValue() as any
      );
    },
  },
  {
    accessorKey: "emailAddress",
    header: () =>
      h(
        "div",
        { class: "text-left text-[#475467] font-medium text-xs" },
        "Email Address"
      ),
    cell: (data) => {
      return h(
        "div",
        { class: "text-[#475467] text-sm" },
        data.getValue() as any
      );
    },
  },
  {
    accessorKey: "category",
    header: () =>
      h(
        "div",
        { class: "text-left text-[#475467] font-medium text-xs" },
        "Category"
      ),
    cell: (data) => {
      return h(
        "div",
        { class: "text-[#475467] text-sm" },
        data.getValue() as any
      );
    },
  },
  {
    accessorKey: "weight",
    header: () =>
      h(
        "div",
        { class: "text-left text-[#475467] font-medium text-xs" },
        "Weight"
      ),
    cell: (data) => {
      return h(
        "div",
        { class: "text-[#475467] text-sm" },
        data.getValue() as any
      );
    },
  },
  {
    accessorKey: "fee",
    header: () =>
      h(
        "div",
        { class: "text-left text-[#475467] font-medium text-xs" },
        "Fee"
      ),
    cell: (data) => {
      return h(
        "div",
        { class: "text-[#475467] text-sm" },
        `₦ ${(data.getValue() as any).toLocaleString()}`
      );
    },
  },
  {
    accessorKey: "status",
    header: () =>
      h(
        "div",
        { class: "text-left text-[#475467] font-medium text-xs" },
        "Status"
      ),
    cell: (data) => {
      return h(
        "span",
        {
          class: `text-[#475467] text-xs h-[30px] flex items-center justify-center rounded-[6px] font-medium w-[77px] ${
            statusMap[(data.getValue() as TStatusMap).toLowerCase()]
          }`,
        },
        data.getValue() as any
      );
    },
  },
  {
    accessorKey: "date",
    header: () =>
      h(
        "div",
        { class: "text-left text-[#475467] font-medium text-xs" },
        "Date"
      ),
    cell: (data) => {
      return h(
        "div",
        { class: "text-[#475467] text-sm" },
        data.getValue() as any
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const shipping = row.original;

      return h(
        "div",
        { class: "relative" },
        h(DropdownAction, {
          shipping,
          onExpand: row.toggleExpanded,
        })
      );
    },
  },
];
