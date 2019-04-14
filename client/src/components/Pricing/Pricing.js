import React from "react";
import { PricingContainer } from "./PricingStyles";
const Pricing = ({ type, price, benifits }) => {
  const getBenifits = () => {
    return (
      benifits && benifits.map(benifit => <li key={benifit}>{benifit.name}</li>)
    );
  };
  return (
    <PricingContainer type={type}>
      <div className="benifits">
        <div className="price__type">
          <div className="type">{type}</div>
          <div className="price">{price}</div>
        </div>
        <ul>{getBenifits()}</ul>
      </div>
    </PricingContainer>
  );
};
Pricing.defaultProps = {
  benifits: [
    {
      name: "🚫 Limited Support"
    },
    { name: " 🕒 Published in 1-3 days" },
    { name: "  📅 Posted for 30 days" },
    { name: "      😕 Not guaranteed to be featured on the network" }
  ],
  type: "basic",
  price: "free"
};
export default Pricing;
