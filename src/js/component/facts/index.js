/**
 * Created by RBhatnagar on 3/16/2018.
 */

import React from 'react';
import {Table, Grid, Col, Row  } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Facts(props) {
    var data = [];
    data = props.facts;
    console.log("Rajeev2 Here...", props.facts);
    return (
        <Grid>
            <Col xs={12} sm={6}>
                <Table responsive>
                    <thead>
                        <th><h5>Id</h5></th>
                        <th><h5>Text</h5></th>
                        <th><h5>IpId</h5></th>
                        <th><h5>CreatedAt</h5></th>
                        <th><h5>UpdatedAt</h5></th>
                    </thead>
                    <tbody>
                    {
                        data.map(row => (

                            <tr>
                                <td>{row.id}</td>
                                <td>{row.text}</td>
                                <td>{row.ip_id}</td>
                                <td>{row.created_at}</td>
                                <td>{row.updated_at}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </Col>
        </Grid>
    )
}