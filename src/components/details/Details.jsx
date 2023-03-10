import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import { Doughnut } from "react-chartjs-2";

import useStyles from './styles'

const Details = () => {
    const classes = useStyles();

    return ( 
        <Card className={classes.income}>
            <CardHeader title="income"/>
            <CardContent>
                <Typography variant="h5">$50</Typography>
                {/* <Doughnut data="DATA" /> */}
            </CardContent>
        </Card>

    
    );  
}

export default Details;