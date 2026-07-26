function Header() {

    //lets saywe send a request to a backend and get a response
    const appName = 'ChopChop Restaurant'
    return (


        <div  className="" style={{ backgroundColor: 'tomato', color: 'white', padding: '50px 10px', textAlign: 'center' }}>
            <div className="col-md-12 p-3">
            <h1>Welcome to {appName}</h1>
            <p className="slogan">Your favorite restaurant to kill your hunger</p>
            </div>
        </div>
    )
}

export default Header