export default function CardsLoading() {
  return (
    <div className="flex flex-col max-w-5xl my-0 mx-auto px-2">
      <div className="flex md:flex-row flex-col items-center gap-5">
        <div className="md:flex-1 flex-none w-full p-6 rounded shadow h-40 bg-zinc-400 animate-pulse cursor-wait" />
        <div className="md:flex-1 flex-none w-full p-6 rounded shadow h-40 bg-zinc-400 animate-pulse cursor-wait" />
        <div className="md:flex-1 flex-none w-full p-6 rounded shadow h-40 bg-zinc-400 animate-pulse cursor-wait" />
      </div>
    </div>
  );
}
