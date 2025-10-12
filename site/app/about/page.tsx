import Image from "next/image";
import Link from "next/link";

const Page = async () => {
  const request = await fetch(
    "https://server.radioznb.ru/api/station/radioznb-live",
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_RADIOZNB_API_KEY}`,
      },
    }
  );
  const data = await request.json();
  console.log(data);
  return (
    <div>
      <Link href="/" className="w-fit">
        <Image src="/assets/logo.png" height={64} width={64} alt="logo" />
      </Link>
      <p className="sm:p-12 p-4">{data.description}</p>
      <div className="flex gap-4 justify-center">
        <Link href="https://t.me/radi0ZnB">
          <Image
            className="relative size-24 hover:scale-105 transition-all"
            width={12}
            height={12}
            src="/assets/tg.png"
            alt="telegram"
          />
        </Link>
      </div>
    </div>
  );
};

export default Page;
