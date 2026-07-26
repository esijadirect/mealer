//another way a child can retrieve props is by using destructuring. 
// Instead of accessing the props object directly, 
// we can extract the specific prop we want to use by using curly braces in the function signature. 
// For example, in the Footer component, we can extract the disp prop like this: const Footer = ({ disp }) => { ... }. Then, we can use the disp variable directly in our JSX code without having to reference props.disp.

function Hero({cats}) {

    return (
        <div> 
            
            
                {
                 cats.map(function(cat) {
                    return(<p> {cat} </p>)
                 }
                )}
            
        </div>
    )
}

export default Hero