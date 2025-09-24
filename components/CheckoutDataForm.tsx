"use client";
import React, { useEffect, useState } from "react";
import { paymentMethod } from "@/constant/options";
import ShippingOption from "@/components/custom/ShippingOption";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { orderStore } from "@/lib/zustand/store";
import { Button } from "./ui/button";
import ReviewModal from "./ReviewModal";

const CheckoutDataForm = () => {
  const { setInfo, setConfirmInfo, isConfirmInfo } = orderStore();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    city: "",
    state: "",
    method: "Cash",
  });
  const [open, setIsOpen] = useState(false);

  useEffect(() => {
    setConfirmInfo(false);
  }, [setConfirmInfo]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Ngăn trình duyệt reload trang
    // console.log(formData);
    setIsOpen(true);

    // // Gửi dữ liệu đến API (ví dụ dùng Fetch API)
    // const response = await fetch("/api/submit", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // });

    // const result = await response.json();
    // console.log("Server response:", result);
  };
  return (
    <form className="flex flex-col gap-5 mx-32" onSubmit={handleSubmit}>
      <div>
        <div className="text-2xl font-bold">Checkout</div>
        <Separator />
      </div>
      <div>
        <div className="font-semibold text-sm mb-1">Shipping Information</div>
        <ShippingOption
          data={paymentMethod as [{ name: string; image: string }]}
          paymentType={(item) => setFormData({ ...formData, method: item })}
        />
      </div>
      <div>
        <label htmlFor="fullname" className="font-semibold text-sm">
          Your Name
        </label>
        <Input
          className="mt-1"
          type="text"
          placeholder="Fullname"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="font-semibold text-sm">
          Email address
        </label>
        <Input
          type="email"
          placeholder="Email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phone" className="font-semibold text-sm">
          Phone number
        </label>
        <Input
          placeholder="Phone"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="address" className="font-semibold text-sm">
          Address
        </label>
        <Input
          placeholder="23 Nguyen Kim"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className="flex gap-3 font-semibold text-sm">
        <div>
          <label htmlFor="country">Country</label>
          <Input
            placeholder="Viet Nam"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="city">City</label>
          <Input
            placeholder="Viet Nam"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="state">State</label>
          <Input
            placeholder="Viet Nam"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          required
          onChange={(e) => {
            if (e.target.checked) {
              setConfirmInfo(!isConfirmInfo);
              setInfo(formData);
            }
          }}
        />
        I have read and agree to the Terms and Conditions to my info
      </div>
      {!open && (
        <Button
          className="w-full border h-11 bg-black text-white rounded-lg text-base"
          type="submit"
        >
          Checkout
        </Button>
      )}
      {open && <ReviewModal />}
    </form>
  );
};

export default CheckoutDataForm;
