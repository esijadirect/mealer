//foorter to consume what is inside our AppNameContext: useContext(whuch you are consuming)

import { useContext } from "react";
import { AppNameContext } from "../main.jsx";


const Footer = () => {
  const { appName } = useContext(AppNameContext);

  return (
    <div className="row footer pt-5 pb-2">
      <div className="col text-center">
        <h5> Copyright &copy; {appName} 2025</h5>
       
      </div>
    </div>
  )
}

export default Footer
