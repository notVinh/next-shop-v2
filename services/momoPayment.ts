//https://developers.momo.vn/#/docs/en/aiov2/?id=payment-method
//parameters

import axios from "axios";
import crypto from "crypto";

const getMomoUrl = async (preamount: string, preuri: string) => {
  const partnerCode = "MOMO6BDX20220706";
  const accessKey = "cJns9JaAzSmfS2pk";
  const secretkey = "9YDn6vLbaZI2w1wpZe5DtaJWRBQ0cJqQ";
  const requestId = partnerCode + new Date().getTime();
  const orderId = requestId;
  const orderInfo = "Checkout with MoMo";
  const redirectUrl = preuri || "https://momo.vn/return";
  const ipnUrl = "https://callback.url/notify";
  // const ipnUrl = redirectUrl = "https://webhook.site/454e7b77-f177-4ece-8236-ddf1c26ba7f8";
  const amount = preamount || "70000";
  const requestType = "captureWallet";
  const extraData = ""; //pass empty value if your merchant does not have stores

  //before sign HMAC SHA256 with format
  //accessKey=$accessKey&amount=$amount&extraData=$extraData&ipnUrl=$ipnUrl&orderId=$orderId&orderInfo=$orderInfo&partnerCode=$partnerCode&redirectUrl=$redirectUrl&requestId=$requestId&requestType=$requestType
  const rawSignature =
    "accessKey=" +
    accessKey +
    "&amount=" +
    amount +
    "&extraData=" +
    extraData +
    "&ipnUrl=" +
    ipnUrl +
    "&orderId=" +
    orderId +
    "&orderInfo=" +
    orderInfo +
    "&partnerCode=" +
    partnerCode +
    "&redirectUrl=" +
    redirectUrl +
    "&requestId=" +
    requestId +
    "&requestType=" +
    requestType;
  //puts raw signature
  console.log("--------------------RAW SIGNATURE----------------");
  console.log(rawSignature);
  //signature
  const signature = crypto
    .createHmac("sha256", secretkey)
    .update(rawSignature)
    .digest("hex");
  console.log("--------------------SIGNATURE----------------");
  console.log(signature);

  //json object send to MoMo endpoint
  // const requestBody = JSON.stringify({
  //   partnerCode: partnerCode,
  //   accessKey: accessKey,
  //   requestId: requestId,
  //   amount: amount,
  //   orderId: orderId,
  //   orderInfo: orderInfo,
  //   redirectUrl: redirectUrl,
  //   ipnUrl: ipnUrl,
  //   extraData: extraData,
  //   requestType: requestType,
  //   signature: signature,
  //   lang: "en",
  // });

  const res = await axios.post(
    "https://test-payment.momo.vn/v2/gateway/api/create",
    {
      partnerCode: partnerCode,
      accessKey: accessKey,
      requestId: requestId,
      amount: amount,
      orderId: orderId,
      orderInfo: orderInfo,
      redirectUrl: redirectUrl,
      ipnUrl: ipnUrl,
      extraData: extraData,
      requestType: requestType,
      signature: signature,
      lang: "en",
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.data;
};

export default getMomoUrl;
