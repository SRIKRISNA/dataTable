// import { useState } from 'react';
import dataJson from '../data.json';
import './table.css';

const TableData = () => {
    var totalprice = 0;
    const DisplayTableData = dataJson.map((detail) => {
        return (
            <tr className='tbl'>
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
    
    const total = dataJson.map((sum) => {
        return(
           totalprice = totalprice + (sum.price * sum.qty)
        )
    })
    var totalRows = total.length-1;
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
                        <tr id='headeTbl'>
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
                        <tr>
                            <td colSpan='5'>Grand Total </td>
                            <td>{total[totalRows]}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
export default TableData;