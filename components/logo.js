import Link from "next/link";
import Image from "next/image";

export default function Logo({name, size = 24, sizeLarge = 32 }) {
  return (
    <>
      <div className="flex-col justify-evenly items-center ml-5 lg:ml-5">
        <ul>
          <li>
            <Link href="/"></Link>
          </li>
        </ul>
        <Image
          priority
          src="/logo.png"
          height={128}
          width={128}
          alt=""
          className={`w-${size} lg:w-${sizeLarge}`}
        />
        <h1 className="font-Lato text-2xl lg:text-4xl -mt-3">{name}</h1>
      </div>
    </>
  );
}
