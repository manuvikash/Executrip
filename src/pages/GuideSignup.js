import Header from "../components/Header";
import GuideSignup from "../components/GuideSignup";

export default function SignupPage() {
  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Header
            heading="Signup to be a guide"
            paragraph="Already have an account?"
            linkName="Login"
            linkUrl="/"
          />
          <GuideSignup />
        </div>
      </div>
    </>
  );
}
