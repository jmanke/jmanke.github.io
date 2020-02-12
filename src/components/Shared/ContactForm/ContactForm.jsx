import React from "react";
import styled from "styled-components";
import Email from "../smtp.js";
import Button from "components/Shared/Button/Button";

//TODO: Move logic to another component and clean this up.

const messageStatusState = {
  none: "none",
  sending: "sending",
  sent: "sent",
  failed: "failed"
};

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 35em;
  margin: auto;
`

const TextInput = styled.input`
  border-radius: 0;
  border: solid;
  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.invalid ? `#ff0000` : `#c5c5c5`};

  min-width: 12rem;

  padding: 0.5rem;
  background-color: white;

  &:focus {
    outline: none;
    border-color: #257AFD;
    box-shadow: 0 0 5px #257AFD;
  }
`

const TextArea = styled.textarea`
  border-radius: 0;
  border: solid;
  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.invalid ? `#ff0000` : `#c5c5c5`};
  height: 20rem;
  resize: none;
  min-width: 12rem;
  padding: 0.5rem;
  background-color: white;

  &:focus {
    outline: none;
    border-color: #257AFD;
    box-shadow: 0 0 5px #257AFD;
  }
`

const Title = styled.p`
  font-size: 1.1em;
  color: #bbbbbb;
`

const InvalidText = styled.p`
  display: initial;
  font-size: 0.9em;
  margin: 0.5rem 0 -0.2rem 0;
  color: #e43333;
`

const SubmitButtonContainer = styled.div`
  height: 5rem;
  display: flex;
  padding-top: 1em;
  justify-content: flex-end;
`

const SubmitStatus = styled.p`
  display: inline-block;
  padding-left: 1rem;
  color: white;
`

export default props => {
  const formProps = React.useRef({
    name: "",
    email: {
      text: "",
      isValid: true,
      validate: function () {
        // eslint-disable-next-line no-useless-escape
        const pattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        this.isValid = this.text.match(pattern) !== null;
      }
    },
    message: {
      text: "",
      isValid: true,
      validate: function () {
        this.isValid = this.text.length > 0;
      }
    }
  });
  // eslint-disable-next-line no-unused-vars
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
    <ContactForm>
      <Title>Name</Title>
      <TextInput
        type="text"
        placeholder="Enter Name"
        onChange={change => {
          formProps.current.name = change.target.value;
        }}
      />
      <Title>Email</Title>
      <TextInput
        invalid={!formProps.current.email.isValid}
        type="text"
        placeholder="Enter Email"
        onChange={change => {
          formProps.current.email.text = change.target.value;
        }}
        onBlur={() => {
          formProps.current.email.validate();
          setFormValid([
            formProps.current.email.isValid,
            formProps.current.message.isValid
          ]);
        }}
      />
      {!formProps.current.email.isValid ? (
        <InvalidText>
          * Please enter a valid email
        </InvalidText>
      ) : null}
      <Title>Message</Title>
      <TextArea
        invalid={!formProps.current.message.isValid}
        placeholder="Enter Message"
        onChange={change => {
          formProps.current.message.text = change.target.value;
        }}
        onBlur={() => {
          formProps.current.message.validate();
          setFormValid([
            formProps.current.email.isValid,
            formProps.current.message.isValid
          ]);
        }}
      />
      {!formProps.current.message.isValid ? (
        <InvalidText>
          * Please enter a message
        </InvalidText>
      ) : null}
      <SubmitButtonContainer>
        {messageStatus === messageStatusState.none ? null : (
          <SubmitStatus>
            {messageStatus === messageStatusState.sending
              ? "Sending..."
              : messageStatus === messageStatusState.sent
                ? "Message Sent!"
                : "Send Failed..."}
          </SubmitStatus>
        )}
        <Button
          onClick={() => {
            if (
              messageStatus === messageStatusState.sent ||
              messageStatus === messageStatusState.sending
            ) {
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
                Subject: "Message From jmanke.github.io: Contact",
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
        >
          Send
        </Button>
      </SubmitButtonContainer>
    </ContactForm>
  );
};
