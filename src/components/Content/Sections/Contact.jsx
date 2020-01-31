import React from "react";
import ContactForm from "../../Shared/ContactForm/ContactForm";
import FadeSection from "../../Shared/FadeSection/FadeSection";

export default () => {
  return (
    <div className="contact">
      <FadeSection>
        <ContactForm />
      </FadeSection>
    </div>
  );
};
