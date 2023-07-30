import React from "react";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { ElementTextFieldMedium } from "../../components/ElementTextFieldMedium";
import { Eye } from "../../components/Eye";
import "./style.css";

export const MacbookAir = () => {
  return (
    <div className="macbook-air">
      <div className="div">
        <div className="overlap">
          <h1 className="text-wrapper">Welcome Back !</h1>
          <p className="log-in-to-your">Log in to your account &amp; get back to where you left.</p>
        </div>
        <ButtonPrimary className="button-primary-instance" text="LOGIN" />
        <div className="overlap-group">
          <div className="element-text-field-medium-2">
            <img className="img" alt="Trailing icon" src="/img/trailing-icon.png" />
          </div>
          <div className="data-2">
            <p className="p">Enter username or mobile no.</p>
          </div>
        </div>
        <div className="overlap-2">
          <div className="element-text-field-medium-2">
            <img className="img" alt="Trailing icon" src="/img/trailing-icon.png" />
          </div>
          <img className="google" alt="Google" src="/img/google.svg" />
          <div className="text-wrapper-2">Sign in with Google</div>
        </div>
        <div className="overlap-group-2">
          <ElementTextFieldMedium
            className="one-text-field-medium-passwrod"
            hasData={false}
            hasLabel={false}
            hasTrailingIcon={false}
          />
          <div className="eye-wrapper">
            <Eye className="eye-instance" eye="/img/eye-1.svg" />
          </div>
          <div className="data-3">
            <div className="text-2">Password</div>
          </div>
        </div>
        <div className="text-wrapper-3">Forgot ?</div>
        <div className="frame">
          <p className="text-wrapper-4">Don’t have an account ?</p>
          <div className="text-wrapper-5">Sign Up</div>
        </div>
        <img className="line" alt="Line" src="/img/line-6.svg" />
        <div className="overlap-3">
          <img className="line-2" alt="Line" src="/img/line-7.svg" />
          <p className="text-wrapper-6">or sign in with username</p>
        </div>
      </div>
    </div>
  );
};
