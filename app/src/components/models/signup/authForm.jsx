import { useState } from "react";
import { signUp, logIn } from "../../../utils/auth.js";

export const AuthForm = () => {
  // Start in login mode
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (mode === "signup") {
      const { error, data } = await signUp(email, password);
      console.log({ error, data });
    } else {
      const { error, data } = await logIn(email, password);
      console.log({ error, data });
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center space-y-3">
        <div className="p-[50px] max-w-md mx-auto rounded-[12px] shadow-md content-center">
          <h1 className="text-2xl font-bold mb-4 text-center"> {mode === "login" ? "Login to BrainBurst" : "Ready To Blow Your Mind?"}</h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} className="w-full px-[16px] py-[8px] border rounded-[6px]" required/>
            <input type="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full px-[16px] py-[8px] border rounded-[6px]" required/>
            <button className="w-full bg-[#0047AB] text-white py-[10px] px-[16px] rounded-[20px] hover:bg-[#003a8b] transition" type="submit">{mode === "login" ? "Log In" : "Sign Up"}</button>
          </form>
        </div>
        <div className="mb-6 text-center text-sm">
          {mode === "login" ? (
            <>
              Create An Account{" "}
              <button className="text-[#0047AB] hover:underline" onClick={() => setMode("signup")}>Sign up</button>
            </>
          ) : (
            <>
              Already Have An Account{" "}
              <button onClick={() => setMode("login")} className="text-[#0047AB] hover:underline">Log in</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};