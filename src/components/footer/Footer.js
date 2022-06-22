import React from 'react'

function Footer() {
    const today = new Date();
    return (
        <>
            <footer className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6">
                        {today.getFullYear()} © Mr.Refill.
                        </div>
                        <div className="col-sm-6">
                            <div className="text-sm-right d-none d-sm-block">
                                 Developed by Department of I.C.T.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer