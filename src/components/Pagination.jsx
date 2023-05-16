import React from "react";

export default function Pagination({
        postsPerPage,
        totalPosts,
        paginate,  currentPage,
}) {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  return (
    <div className='py-2'>
      <div>
        <nav className='block'>
            <ul className='flex pl-0 rounded list-none flex-wrap'>
                <li>
                    {pageNumbers.map((number) => (
                    <button onClick={() => {paginate(number)}}
                        className={
                        currentPage === number
                            ? "bg-blue border-indigo-500 text-indigo-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border-2 text-sm font-medium"
                            : "bg-white border-gray-300 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                        }
                    >
                        {number}
                    </button>
                    ))}
                </li>
            </ul>
        </nav>
      </div>
    </div>
  );
}
