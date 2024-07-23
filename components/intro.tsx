import Image from "next/image";
import { CMS_NAME, CMS_URL } from "../lib/constants";
import Link from "next/link";

export default function Intro() {
  return (
    <>
      <section className="flex-col md:flex-row flex items-center md:justify-between mt-32 mb-32 md:mb-12">

        <div className="grid grid-cols-2 gap-10 flex items-center	m-auto w-full min-h-[60vh]">
          <div className="container">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8 text-accent-7">
              LatticeFlow
            </h1>
            <p className="text-lg text-accent-7">
              Eliminate the guesswork of finding and fixing data and model issues manually.
              Use LatticeFlow AI to auto-diagnose issues for everyone on your team and accelerate model development and deployment at scale.
            </p>
            <Link href={'/news'}>
              <button className="bg-lf-blue border-2 border-lf-blue hover:bg-transparent hover:shadow-lg hover:text-lf-blue text-white py-2 px-14 rounded-full mt-8 duration-300 shadow-lf-blue">Read our news</button>
            </Link>

          </div>
          <div className="mockup-browser bg-base-300 border shadow-lg">
            <div className="mockup-browser-toolbar">
              <div className="input border-gray-300">latticeflow.ai</div>
            </div>
            <Image
              src={'/images/lf-site.png'}
              width={1000}
              height={1000}
              alt="test"
            />
          </div>

        </div>
      </section>

    </>
  );
}
