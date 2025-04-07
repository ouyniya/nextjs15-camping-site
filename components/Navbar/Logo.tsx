import Link from "next/link";
import { Button } from "../ui/button";
import LogoIcon from "../icon/LogoIcon";

const Logo = () => {
  return (
    <>
      <Button size="lg" variant="ghost" asChild>
        <Link href="/">
        <LogoIcon />
          <h1 className="text-xl">NYS Camping</h1>
        </Link>
      </Button>
    </>
  );
};
export default Logo;
