import Link from "next/link";

export default function BigButton({href, text}) {

    return (
        <Link href={`${href}`}>
            <button className={"px-9 py-10 bg-slate-300  hover:bg-slate-400 rounded-md text-xl w-40 sm:w-72 md:w-72 lg:w-72 h-36 hfont-Lato font-light shadow-lg flex justify-center items-center"}>
            {`${text}`}
            </button>
        </Link>
    )

}