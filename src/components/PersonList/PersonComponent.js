import React, { useState, useEffect } from 'react';
import useFetchData from '../../hooks/useFetchData.js';
import usePagination from '../../hooks/usePagination.js';
import PersonList from './PersonList.js';

const PersonComponent = () => {
    const persons = useFetchData("https://randomuser.me/api/", "?page=1&results=15&seed=abc").data;
    const pagination = usePagination(persons, 15);

    return (
        <PersonList persons={persons.results} pagination={pagination}></PersonList>
    );
}

export default PersonComponent;