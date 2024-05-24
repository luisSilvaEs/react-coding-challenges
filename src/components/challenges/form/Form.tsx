import "./Form.scss";

const Form = () => {
  return (
    <>
      <div className="container mx-auto text-center">
        <p>
          Please fill fields below. After completing please click on Submit
          button to validate
        </p>
        <b>Email and password fields are mandatory</b>
      </div>
      <div className="container mx-auto b-form-component flex justify-center mt-9">
        <form action="" className="w-52">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
