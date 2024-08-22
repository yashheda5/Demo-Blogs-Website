import React from 'react'
import { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

export default function Pagination() {
    const { totalPages, page, handlePageChange } = useContext(AppContext);

    return (
        <div className='w-full border-2 flex justify-center items-center fixed bottom-0 bg-white '>
            <div className='max-w-[670px] flex justify-between items-center w-full p-2'>
                {/* Previous Button */}
                {page > 1 && (
                    <button
                        className='rounded-md border-2 px-4 py-2'
                        onClick={() => handlePageChange(page - 1)}
                    >
                        Previous
                    </button>
                )}

                {/* Page Indicator */}
                <p className='font-bold text-center'>
                    Page {page} of {totalPages}
                </p>

                {/* Next Button */}
                {page < totalPages && (
                    <button
                        className='rounded-md border-2 px-4 py-2'
                        onClick={() => handlePageChange(page + 1)}
                    >
                        Next
                    </button>
                )}
            </div>
        </div>
    )
}
