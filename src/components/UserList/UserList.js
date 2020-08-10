import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

import './UserList.css';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  }
}))(TableCell);

const UserList = ({ users, pagination, goToAddForm }) => {
    return (
      <Container>
        <div className="header-container">
          <h1>User List</h1>
          <Button variant="contained" color="primary" disableElevation startIcon={<AddIcon />} onClick={goToAddForm}>
            Add User
          </Button>
        </div>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <StyledTableCell>Username</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Last Name</StyledTableCell>
                <StyledTableCell>Phone</StyledTableCell>
                <StyledTableCell>Address</StyledTableCell>
                <StyledTableCell>Email</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users && users.map((user) => (
                <TableRow key={user.email}>
                  <TableCell>{user.name.first}.{user.name.last}{user.dob.age}</TableCell>
                  <TableCell >{user.name.first}</TableCell>
                  <TableCell>{user.name.last}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.location.street.number} {user.location.street.name}, {user.location.city}</TableCell>
                  <TableCell>{user.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
            <TableRow>
                {
                    pagination && (
                        <TablePagination
                            count={pagination.count}
                            page={pagination.page}
                            onChangePage={pagination.handleChangePage}
                            labelDisplayedRows={pagination.defaultLabelDisplayedRows}
                            rowsPerPage={pagination.rowsPerPage}
                            rowsPerPageOptions={[]}
                        />
                    )
                }
                
            </TableRow>
          </TableFooter>
          </Table>
        </TableContainer>
      </Container>
    );
}

export default UserList;