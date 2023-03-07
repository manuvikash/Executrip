import Header from "../components/Header";
import Login from "../components/Login";
import bg2 from "../assets/bg2.mp4";

export default function LoginPage() {
  return (
    <>
      <div className="min-h-full h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <video autoPlay loop muted className="absolute top-0 left-0 -z-10 w-auto h-screen object-cover overflow-hidden">
            <source src={bg2} type="video/mp4" />
          </video>

          <Header
            heading="Login to your account"
            paragraph="Don't have an account yet? "
            linkName="Signup"
            linkUrl="/signup"
          />

          <Login />
        </div>
      </div>
    </>
  );
}

