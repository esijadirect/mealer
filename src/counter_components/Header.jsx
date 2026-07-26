function Header({ setBalance, balance }) {
    return (
        <>
            <div className="col-md-10 col-lg-8 col-xl-7">
                <div className="col-md-8 offset-md-2 text-center">
                    <h1>Bank App</h1>
                    <p> Your Balance: <span className="badge bg-primary">{balance}</span></p>
                </div>
            </div>
        </>
    )}


export default Header