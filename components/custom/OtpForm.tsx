import React, { useEffect } from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { verifyAccount } from "@/services/queries/userQueries";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const OtpForm = ({ email }: { email: string }) => {
  const router = useRouter();
  const [otp, setOtp] = React.useState("");
  useEffect(() => {
    // let isMounted = true;
    let timer: NodeJS.Timeout;
    if (otp.length === 6) {
      timer = setTimeout(async () => {
        const response = await verifyAccount({ email, otp });
        if (response && response.success) {
          router.push("/");
          toast.success("Xác thực thành công! Bạn sẽ được đưa đến trang chủ.");
        } else {
          toast.error(response.msg || "Xác thực thất bại! Vui lòng thử lại.");
        }
      }, 500);
    }

    return () => {
      // isMounted = false;
      clearTimeout(timer);
    };
  }, [otp, email, router]);
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-50 bg-black bg-opacity-80 text-text ">
      <div className="w-72 h-72 bg-white absolute m-auto inset-0 flex flex-col justify-between items-center rounded-lg p-5">
        <div className="w-full flex flex-col items-center justify-center">
          <div className="text-xl font-semibold mb-4 ">Enter OTP</div>
          <div className="  mb-4">
            Code is sent to <span className="font-semibold">{email}</span>{" "}
          </div>
        </div>

        <InputOTP maxLength={6} value={otp} onChange={setOtp}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>

        <div className="w-full flex flex-col items-center justify-center">
          <div className=" mb-4">
            {`Didn't receive the code? `}
            <span className="text-orange-500 cursor-pointer underline">
              Resend
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpForm;
