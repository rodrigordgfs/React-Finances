import { TERTIARY_COLOR } from "../../utils/colors";

export default function Loading() {
  return (
    <div className="w-full">
      <div className="flex flex-col max-w-5xl my-0 mx-auto px-2">
        <div className="flex md:flex-row flex-col items-center gap-5">
          <div
            className={`md:flex-1 flex-none w-full p-6 rounded shadow-md h-40 ${TERTIARY_COLOR} animate-pulse cursor-wait`}
          />
          <div
            className={`md:flex-1 flex-none w-full p-6 rounded shadow-md h-40 ${TERTIARY_COLOR} animate-pulse cursor-wait`}
          />
          <div
            className={`md:flex-1 flex-none w-full p-6 rounded shadow-md h-40 ${TERTIARY_COLOR} animate-pulse cursor-wait`}
          />
        </div>
      </div>
      <div className="flex flex-col max-w-5xl my-0 mx-auto px-2 pt-4">
        <div className="max-w-full md:w-2/4 w-full flex flex-row items-center space-x-4">
          <div
            className={`${TERTIARY_COLOR} animate-pulse cursor-wait flex flex-row flex-1 items-center rounded h-14 shadow-md`}
          >
            <div className="h-8 rounded-full" />
          </div>
          <div
            className={`${TERTIARY_COLOR} cursor-wait animate-pulse h-14 w-14 rounded shadow-md`}
          />
          <div
            className={`${TERTIARY_COLOR} cursor-wait animate-pulse h-14 w-14 rounded shadow-md`}
          />
        </div>
      </div>
      <div className="flex flex-col max-w-5xl my-0 mx-auto px-2 pt-6">
        <div className="flex flex-row space-x-2">
          <div
            className={`${TERTIARY_COLOR} cursor-wait animate-pulse rounded`}
          >
            <div className="h-8 w-80" />
          </div>
        </div>
      </div>
      <div className="flex flex-col max-w-5xl my-0 mx-auto px-2 py-6">
        <div
          className={`h-80 ${TERTIARY_COLOR} cursor-wait animate-pulse rounded`}
        ></div>
      </div>
    </div>
  );
}
