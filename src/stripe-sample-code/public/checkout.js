// This is your test secret API key.
const stripe = Stripe("pk_test_51Rh6kPQWIcBkSDffYgWNlX8Tcxe6FQq4D21wNca1y88dLBSXNlKdXPDPAs4fkGKYRn0WnhckzITNtbIKKUxELwvL00R2OGWHS7");

initialize();

// Create a Checkout Session
async function initialize() {
  const fetchClientSecret = async () => {
    const response = await fetch("/create-checkout-session", {
      method: "POST",
    });
    const { clientSecret } = await response.json();
    return clientSecret;
  };

  const checkout = await stripe.initEmbeddedCheckout({
    fetchClientSecret,
  });

  // Mount Checkout
  checkout.mount('#checkout');
}