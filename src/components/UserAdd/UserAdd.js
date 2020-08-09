import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import './UserAdd.css';

const UserAdd = () => {
    return (
        <div className="main-container">
            <div className="form-container">
                <form className="add-form" noValidate autoComplete="off">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <h1>User Form</h1>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="name" label="Name" placeholder="Name" fullWidth 
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="last-name" label="Last Name" placeholder="Last Name" fullWidth 
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="phone" label="Phone" placeholder="Phone" fullWidth 
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField id="street-number" label="Street Number" placeholder="Street Number" fullWidth 
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField id="street-name" label="Street Name" placeholder="Street Name" fullWidth 
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField id="city" label="City" placeholder="City" fullWidth 
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="email" label="Email" placeholder="Email" fullWidth 
                                InputLabelProps={{ shrink: true }}
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
                            <Button variant="contained" color="primary">
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