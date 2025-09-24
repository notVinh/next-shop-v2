import { CartItemPropTypes } from "./type";

export const paymentMethod = [
  { name: "Cash", image: "/icons/producticon.png" },
  { name: "Momo", image: "/icons/momoicon.png" },
  { name: "Paypal", image: "/icons/paypalicon.png" },
];

export const adminItemSidebar = [
  { name: "Dashboard", icon: "/icons/dashboard.png", url: "/admin/dashboard" },
  { name: "Product", icon: "/icons/product.png", url: "/admin/product" },
  { name: "Order", icon: "/icons/order.png", url: "/admin/order" },
  { name: "Customer", icon: "/icons/customer.png", url: "/admin/customer" },
  { name: "Staff", icon: "/icons/staff.png", url: "/admin/staff" },
  { name: "Discount", icon: "/icons/discount2.png", url: "/admin/discount" },
  { name: "Timesheet", icon: "/icons/timesheet.png", url: "/admin/timesheet" },
  { name: "Test", icon: "/icons/timesheet.png", url: "/admin/test" },
  // { name: "Payroll", icon: "/icons/menu.png" },
  // { name: "Circular", icon: "/icons/menu.png" },
  // { name: "Maintance", icon: "/icons/menu.png" },
  // { name: "Logictics", icon: "/icons/menu.png" },
  // { name: "Office budget", icon: "/icons/menu.png" },
  // { name: "Stock and Inventory", icon: "/icons/menu.png" },
  // { name: "Nofication", icon: "/icons/menu.png" },
  // { name: "Capacity building", icon: "/icons/menu.png" },
  // { name: "Procurement", icon: "/icons/menu.png" },
];

export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(amount);
};

export const generateColor = (color: string) => {
  switch (color) {
    case "red":
      return "bg-red-500";
    case "blue":
      return "bg-blue-500";
    case "green":
      return "bg-green-500";
    case "yellow":
      return "bg-yellow-500";
    case "purple":
      return "bg-purple-500";
    default:
      return "bg-gray-500";
  }
};

export const getSum = (items: CartItemPropTypes[]) => {
  return items.reduce(
    (sum, item) => sum + (item?.price ?? 0) * (item?.amount ?? 0),
    0
  );
};

export const adviceTax = {
  shipTax: 15000,
  discount: 10,
};
