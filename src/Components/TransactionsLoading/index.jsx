export default function TransactionsLoading() {
  return (
    <>
      <div className="flex flex-col max-w-5xl my-0 mx-auto px-2 pt-6">
        <div className="flex flex-row space-x-2">
          <div className="bg-zinc-400 cursor-wait animate-pulse rounded">
            <div className="h-8 w-80" />
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-5xl my-0 mx-auto px-2 py-6">
        <div className="h-80 bg-zinc-400 cursor-wait animate-pulse rounded"></div>
      </div>
    </>
  );
}
