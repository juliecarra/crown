import React from "react";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import images from "react-payment-inputs/images";

const Payment = () => {
  const cardNumberValidator = ({ cardNumber, cardType, errorMessages }) => {
    if (
      cardType.displayName === "Visa" ||
      cardType.displayName === "Mastercard"
    ) {
      return;
    }

    return "Card must be Visa or Mastercard";
  };

  const {
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps
  } = usePaymentInputs({ cardNumberValidator });

  return (
    <div>
      <PaymentInputsWrapper {...wrapperProps}>
        <svg {...getCardImageProps({ images })} />
        <input {...getCardNumberProps()} required />
        <input {...getExpiryDateProps()} required />
        <input {...getCVCProps()} required />
      </PaymentInputsWrapper>
    </div>
  );
};

export default Payment;
