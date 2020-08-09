import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';

const PersonList = (props) => {
    return (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Username</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.persons && props.persons.map((person) => (
                <TableRow key={person.email}>
                  <TableCell>{person.name.first}.{person.name.last}{person.dob.age}</TableCell>
                  <TableCell >{person.name.first}</TableCell>
                  <TableCell>{person.name.last}</TableCell>
                  <TableCell>{person.phone}</TableCell>
                  <TableCell>{person.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
            <TableRow>
                {
                    props.pagination && (
                        <TablePagination
                            count={props.pagination.count}
                            page={props.pagination.page}
                            onChangePage={props.pagination.handleChangePage}
                            rowsPerPage={props.pagination.rowsPerPage}
                            rowsPerPageOptions={[]}
                        />
                    )
                }
                
            </TableRow>
          </TableFooter>
          </Table>
        </TableContainer>
      );
}

export default PersonList;