import Image from "next/image";
export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center gap-x-5">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image
            src="/discussion_light.svg"
            fill
            className="object-contain dark:hidden"
            alt="Discussion"
          />
          <Image
            src="/discussion_dark.svg"
            fill
            className="object-contain hidden dark:block"
            alt="Discussion"
          />
        </div>
        <div className="relative w-[400px] h-[400px] hidden md:block">
          <Image
            src="/men_light.svg"
            fill
            className="object-contain dark:hidden"
            alt="Men"
          />
          <Image
            src="/men_dark.svg"
            fill
            className="object-contain hidden dark:block"
            alt="Men"
          />
        </div>
      </div>
    </div>
  );
};
