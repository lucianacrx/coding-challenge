import React, { useState, useEffect } from 'react';
import usePagination from '../../hooks/usePagination.js';
import PersonList from './UserList.js';

const UserListComponent = () => {
    const [users, setUsers] = useState([]);
    const setUsersData = (users) => setUsers(users);
    const pagination = usePagination(15, setUsersData);

    useEffect(() => {
        pagination.handleChangePage(null, 0);
    }, []);

    return (
        <PersonList users={users.results} pagination={pagination}></PersonList>
    );
}

export default UserListComponent;