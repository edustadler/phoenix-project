import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <div className="fixed w-full z-50 top-0	backdrop-blur-xl bg-gray-100/30">
      <div className='container mx-auto py-4'>
        <div className="flex justify-between">
          <Link href="/" className="grid grid-cols-3 md:grid-cols-8 gap-6 md:gap-20 px-8">
            <Logo/>
          </Link>
        </div>
      </div>
    </div>

  );
}
