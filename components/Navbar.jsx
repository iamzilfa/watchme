import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-700">
      <div className="text-bold text-neutral-100 p-4 max-w-7xl mx-auto container tracking-widest font-neue">
        <Link href="/" className="text-base md:text-2xl">
          Watch
          <span className="text-red-600">Me</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
