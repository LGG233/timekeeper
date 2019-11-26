import React, { Component } from 'react';

class Table extends Component {
    render() {
        return (
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Entry ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Client</th>
                            <th scope="col">Description</th>
                            <th scope="col">Billed?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>11/18/2019</td>
                            <td>1.00</td>
                            <td>Nicola</td>
                            <td>Set up mailing</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>11/18/2019</td>
                            <td>2.50</td>
                            <td>Poston</td>
                            <td>Draft Restaurant Rule post</td>
                            <td>No</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>11/18/2019</td>
                            <td>1.50</td>
                            <td>Networking</td>
                            <td>Tim Baran, Legal Hackers</td>
                            <td>Not billable</td>
                        </tr>
                    </tbody>
                </table>
                <button className="btn showDay">
                    Today{" "}
                </button>
                <button className="btn showWeek">
                    Week{" "}
                </button>
                <button className="btn showMonth">
                    Month{" "}
                </button>
                <button className="btn showCustom">
                    Custom{" "}
                </button>

            </div>
        );
    }
}

export default Table;
