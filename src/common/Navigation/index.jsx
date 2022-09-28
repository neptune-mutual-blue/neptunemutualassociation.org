import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="absolute bottom-14 md:top-1 md:right-2">
      <p className="mx-auto text-white cursor-pointer md:ml-auto md:mr-9 md:mt-12">
        <Link href="/learn">Learn More</Link>
      </p>
    </nav>
  );
};

export default Navigation;
