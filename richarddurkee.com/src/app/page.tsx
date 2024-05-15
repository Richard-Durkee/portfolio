import Image from "next/image";
import NavBar from "./navbar";
import SideNav from "./sidenav";
import ProjectLinks from "./projects/projects-nav-links";

export const metadata = {
  title: "Richard F. Durkee",
  description: "Software Engineer, Novice Audio Engineer",
}

export default function Home() {
  return (
    <main>
      <div>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <p className="mb-9">Hi, I’m Rick, a software engineer, graduating with a B.S in Computer Science in Brown University’s Class of 2024!</p>
      <p className="mb-4">Projects</p>
        <ProjectLinks></ProjectLinks>
      </div>
    </main>
  );
}
