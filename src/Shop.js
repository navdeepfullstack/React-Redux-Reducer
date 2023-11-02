import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index'

const Shop = () => {
    const dispatch = useDispatch();
    const { debitMoney, creditMoney } = bindActionCreators(actionCreators, dispatch);
    return (
        <div>
            <h2>Debit/Credit Money</h2>
            {/* <button className='btn btn-danger mx-2' onClick={()=>{dispatch(actionCreators.debitMoney(100))}} >-</button>
            Update Balance
            <button className='btn btn-success mx-2' onClick={()=>{dispatch(actionCreators.creditMoney(100))}} >+</button>
             */}
            <button className='btn btn-danger mx-2' onClick={() => { debitMoney(100) }} >-</button>
            Update Balance
            <button className='btn btn-success mx-2' onClick={() => { creditMoney(100) }} >+</button>
        </div>
    )
}

export default Shop
