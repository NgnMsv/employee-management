import React from "react";
import InputForm from "../../common/login/inputForm.tsx";

interface ILoginForm {
  setUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitForm: () => void;
}

const LoginForm: React.FC<ILoginForm> = ({
  setUserName,
  setPassword,
  submitForm,
}) => {
  return (
    <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
      <div className="space-y-6">
        <InputForm type="text" label="UserName" onChage={setUserName} />
        <InputForm type="password" label="Password" onChage={setPassword} />
        <button
          onClick={submitForm}
          type="submit"
          className="flex w-full justify-center rounded-md bg-[#0099CC] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>
      </div>
      <div />
    </div>
  );
};

export default LoginForm;
