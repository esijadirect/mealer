// this child component receives the pageVisits data from its parent component as props, and then it displays that data in the footer.


const Footer = (props) => {

    console.log(props) //this is how we can access the props data in the child component.

    return (
        <div>
            <h1>Footer</h1>
            <p className="text-center">Visits: {props.disp}</p>
        </div>
    )
}

export default Footer