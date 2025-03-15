import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import ScrollToTop from "../helper/ScrollToTop";
import MoviesAndTvCard from "../components/Movies/MoviesAndTvCard";
import ReactPaginate from "react-paginate";
import { fetchMovies } from "../Services/movieslist";
import { GoArrowLeft,GoArrowRight } from "react-icons/go";

function Movie() {
  const [currentPage, setCurrentPage] = useState(1); 
  const { data, isLoading, isError } = useQuery({
    queryKey: ["popular", currentPage], 
    queryFn: () => fetchMovies(currentPage),
    keepPreviousData: true, 
  }); 
  const handlePageClick = (event) => {
    console.log(event)
    setCurrentPage(event.selected + 1); 
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>An error has occurred. Please try again.</div>;
  }
  console.log(data)
  return (
    <>
      <div className="container flex flex-col mt-28">
        <ScrollToTop />
        <h2 className="text-2xl font-bold mb-10">🎬 Popular</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {data?.data.results.map((item) => (
            <MoviesAndTvCard item={item} key={item.id} />
          ))}
        </div>
        
        <ReactPaginate
          previousLabel={<GoArrowLeft />}
          nextLabel={<GoArrowRight />}
          pageCount={100}
          onPageChange={handlePageClick}
          forcePage={currentPage - 1}
          containerClassName="flex flex-wrap justify-center items-center space-x-2 lg:space-x-6 mt-28"
          pageLinkClassName="px-2 py-1 text-lg  rounded-3xl hover:bg-gray-200 hover:text-gray-900 md:px-3 md:py-1 md:text-sm"
          previousLinkClassName="px- py-2 text-sm  md:px-6 md:py-3 md:text-base"
          nextLinkClassName="px-4 py-2 text-sm  md:px-6 md:py-3 md:text-base"
          activeClassName="bg-gray-200 text-gray-900 rounded-3xl"
          pageRangeDisplayed={3}
          marginPagesDisplayed={2} 
          breakLabel="..."
          breakClassName="text-gray-500"
        />
      </div>
    </>
  );
}

export default Movie;
