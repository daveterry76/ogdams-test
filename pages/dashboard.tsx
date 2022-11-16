import Head from "next/head";
import Dashboard from "../components/main/dashboard";
import Nav from "../components/main/nav";
import Sidebar from "../components/sidebar";


export default function DashboardPage() {
  return (
    <>
      <div className="flex">
        <Head>
          <title>OGDAMS - Dashboard</title>
        </Head>
        <div className="w-[20%] bg-blue-800 max-h-fit overflow-y-visible">
          <Sidebar />
        </div>
        <div className="w-[80%] bg-gray-100 max-h-full h-full pb-60">
          <Nav />
          <div className="p-6">
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  )
}