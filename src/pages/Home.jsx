import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/NavBar";

export const Home = () => {
  return (
     <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
    {/*theme toogle*/}
    <ThemeToggle/>
    {/*background effects*/}
    <StarBackground />
    {/*navbar*/}
   <Navbar/>
    {/*main Content*/}

    {/*Footer*/}
  </div>
  );
};
