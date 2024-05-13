import NavLinks from "./nav-links";
import SideNav from "./sidenav";

export default function NavBar() {
    return (
        <div className="flex w-full flex-row items-center justify-between p-24">
                <div className="flex flex-row items-center fixed left-0 top-0 w-full justify-between border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit ">
                    <p></p><p className="m-5">Richard F. Durkee</p>
                    <div className="flex h-full px-3 py-4 md:px-2">
                        <NavLinks />
                    </div>
            </div>
        </div>
    );
  }

