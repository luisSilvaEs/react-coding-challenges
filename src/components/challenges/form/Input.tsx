interface ErrorInput {
  icon?: any;
  message: any;
}

interface InputProps {
  classesForLabel?: any;
  classesForInput?: any;
  type: "email" | "text" | "password";
  id: string;
  label: string;
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
  label,
  value,
  error,
  handleBlur,
  handleOnChange,
}: InputProps) => {
  return (
    <>
      <label htmlFor={type} className={classesForLabel}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        ref={value ? value : ""}
        onBlur={handleBlur}
        onChange={handleOnChange}
        className={classesForInput}
      />
      {error?.message && (
        <div className="error-email-message">
          {error.icon}
          <span>{error.message}</span>
        </div>
      )}
    </>
  );
};

export default Input;
