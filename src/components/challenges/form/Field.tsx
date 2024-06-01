import { useState } from "react";

interface FieldError {
  icon?: JSX.Element;
  message: string;
  validationPattern?: RegExp;
}

interface InputProps {
  classesForLabel?: string;
  classesForInput?: string;
  type: "email" | "text" | "password";
  id: string;
  labelWording: string;
  value?: React.RefObject<HTMLInputElement>;
  errorSettings?: FieldError;
}

const Field = ({
  classesForLabel,
  classesForInput,
  type,
  id,
  labelWording,
  value,
  errorSettings,
}: InputProps) => {
  const [error, setError] = useState<FieldError | undefined>(errorSettings); //This notation is named "generic" and even no necessary but improves code readibily

  const validateInputContentFormatAfterTyping = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const entryInput = event.target.value;

    if (errorSettings?.validationPattern?.test(entryInput)) {
      setError((prevState) => {
        return prevState ? { ...prevState, message: "" } : { message: "" };
      });
    }
  };

  const validateInputContentOnLeaveInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const entryInput = event.target.value;

    if (!errorSettings?.validationPattern?.test(entryInput)) {
      const newMessage = errorSettings?.message || "Invalid format";
      setError((prevState) => {
        return prevState
          ? { ...prevState, message: newMessage }
          : { message: newMessage };
      });
    } else {
      setError((prevState) => {
        return prevState ? { ...prevState, message: "" } : { message: "" };
      });
    }
  };

  return (
    <>
      <label htmlFor={type} className={classesForLabel}>
        {labelWording}
      </label>
      <input
        type={type}
        id={id}
        ref={value ? value : ""}
        onBlur={validateInputContentOnLeaveInput}
        onChange={validateInputContentFormatAfterTyping}
        className={`${classesForInput ? classesForInput : ""} ${
          error?.validationPattern?.test(value?.current?.value || "")
            ? "valid-format"
            : value?.current?.value && value?.current?.value !== ""
            ? "error-message"
            : "-"
        }`}
      />
      {value?.current?.value &&
      value?.current?.value !== "" &&
      !error?.validationPattern?.test(value?.current?.value || "") ? (
        <div className="error-message">
          {errorSettings?.icon}
          <span>{errorSettings?.message}</span>
        </div>
      ) : null}
    </>
  );
};

export default Field;
