import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import './UserAdd.css';

const UserAdd = ({ values, handleChange, handleSubmit }) => {
    return (
        <div className="main-container">
            <div className="form-container">
                <form className="add-form" noValidate autoComplete="off">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <h1>User Form</h1>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="name" name="name" label="Name" placeholder="Name" fullWidth value={values.name}
                                InputLabelProps={{ shrink: true }} onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField id="last-name" name="last-name" label="Last Name" placeholder="Last Name" fullWidth 
                            value={values.lastName} InputLabelProps={{ shrink: true }} onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="phone" name="phone" label="Phone" placeholder="Phone" fullWidth value={values.phone}
                                InputLabelProps={{ shrink: true }} onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField id="street-number" name="street-number" label="Street Number" placeholder="Street Number" fullWidth 
                                value={values.streetNumber} InputLabelProps={{ shrink: true }} onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField id="street-name" name="street-name" label="Street Name" placeholder="Street Name" fullWidth 
                                value={values.streetName} InputLabelProps={{ shrink: true }} onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField id="city" name="city" label="City" placeholder="City" fullWidth value={values.city}
                                InputLabelProps={{ shrink: true }} onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="email" name="email" label="Email" placeholder="Email" fullWidth value={values.email}
                                InputLabelProps={{ shrink: true }} onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justify="space-between" alignItems="flex-end" className="button-row">
                        <Grid item xs={2}>
                            <Button variant="contained" color="primary">
                                Back to list
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button variant="contained" color="primary" onClick={handleSubmit}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    )
}

export default UserAdd;