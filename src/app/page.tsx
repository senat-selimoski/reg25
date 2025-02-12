import Header from "@/components/Header";
import SignInForm from "@/components/SignInForm";

export default function Home() {
  return (
    <div className="flex items-start justify-center min-h-screen w-full">
      <div className="w-[393px] h-full flex flex-col pt-[60px]">
          <Header />
          <SignInForm />
      </div>
    </div>
  );
}