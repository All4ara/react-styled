import React from 'react'
import ListingsSection from '../components/ListingsSection'

const Homes = () => {
    return (
        <>
            {/* <ListingsSection /> */}
            
            <div className="container" >
                <div className="row">
                    <h1 style={{padding: "4rem 0", margin: 'auto'}}>Dream Home Search</h1>
                    <iframe src="https://matrix.bnymls.com/Matrix/public/IDX.aspx?idx=3c10134" width="100%" height="1000px" frameborder="0" marginwidth="0" marginheight="0"></iframe>
                </div>
            </div>
            
        </>
    )
}

export default Homes
