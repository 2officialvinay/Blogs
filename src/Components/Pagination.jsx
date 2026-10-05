import { useContext } from "react"
import { AppContext } from "../Context/AppContext"

function Pagination() {

  const {page, handlePageChange, totalPages} = useContext(AppContext);

  return (
    <div className="w-full flex justify-center items-center border-1 fixed bottom-0 bg-white py-3 shadow-md">
      <div className="flex justify-between w-11/12 max-w-[670px]">

        <div className="flex gap-x-2">
          { page > 1 &&
            <button
            className="rounded-md border-1 px-4 py-1 cursor-pointer"
            onClick={() => handlePageChange(page-1)}>
              Previous
            </button>
          }

          { page < totalPages &&
            <button
            className="rounded-md border-1 px-4 py-1 cursor-pointer"
            onClick={() => handlePageChange(page+1)}>
              Next
            </button>
          }
        </div>

        <p className="font-bold text-sm">
          Page {page} of {totalPages}
        </p>

      </div>
    </div>
  )
}

export default Pagination