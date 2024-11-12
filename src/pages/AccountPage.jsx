// Account.js
import React, { useState } from "react";
import { auth, db } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Account = ({ setRole }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Fetch user role from Firestore
      const userDoc = await getDoc(doc(db, "users", user.uid));
      if (userDoc.exists()) {
        const userRole = userDoc.data().role;
        setRole(userRole);
        if (userRole === "admin") {
          navigate("/dashboard");
        } else if (userRole === "bakeryAdmin") {
          navigate("/dashboard");
        } else {
          throw new Error("Unauthorized role");
        }
      } else {
        setError("No user role found in Firestore");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center bg-gray-50 py-12">
      <div className="w-full max-w-md p-8 bg-white border rounded-lg shadow-lg">
        <h2 className="text-4xl font-semibold text-gray-800 font-script text-center">
          My Account
        </h2>
        <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Login
        </h3>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Username or email address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 text-black border border-gray-300 rounded focus:outline-none focus:border-pink-400"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border text-black border-gray-300 rounded focus:outline-none focus:border-pink-400"
              />
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-3 cursor-pointer text-gray-500"
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-pink-500 rounded hover:bg-pink-600 focus:outline-none focus:bg-pink-600 font-semibold"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Account;
