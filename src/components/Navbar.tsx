import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex gap-5 bg-blue-500 p-5 text-white">

      <Link href="/">
        Home
      </Link>

      <Link href="/about">
        About
      </Link>

      <Link href="/contact">
        Contact
      </Link>

    </div>
  );
};

export default Navbar;