import React from "react";
import "./ContactForm.css";

export default props => {
  const formProps = React.useRef({
    name: "",
    email: {
      text: "",
      isValid: true,
      validate: function() {
        const pattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        this.isValid = this.text.match(pattern) !== null;
      }
    },
    message: {
      text: "",
      isValid: true,
      validate: function() {
        this.isValid = this.text.length > 0;
      }
    }
  });
  const [formValid, setFormValid] = React.useState([
    formProps.current.email.isValid,
    formProps.current.message.isValid
  ]);
  const [messageSent, setMessageSent] = React.useState(false);

  function validateForm() {
    formProps.current.email.validate();
    formProps.current.message.validate();

    // re-render component based on state
    setFormValid([
      formProps.current.email.isValid,
      formProps.current.message.isValid
    ]);

    return formProps.current.email.isValid && formProps.current.message.isValid;
  }

  return (
    <div className={"contact-form " + (props.className ?? "")}>
      <p className="input-title txt-md txt-light">Name</p>
      <input
        className="form-text-input"
        type="text"
        placeholder="Enter Name"
        onChange={change => {
          formProps.current.name = change.target.value;
        }}
        required
      />
      {formProps.current.email.isValid ? (
        <p className="input-title txt-md txt-light">Email</p>
      ) : (
        <p className="input-title txt-md invalid">Please Enter a Valid Email</p>
      )}
      <input
        className={
          "form-text-input" +
          (formProps.current.email.isValid ? "" : " invalid")
        }
        type="email"
        placeholder="Enter Email"
        onChange={change => {
          formProps.current.email.text = change.target.value;
        }}
        required
      />
      {formProps.current.message.isValid ? (
        <p className="input-title txt-md txt-light">Message</p>
      ) : (
        <p className="input-title txt-md invalid">Please Enter a Message</p>
      )}
      <textarea
        className={
          "form-text-input form-message" +
          (formProps.current.message.isValid ? "" : " invalid")
        }
        placeholder="Enter Message"
        onChange={change => {
          formProps.current.message.text = change.target.value;
        }}
        required
      />
      <span>
      <input
        className={"form-submit " + (formValid ? "" : "invalid")}
        type="submit"
        value="Send"
        onClick={() => {
          if (validateForm()) {
            console.log("Send message!");
            console.log(formProps.current.name);
            console.log(formProps.current.email.text);
            console.log(formProps.current.message.text);
            setMessageSent(true);
          }
        }}
      />
      <p className={"input-title txt-md txt-light form-message-status " + (messageSent ? " sent" : "")}>Message Sent!</p>
      </span>
    </div>
  );
};
