import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import usePagination from '../../hooks/usePagination.js';
import PersonList from './UserList.js';

const UserListComponent = () => {
    const [users, setUsers] = useState([]);
    const setUsersData = (users) => setUsers(users);
    const pagination = usePagination(15, setUsersData);
    const history = useHistory();

    useEffect(() => {
        pagination.handleChangePage(null, 0);
    }, []);


    const goToAddForm = () => {
        history.push("/add");
    }

    return (
        <PersonList users={users.results} pagination={pagination} goToAddForm={goToAddForm}></PersonList>
    );
}

export default UserListComponent;