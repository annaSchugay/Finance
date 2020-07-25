import React from 'react'
import Table from '../components/statistic/table'
const dashboard = () => {
    const clickHandler = (index) => {
        console.log('click', index)
    }
    return (
    <>
    <h2>Statistic</h2>
    <Table 
        header="header from dashboard"
        onClats={(index) => clickHandler(index)}
        />
    </>
    );
  }

  export default dashboard
