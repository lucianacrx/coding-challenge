import React, { useState } from "react";
import { getUsers } from '../services/UserService.js'; 

const usePagination = (itemsPerPage = 10, setData) => {
    const [count, setCount] = useState(-1);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(itemsPerPage);
    const [error, setError] = useState(null);
    const defaultLabelDisplayedRows = ({ from, to}) => `Displaying results ${from}-${to}`;

    const handleChangePage = (event, newPage) => {
        getUsers(newPage+1)
        .then(response => response.json())
        .then((response) => {
            setData(response);
            },
            (error) => {
            setError(error);
            }
        )
        setPage(newPage);
    };
    
    return { count, page, rowsPerPage, handleChangePage, defaultLabelDisplayedRows };
}

export default usePagination;