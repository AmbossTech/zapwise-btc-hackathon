import Head from "next/head";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Split Sats</title>
      </Head>
      <div className="fixed inset-0 h-full w-full bg-slate-800 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="min-h-full h-full relative w-full">{children}</div>
    </>
  );
}
