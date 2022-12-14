import Head from "next/head";
import Nav from "../components/main/nav";
import PhoneNumberSection from "../components/main/phone-numbers";
import Sidebar from "../components/sidebar";


export default function Home() {
  return (
    <>
      <div className="overflow-hidden flex max-h-fit">
        <Head>
          <title>OGDAMS - Phone Numbers</title>
        </Head>
        <div className="w-[20%] bg-blue-800 max-h-fit overflow-y-visible">
          <Sidebar />
        </div>
        <div className="w-[80%] bg-gray-100 max-h-full h-fit pb-60">
          <Nav />
          <PhoneNumberSection />
        </div>
      </div>
    </>
  )
}
