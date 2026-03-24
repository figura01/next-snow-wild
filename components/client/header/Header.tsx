import Link from "next/link";
import Navigation from "@/components/client/header/Navigation";
import { Button } from "@/components/ui/button";
import Logo from "@/public/logo-snow-wild.svg";
import Image from "next/image";

import { ThemeToggle } from "@/components/theme-toggle";
import { ShoppingCart, User } from "lucide-react";
import ButtonIcon from "@/components/ButtonIcon";

const Header = () => {
  return (
    <header className="header">
      <div className="container mx-auto max-w-7xl px-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center font-medium text-lg tracking-tight"
        >
          <Image src={Logo} width={40} height={40} alt="" className="mr-2" />
          <h1 className="text-2xl font-bold">Snow Wild</h1>
        </Link>

        <Navigation />
        <nav className="flex items-center gap-4">
          <Button asChild variant="ghost">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/signup">S&apos;inscrire</Link>
          </Button>

          <ThemeToggle />
          <ButtonIcon icon={<ShoppingCart />} type="default" />
          <ButtonIcon icon={<User />} type="ghost" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
