import React from 'react';

export const  getUsers = (page = 1) => {
    const route = `https://randomuser.me/api/?page=${page}&results=15&seed=abc`;
    return fetch(route);
}