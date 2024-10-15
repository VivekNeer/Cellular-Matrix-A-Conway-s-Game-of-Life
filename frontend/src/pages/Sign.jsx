import { useState } from "react";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export function Sign() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const togglePasswordVisibility = () => setPasswordShown((cur) => !cur);

  const handleSignUp = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: e.target.email.value,
          password: password,
        }),
      });
      
      const result = await response.json();
      if (response.ok) {
        console.log("Sign-up successful", result);
      } else {
        console.error("Sign-up error", result.error);
        setErrorMessage(result.error);
      }
    } catch (error) {
      console.error("Error during sign-up", error);
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="grid text-center h-screen items-center p-8">
      <div className="card shadow-xl p-8 bg-base-100 max-w-md mx-auto">
        <h3 className="text-2xl font-bold mb-2">Sign Up</h3>
        <p className="mb-8 text-gray-600">Enter your email and password to create an account</p>

        <form onSubmit={handleSignUp} className="space-y-6">
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text font-medium">Your Email</span>
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label htmlFor="password" className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <div className="relative">
              <input
                id="password"
                type={passwordShown ? "text" : "password"}
                placeholder="********"
                className="input input-bordered w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <i
                onClick={togglePasswordVisibility}
                className="absolute top-3 right-3 cursor-pointer"
              >
                {passwordShown ? (
                  <EyeIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                )}
              </i>
            </div>
          </div>


          {errorMessage && (
            <div className="text-red-500 text-sm">{errorMessage}</div>
          )}

          <button type="submit" className="btn btn-primary w-full mt-4">Sign Up</button>

          <button className="btn btn-outline w-full flex items-center justify-center gap-2">
            <img
              src="https://www.material-tailwind.com/logos/logo-google.png"
              alt="google"
              className="h-6 w-6"
            />
            Sign In with Google
          </button>

          <p className="text-sm text-center mt-4">
           Not registered?{" "}
           <Link to="/regis" className="text-primary hover:underline">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Sign;