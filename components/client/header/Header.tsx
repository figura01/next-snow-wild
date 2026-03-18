import Link from "next/link";
import Navigation from "./Navigation";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex bg-primary w-full border-b border-gray-200 py-4">
      <div className="container flex items-center justify-between">
        <h1 className="text-white text-3xl font-bold">Snow Wild</h1>
        <Navigation />
        <nav className="flex gap-4">
          <Button asChild variant="ghost">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/signup">S&apos;inscrire</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
