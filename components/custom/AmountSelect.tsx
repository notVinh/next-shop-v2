import React, { memo } from "react";
import { Button } from "@/components/ui/button";

interface AmountSelectProps {
  onAmountChange: (amount: number) => void;
  initialAmount?: number;
}

const AmountSelect: React.FC<AmountSelectProps> = ({
  onAmountChange,
  initialAmount,
}) => {
  const [amount, setAmount] = React.useState(initialAmount || 1);

  const handleAmountChange = (newAmount: number) => {
    setAmount(newAmount);
    onAmountChange(newAmount);
  };

  return (
    <div className="flex items-center rounded-full border w-32 justify-around h-10">
      <Button
        className="bg-black bg-transparent hover:bg-transparent"
        variant={"ghost"}
        onClick={() => {
          if (amount > 1) {
            handleAmountChange(amount - 1);
          }
        }}
      >
        -
      </Button>
      <div>{amount}</div>
      <Button
        className="bg-black bg-transparent hover:bg-transparent"
        variant={"ghost"}
        onClick={() => handleAmountChange(amount + 1)}
      >
        +
      </Button>
    </div>
  );
};

export default memo(AmountSelect);
