export default function ActionButton({
  data,
  loadMore,
  displayRows,
  scrollToTop,
}: any) {
  return (
    <>
      {data.length > 0 && displayRows * 4 < data.length && (
        <button
          className="rounded bg-gray-800 px-4 py-2 text-sm text-white transition-all duration-300 ease-linear hover:bg-gray-600 dark:bg-gray-400 dark:text-gray-950 dark:hover:bg-gray-200 dark:hover:text-black sm:text-base md:w-60 md:px-6 md:py-3 md:text-lg lg:text-xl xl:w-72 xl:px-8 xl:py-4 xl:text-2xl 2xl:w-96 2xl:px-10 2xl:py-5 2xl:text-3xl"
          onClick={loadMore}
        >
          Load more
        </button>
      )}
      {displayRows * 4 >= data.length && (
        <button
          className="rounded bg-gray-800 px-4 py-2 text-sm text-white transition-all duration-300 ease-linear hover:bg-gray-600 dark:bg-gray-400 dark:text-gray-950 dark:hover:bg-gray-200 dark:hover:text-black sm:text-base md:w-60 md:px-6 md:py-3 md:text-lg lg:text-xl xl:w-72 xl:px-8 xl:py-4 xl:text-2xl 2xl:w-96 2xl:px-10 2xl:py-5 2xl:text-3xl"
          onClick={scrollToTop}
        >
          Back to Top
        </button>
      )}
    </>
  );
}
