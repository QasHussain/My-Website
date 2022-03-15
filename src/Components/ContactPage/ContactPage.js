import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { validate } from "../../store/validateForm";
import ContactPageForm from "./ContactPageForm";

function ContactPage() {
  const formId = "kF9VvST0";
  const formSparkUrl = `https://submit-form.com/${formId}`;

  const recaptchaKey = "6Lfk6N0eAAAAAAlw07ypx1GsD3WMI0CLbPLq4adS";
  const recaptchaRef = useRef();

  const initalFormState = {
    name: "",
    email: "",
    message: "",
  };

  const [formState, setFormState] = useState(initalFormState);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const submitForm = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    await postSubmission();
    setSubmitting(false);
    setFormErrors(validate(formState));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);

  const postSubmission = async () => {
    const payLoad = {
      ...formState,
      "g-recaptcha-response": recaptchaToken,
    };

    try {
      const result = await axios.post(formSparkUrl, payLoad);
      console.log(result);
      setMessage({
        text: "Thanks, I'll be in touch shortly!",
      });
      setFormState(initalFormState);
      recaptchaRef.current.reset();
    } catch (error) {
      console.log(error);
      setMessage({
        text: "Sorry, there was a problem! Please try again :)",
      });
    }
  };

  const updateFormControl = (event) => {
    const { id, value } = event.target;
    const formKey = id;
    const updatedFormState = { ...formState };
    updatedFormState[formKey] = value;
    setFormState(updatedFormState);
  };

  const updateRecaptchaToken = (token) => {
    setRecaptchaToken(token);
  };

  return (
    <ContactPageForm
      submitForm={submitForm}
      formErrors={formErrors}
      updateFormControl={updateFormControl}
      formState={formState}
      recaptchaRef={recaptchaRef}
      recaptchaKey={recaptchaKey}
      updateRecaptchaToken={updateRecaptchaToken}
      submitting={submitting}
      message={message}
    />
  );
}

export default ContactPage;
