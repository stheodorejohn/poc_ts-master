import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

function AddressDetails(props){
    const {
        formValues: { firstName, lastName, address1,address2,city,state,zipcode,country},
    } = props

    return(
        <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom >
                Address Details
            </Typography>
            <Typography gutterBottom>{`Name : ${firstName} ${lastName}`}  </Typography>
            <Typography gutterBottom>{`Address : ${address1} ${address2} `}</Typography>
            <Typography gutterBottom>{`City : ${city}`} </Typography>
            <Typography gutterBottom> {`State : ${state}`}  </Typography>
            <Typography gutterBottom> {`Pincode : ${zipcode}`}  </Typography>
            <Typography gutterBottom> {`Country : ${country}`}  </Typography>

            
            
        </Grid>
    )

} 

export default AddressDetails
