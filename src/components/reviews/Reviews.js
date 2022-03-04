import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import './style.css';

export default function Reviews() {
    const [value, setValue] = React.useState(2);

    return (
        <div className="container-fluid justify-content-center p-4 reviews">
            <div className="card" style={{width: "50%", marginLeft: "25%"}}>
                <div className="card-body">
                    <h4 className="card-title">Customer Name : </h4>
                    <h4 className="card-title">Overall Rating : <Rating name="read-only" value={value} readOnly size="small"/> </h4>

                    <h4>Review :  Some quick example text to build on the card title and make up the bulk of
                        the card's content. </h4>
                </div>
            </div>

        </div>
    );
}
