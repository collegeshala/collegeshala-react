const Razorpay = require("razorpay");

const checkout = function (amount, credits, authToken) {
  //const razorpayidtest = "rzp_test_M1E05195gJPCyO";
  const razorpayid = "rzp_live_qTODP5D57Nb6U3";
  //const secrettest = "6epZ0Sbl7HvZzo1Ur8mfX74S"
  var options = {
    key: razorpayid,
    amount: amount,
    currency: "INR",
    name: "CollegeShala",
    description: "Purchase Credits",
    payment_capture: "1",
    image: "https://example.com/your_logo",
    handler: function (response) {
      // alert("Payment Successful. Adding Credits to your account ... ");
      //call purchaseCredits api here

      console.log(response);
      completePurchase(
        response.razorpay_payment_id,
        amount,
        credits,
        authToken
      );
    },
    theme: {
      color: "#F37254",
    },
  };
  var rzp1 = new Razorpay(options);
  rzp1.open();
};

function completePurchase(paymentid, amount, credits, authToken) {
  console.log("here");
}

// function completePurchase(paymentid, amount, credits, authToken) {
//   $.ajax({
//     method: "POST",
//     url: "https://api.collegeshala.com/addcredits",
//     headers: {
//       authorization: authToken,
//     },
//     data: JSON.stringify({
//       credits: credits,
//       amount: amount,
//       paymentid,
//     }),
//     contentType: "application/json",
//     success: function complete(result) {
//       // alert('Credits added successfully to your account');
//       if (window.location.href.endsWith("/cart.html")) {
//         $.ajax({
//           method: "POST",
//           url: "https://api.collegeshala.com/checkout",
//           headers: {
//             authorization: authToken,
//           },
//           data: JSON.stringify({}),
//           contentType: "application/json",
//           success: function complete(result) {
//             console.log(result);
//             alert("Notes purchased successfully!");
//             window.location.href = "/student-dashboard.html";
//           },
//           error: function error(err) {
//             console.error(err);
//           },
//         });
//       } else if (window.location.href.endsWith("/my-transaction.html")) {
//         $("#balance-credits").text(
//           `Balance Credits - ${state.credits + credits}`
//         );
//         window.location.reload();
//       }
//       // if(result.error === 'No notes purchased') {
//       //     $('#card').append('No notes purchased');
//       // }
//       // result.map(note => {
//       //     $('#card').append(`<h1>${note.name}</h1><br><h2>${note.byProfessor}</h2>`);
//       // })
//     },
//     error: function error(jqXHR, textStatus, errorThrown) {
//       console.error(
//         "Error: ",
//         textStatus,
//         ", Details: ",
//         errorThrown,
//         "stack:",
//         errorThrown.stack
//       );
//       console.error("Response: ", jqXHR.responseText);
//       alert(
//         "An error occured. Please contact collegeshala for refund against payment id:",
//         paymentid
//       );
//     },
//   });
// }

module.exports = checkout;
