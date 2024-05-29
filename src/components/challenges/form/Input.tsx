interface ErrorInput {
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
  value?: any;
  error?: ErrorInput;
  handleBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleOnChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
  classesForLabel,
  classesForInput,
  type,
  id,
  labelWording,
  value,
  error,
  handleBlur,
  handleOnChange,
}: InputProps) => {
  return (
    <>
      <label htmlFor={type} className={classesForLabel}>
        {labelWording}
      </label>
      <input
        type={type}
        id={id}
        ref={value ? value : ""}
        onBlur={handleBlur}
        onChange={handleOnChange}
        className={`${classesForInput} ${
          error && error.message
            ? "error-message"
            : error?.validationPattern?.test(value.current?.value || "")
            ? "valid-password"
            : ""
        }`}
      />
      {error?.message && (
        <div className="error-message">
          {error.icon}
          <span>{error.message}</span>
        </div>
      )}
    </>
  );
};

export default Input;
