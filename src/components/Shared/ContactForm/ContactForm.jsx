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
                Subject:
                  "jmanke.github.io: Sender: " +
                  formProps.current.name +
                  ", Email: " +
                  formProps.current.email.text,
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
          <p className="input-title txt-md txt-light form-message-status ">
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
