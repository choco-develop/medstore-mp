import { AiOutlineGoogle, AiFillFacebook, AiFillLinkedin } from 'react-icons/ai';

export default function Login() {
  return (
    <section className="flex flex-col my-6 mx-3 pt-2 px-2 gap-3 bg-white rounded-md">
      <div className="">
        <h1 className="font-serif text-lg leading-10 font-medium text-gray-600">LOGIN</h1>
      </div>
      <form className="flex flex-col gap-5">
        <div className="flex flex-col">
          <label htmlFor="email" className="flex flex-col">
            <span className="leading-10 font-serif text-gray-600">Email</span>
            <input
              type="text"
              id="email"
              name="email"
              className="border-2 border-main p-3 rounded-lg placeholder:italic"
              placeholder="Enter your email here..."
              required
              auto-focus
            />
          </label>
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="flex flex-col">
            <span className="leading-10 font-serif text-gray-600">Password</span>
            <input
              type="text"
              id="password"
              name="password"
              className="border-2 border-main p-3 rounded-lg placeholder:italic"
              placeholder="Enter your password here..."
              required
              auto-focus
            />
          </label>
        </div>
        <div className="flex justify-start items-center gap-2">
          <input type="checkbox" name="rememeber" className="border border-main checked:bg-main" />
          <span className="font-serif text-gray-600">Rememeber me?</span>
        </div>
        <div className="flex flex-col">
          <input type="button" className="text-center text-white bg-main py-3 font-medium" value="LOGIN" required auto-focus />
        </div>
      </form>
      <div className="flex py-5 items-center">
        <div className="grow border border-main" />
        <div
          className="flex-none border border-main
                  rounded-full font-serif
                  w-[30px] text-center
                  text-gray-600"
        >
          OR
        </div>
        <div className="grow border border-main" />
      </div>
      <div className="flex justify-center gap-2">
        <AiFillFacebook size={30} color="#3b5998" />
        <AiOutlineGoogle size={30} color="#f4c20d" />
        <AiFillLinkedin size={30} color="#0072b1" />
      </div>
      <div className="flex justify-center">
        <span className="flex gap-2 mb-5">
          Need an account?
          <a href="/signup" className="underline text-current">
            SIGN UP
          </a>
        </span>
      </div>
    </section>
  );
}
