import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

export default function AboutPage() {
  return (
    <main className="flex flex-col justify-center p-4 sm:p-8 md:px-10 md:py-10 lg:px-20 xl:px-40 2xl:px-60">
      <div className="flex flex-col gap-2 pb-5">
        <p>Hi! My name is Aurelio and I am a Frontend Engineer from Brazil.</p>

        <p>
          This is my Fake Store e-commerce app. I've created it as a practice
          project for improving my skills as a Frontend Engineer.
        </p>

        <p>Here you will find some cool features like:</p>
      </div>

      <div className="flex flex-col gap-1 pb-5">
        <h4 className="text-xl font-bold">NextJS Integration:</h4>
        <p>
          This project leverages the power and simplicity of NextJS, a React
          framework, for building high-performance web applications. I used
          Dynamic routing and server-side rendering throughout the project.
        </p>
      </div>

      <div className="flex flex-col gap-1 pb-5">
        <h4 className="text-xl font-bold">TypeScript</h4>
        <p>To enhance code quality, maintainability, and productivity.</p>
      </div>

      <div className="flex flex-col gap-1 pb-5">
        <h4 className="text-xl font-bold">TailwindCSS</h4>
        <p>
          I choose TailwindCSS for styling, allowing me to rapidly create
          responsive, well-designed user interfaces. Its utility-first approach
          and customization options make it a great choice for this project.
        </p>
      </div>

      <div className="flex flex-col gap-1 pb-5">
        <h4 className="text-xl font-bold">Fake Store API Integration</h4>
        <p>
          The project's base is handling data with API calls and data platform.
          This API provides various endpoints for practicing API integration and
          fetching e-commerce data.
        </p>
      </div>

      <div className="flex flex-col gap-1 pb-5">
        <h4 className="text-xl font-bold">React Icons</h4>
        <p>
          The project incorporates React Icons to easily include high-quality
          icons into the application. The chosen library was Ion Icons.
        </p>
      </div>

      <p>
        If you liked this project, feel free to make suggestions on how to
        enhance the project further. Also, check out my other projects:
      </p>

      <div className="flex justify-center gap-4 pt-10">
        <Link href={"https://github.com/aureliojoseph"} target="blank">
          <IoLogoGithub className="cursor-pointer rounded-full p-2 text-5xl transition-all duration-300 ease-linear hover:bg-gray-300 dark:hover:bg-gray-400" />
        </Link>

        <Link
          href={"https://www.linkedin.com/in/aurelioaborges/"}
          target="blank"
        >
          <IoLogoLinkedin className="cursor-pointer rounded-full p-2 text-5xl transition-all duration-300 ease-linear hover:bg-gray-300" />
        </Link>
      </div>
    </main>
  );
}
