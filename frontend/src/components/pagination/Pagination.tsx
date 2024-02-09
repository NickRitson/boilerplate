import { useState, useEffect } from 'react';

type PaginationProps = {
    currentPage: number;
    totalPages: number;
    visiblePages: number;
    updatePage: (currentPage: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, visiblePages, updatePage }: PaginationProps) => {
    const [pagination, setPagination] = useState<number[]>([]);
    
    useEffect(() => {
        const startPage = Math.max(0, currentPage - Math.floor(visiblePages / 2));
        const endPage = Math.min(totalPages, startPage + visiblePages - 1);
        const paginationArray = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
        setPagination(paginationArray);

    }, [currentPage, totalPages, visiblePages]);

    return (
        <div className="flex flex-row gap-2">
            {pagination.map((pageNumber) => (
                <div key={pageNumber}>
                    {pageNumber < totalPages &&
                        <button
                            key={pageNumber}
                            className="flex items-center justify-center w-10 h-10 border rounded-md cursor-pointer border-slate-500"
                            style={{ backgroundColor: currentPage === pageNumber ? 'lightblue' : 'white' }}
                            onClick={() => updatePage(pageNumber)}
                        >
                            {pageNumber + 1}
                        </button>
                    }
                </div>
            ))}
        </div>
    );
}

export default Pagination;