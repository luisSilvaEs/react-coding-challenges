import { useRef, useState } from "react";
import "./Form.scss";

const Form = () => {
  const emailUser = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string>(""); //This notation is named "generic" and even no necessary but improves code readibily

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSetEmailUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;

    if (emailRegex.test(email)) {
      setError("");
    }
  };

  const validateEmailOnLeaveInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const email = event.target.value;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  return (
    <>
      <div className="container mx-auto text-center">
        <p>Please fill fields below to register.</p>
        <b>Email and password fields are mandatory</b>
      </div>
      <div className="container mx-auto b-form-component flex justify-center mt-9">
        <form action="" className="w-52">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />
          <label htmlFor="email" className="requiered">
            Email:
          </label>
          <input
            className={
              error
                ? "error-email-message"
                : emailRegex.test(emailUser.current?.value || "")
                ? "correct-email"
                : ""
            }
            type="email"
            id="email"
            onBlur={validateEmailOnLeaveInput}
            onChange={handleSetEmailUser}
            required
            ref={emailUser}
          />
          {error && (
            <div className="error-email-message">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                role="img"
                data-icon="CircleXSmall"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.5 8C14.5 11.5899 11.5899 14.5 8 14.5C4.41015 14.5 1.5 11.5899 1.5 8C1.5 4.41015 4.41015 1.5 8 1.5C11.5899 1.5 14.5 4.41015 14.5 8ZM16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.46967 5.53033L6.93934 8L4.46967 10.4697L5.53033 11.5303L8 9.06066L10.4697 11.5303L11.5303 10.4697L9.06066 8L11.5303 5.53033L10.4697 4.46967L8 6.93934L5.53033 4.46967L4.46967 5.53033Z"
                  fill="currentColor"
                ></path>
              </svg>{" "}
              <span>{error}</span>{" "}
            </div>
          )}
          <label htmlFor="password" className="requiered">
            Password:
          </label>
          <input type="password" id="password" />
          <button
            onClick={() => {}}
            className="b-form-component__submit-button"
          >
            Submit
          </button>
          <button
            onClick={() => {}}
            className="b-form-component__cancel-button"
          >
            Cancel
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
