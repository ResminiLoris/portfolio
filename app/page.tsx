
export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{ backgroundImage: "url(/main-bg.jpg)" }}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[800px]">
          {/* slogan */}
          <h1 className="text-[30px] text-white font-semibold">
            {`Breathe life into your app, `}
            <div className="text-[60px] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-yellow-500">
              one pixel at a time.
            </div>
          </h1>
        </div>
      </div>
    </main>
  );
}
