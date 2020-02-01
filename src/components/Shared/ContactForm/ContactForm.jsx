import React from "react";
import Email from "../smtp.js";
import "./ContactForm.css";

const messageStatusState = {
  none: "none",
  sending: "sending",
  sent: "sent",
  failed: "failed"
};

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
  const [messageStatus, setMessageStatus] = React.useState(
    messageStatusState.none
  );

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
      <p className="contact-form__input-title txt-md">Name</p>
      <input
        className="contact-form__text-input"
        type="text"
        placeholder="Enter Name"
        onChange={change => {
          formProps.current.name = change.target.value;
        }}
      />
      {formProps.current.email.isValid ? (
        <p className="contact-form__input-title txt-md">Email</p>
      ) : (
        <p className="contact-form__input-title_invalid txt-md">Please Enter a Valid Email</p>
      )}
      <input
        className={
          "contact-form__text-input" +
          (formProps.current.email.isValid ? "" : " contact-form__text-input_invalid")
        }
        type="text"
        placeholder="Enter Email"
        onChange={change => {
          formProps.current.email.text = change.target.value;
        }}
      />
      {formProps.current.message.isValid ? (
        <p className="contact-form__input-title txt-md">Message</p>
      ) : (
        <p className="contact-form__input-title_invalid txt-md">Please Enter a Message</p>
      )}
      <textarea
        className={
          "contact-form__text-input form-message" +
          (formProps.current.message.isValid ? "" : " contact-form__text-input_invalid")
        }
        placeholder="Enter Message"
        onChange={change => {
          formProps.current.message.text = change.target.value;
        }}
        required
      />
      <span>
        <input
          className={"contact-form__submit"}
          type="submit"
          value="Send"
          onClick={() => {
            if (messageStatus === messageStatusState.sent || messageStatus === messageStatusState.sending) {
              return;
            }

            if (validateForm()) {
              setMessageStatus(messageStatusState.sending);

              const bodyMessage =
                "Sender: " +
                formProps.current.name +
                "\r\n" +
                "From Email: " +
                formProps.current.email.text +
                "\r\n \r\n" +
                formProps.current.message.text;

              Email.send({
                SecureToken: "e05ed07e-86ad-40c2-93e2-4a3b41ee1f50",
                To: "jeffman879@gmail.com",
                From: "jeffman879@gmail.com",
                Subject: "jmanke.github.io: Contact",
                Body: bodyMessage.replace(/[\r\n]/g, "<br />")
              }).then(message => {
                console.log(message);
                setMessageStatus(
                  message === "OK"
                    ? messageStatusState.sent
                    : messageStatusState.failed
                );
              });
            }
          }}
        />
        {messageStatus === messageStatusState.none ? null : (
          <p className="contact-form__input-title txt-md txt-light form-message-status ">
            {messageStatus === messageStatusState.sending
              ? "Sending..."
                : messageStatus === messageStatusState.sent
                ? "Message Sent!"
                : "Send Failed..."}
          </p>
        )}
      </span>
    </div>
  );
};
