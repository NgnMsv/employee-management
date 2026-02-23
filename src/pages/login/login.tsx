const Login = () => {
  return (
    <>
      <div className="flex  flex-col justify-center items-center h-full py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="/src/assets/images/logo/logo.png"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign In To Quera Employe Management
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="Username"
                  className="block text-sm font-medium leading-6 text-gray-900 undefined"
                >
                  Username
                </label>
                <div className="mt-2">
                  <input
                    id="Username"
                    name="Username"
                    type="text"
                    autoComplete="current-password"
                    className="px-2 outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 "
                    defaultValue=""
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900 undefined"
                >
                  password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    className="px-2 outline-none block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 "
                    defaultValue=""
                  />
                </div>
              </div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#0099CC] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
            <div />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
