import { Footer } from "./_components/footer";
import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";

const LandingPage = () => {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 dark:bg-[#1F1F1F] px-6 pb-10">
        {/* Heading Component */}
        <Heading />
        {/* Heroes Component */}
        <Heroes /> 
      </div>
      {/* Footer Component */}
      <Footer /> 
    </div>
  );
};

export default LandingPage;
