import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./ContactPageForm.scss";

function ContactPageForm(props) {
  return (
    <div className="form">
      <div className="formTitleContainer">
        <h1 className="formTitleContainer__title">Contact</h1>
        <div className="formTitleContainer__border"></div>
      </div>

      <div className="formTextContainer">
        <p className="formTextContainer__text">
          Have a question? Leave your details below and I’ll get back to you as
          soon as possible!
        </p>
      </div>

      <form className="formContainer" onSubmit={props.submitForm}>
        <p className="errorMessage">{props.formErrors.name}</p>

        <div className="formContainerBox">
          <input
            className="formContainerBox__name"
            onChange={props.updateFormControl}
            type="text"
            id="name"
            value={props.formState.name}
            placeholder="Name"
          />
        </div>

        <p className="errorMessage">{props.formErrors.email}</p>

        <div className="formContainerBox">
          <input
            className="formContainerBox__email"
            onChange={props.updateFormControl}
            type="text"
            id="email"
            value={props.formState.email}
            placeholder="Email"
          />
        </div>

        <p className="errorMessage">{props.formErrors.message}</p>

        <div className="formContainerBox">
          <textarea
            className="formContainerBox__message"
            onChange={props.updateFormControl}
            type="text"
            id="message"
            value={props.formState.message}
            placeholder="Message"
          />
        </div>

        <ReCAPTCHA
          className="cap"
          ref={props.recaptchaRef}
          sitekey={props.recaptchaKey}
          onChange={props.updateRecaptchaToken}
        />
        {props.message && (
          <div className="submitMessage">{props.message.text}</div>
        )}
        <button className="btn" disabled={props.submitting}>
          {props.submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default ContactPageForm;
