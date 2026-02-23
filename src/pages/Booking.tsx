import React from "react";
import { InlineWidget } from "react-calendly";

const Booking = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <InlineWidget url="https://calendly.com/azizalgambar" />
    </div>
  );
};

export default Booking;