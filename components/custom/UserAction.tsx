import React, { memo, useState } from "react";
import ButtonCircle from "./ButtonCircle";
import { Heart, Search } from "lucide-react";
import Cart from "../Cart";
import { motion, AnimatePresence } from "framer-motion";

const UserAction = () => {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <>
      <ButtonCircle handleClick={() => setIsSearch(!isSearch)}>
        <Search className="w-5 h-5" />
      </ButtonCircle>
      <AnimatePresence>
        {isSearch && (
          <motion.div
            // Thuộc tính key là BẮT BUỘC để AnimatePresence hoạt động đúng
            key="search-input"
            className="rounded-full overflow-hidden h-10 flex shadow shadow-slate-400"
            // Trạng thái ban đầu: ẩn và nhỏ
            initial={{ opacity: 0, scale: 0.8 }}
            // Trạng thái khi xuất hiện: hiện ra và phóng to
            animate={{ opacity: 1, scale: 1 }}
            // Trạng thái khi biến mất: ẩn đi và co lại
            exit={{ opacity: 0, scale: 0.8 }}
            // Thời gian chuyển động
            transition={{ duration: 0.4 }}
          >
            <input className="outline-none mx-3" type="text" />
          </motion.div>
        )}
      </AnimatePresence>
      <ButtonCircle>
        <Heart className="w-5 h-5" />
      </ButtonCircle>
      <Cart />
    </>
  );
};

export default memo(UserAction);
