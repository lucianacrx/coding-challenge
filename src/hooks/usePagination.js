import React from "react";

const usePagination = (itemList, itemsPerPage = 10) => {
    const [count, setCount] = React.useState(-1);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(itemsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    return { count, page, rowsPerPage, handleChangePage };
}

export default usePagination;