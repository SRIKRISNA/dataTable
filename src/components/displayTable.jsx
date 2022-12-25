// import { useState } from 'react';
import dataJson from '../data.json';
import './table.css';

const TableData = () => {
    // var total = 0;
    const DisplayTableData = dataJson.map((detail) => {
        return (
            <tr>
                <td></td>
                <td>{detail.name}</td>
                <td>{detail.price}</td>
                <td>{detail.uom}</td>
                <td>{detail.qty}</td>
                <td>{detail.price*detail.qty}</td>
            </tr>
            
        )
    })
    // total = total + {detail.price*detail.qty}
    const total = (parseInt(dataJson.price) * parseInt(dataJson.qty));
    return (
        <div className='container'>
            <div className="heading">
               <h2>Display Data Table</h2>
            </div>
            {/* <div className="tabledata">
                {JSON.stringify(dataJson)}
            </div> */}
            <div className="table">
                <table border="1px">
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>NAME OF MATERIAL</th>
                            <th>PRICE</th>
                            <th>UOM</th>
                            <th>QTY</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {DisplayTableData}
                    </tbody>
                    <tfoot>
                        <tr style={{float:"right"}}>
                            Grand Total {total}
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
export default TableData;