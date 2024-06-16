import { Navbar } from "./_components/navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full dark:bg-[#1F1F1F] pt-32">{children}</main>
    </div>
  );
};

export default LandingLayout;
