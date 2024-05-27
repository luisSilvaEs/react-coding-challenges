import "./Form.scss";

const Form = () => {
  const validateEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const email = event.target.value;
    console.log("->", email);
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
          <input type="email" id="email" onChange={validateEmail} />
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
