import { SignUp } from "./components/models/signup/signup";
import { TestPage } from "./pages/testPage";
import { AuthForm } from "./components/models/signup/signup";

export default function App() {
  return (
    <div>
      {/* <SignUp /> */}
      <TestPage/>
      <AuthForm/>
    </div>
  );
}
