import { toast } from "react-toastify";
import http from "../services/httpService";
import { loadScript } from "../utils/loadScript";

const apiEndpoint = "/orders";

export default async function openPaymentPortal(data, amount, history) {
  await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  const { data: order } = await http.post(`${apiEndpoint}/new`, {
    amount: amount,
  });

  var options = {
    key: "Enter here your Razorpay KeyId",
    amount: order.amount,
    currency: order.currency,
    name: "Flight Reservation System",
    description: "Test Payment",
    image: `${process.env.REACT_APP_PUBLIC_URL}/airplane.png`,
    order_id: order.id,
    handler: async function (response) {
      try {
        await http.post(`${apiEndpoint}/verification`, {
          ...response,
          ...data,
        });

        history.replace("/");
        toast.success("Your tickets have been booked.");
      } catch (ex) {
        if (ex.response && ex.response.status === 400)
          toast.error(ex.response.data);
      }
    },
    prefill: {
      name: data.name,
      email: data.email,
      contact: data.mobileNumber,
    },
    notes: {
      address: "FRS Office, unknown city",
    },
    theme: {
      color: "#3399cc",
    },
  };
  const razorPay = new window.Razorpay(options);
  razorPay.open();
}
