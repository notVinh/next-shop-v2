"use client";
import React from "react";
import { motion } from "framer-motion";

const HeaderSection = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }} // Bắt đầu từ ngoài màn hình bên trái
      animate={{ x: 0, opacity: 1 }} // Dịch chuyển vào vị trí bình thường
      exit={{ x: -100, opacity: 0 }} // Khi rời khỏi cũng trượt sang trái
      transition={{ duration: 1 }} // Thời gian chuyển động
      //   viewport={{ once: true }} // Chỉ chạy một lần khi vào viewport
      whileInView={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center gap-3"
    >
      <div className="uppercase font-bold text-4xl underline">{title}</div>
      <div className="text-center text-gray-500">{desc}</div>
    </motion.div>
  );
};

export default HeaderSection;
