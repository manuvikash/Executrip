import Header from "../components/Header";
import GuideSignup from "../components/GuideSignup";

export default function SignupPage() {
  return (
    <>
      <Header
        heading="Signup to be a guide"
        paragraph="Already have an account?"
        linkName="Login"
        linkUrl="/"
      />
      <GuideSignup />
    </>
  );
}
