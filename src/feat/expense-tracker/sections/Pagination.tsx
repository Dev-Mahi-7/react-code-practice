"use client";
interface PaginationProps {
  page: number;
  totalPage: number;
  setPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPage,
  setPage,
}) => {
  const pages = Array.from({ length: totalPage }, (_, index) => index + 1);

  //   handle previous btn
  const handlePrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  //   handle next btn
  const handleNext = () => {
    if (page < totalPage) {
      setPage(page + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
      <button
        className={` px-3 py-2 rounded-md  ${page === 1 ? "cursor-not-allowed bg-gray-200" : " cursor-pointer font-bold bg-white hover:bg-amber-300 "}`}
        disabled={page === 1}
        onClick={handlePrevious}
      >
        Previous
      </button>
      {pages.map((item) => (
        <button
          key={item}
          onClick={() => setPage(item)}
          className={`w-10 h-10 rounded-lg cursor-pointer transition font-medium
            ${page === item ? "bg-amber-300" : "bg-white border border-gray-200 hover:bg-amber-300"}`}
        >
          {item}
        </button>
      ))}
      <button
        className={` px-3 py-2 rounded-md  ${page === totalPage ? "cursor-not-allowed bg-gray-200" : " cursor-pointer font-bold bg-white hover:bg-amber-300 "}`}
        onClick={handleNext}
        disabled={page === totalPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
