import { getToken } from "./auth";
import axios from "axios";

const razorpay_cred = {
  key_id: "rzp_live_og3WnLF8qiaveP",
};

export const checkout = async (amount) => {
  const token = await getToken();

  return new Promise((res, rej) => {
    axios({
      method: "POST",
      url: "https://api.collegeshala.com/create-order",
      headers: {
        authorization: token,
      },
      data: JSON.stringify({ amount }),
    })
      .then(({ data }) => {
        // console.log(data);
        const order_id = data.order_details.id;
        const { amount } = data.order_details;

        const options = {
          key: razorpay_cred.key_id,
          amount: amount,
          currency: "INR",
          name: "CollegeShala",
          description: "Purchase Credits",
          payment_capture: "1",
          // image: "https://localhost:3000//logo192.png",
          order_id: order_id,
          handler: (response) => {
            console.log({
              time: Date.now().toString(),
              response,
            });
            res(response);
          },
          theme: {
            color: "#6f42c1",
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      })
      .catch((err) => rej(err));
  });
};
