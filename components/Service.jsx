import 'react';
import {useSelector} from "react-redux";

const Service = (props) => {
    // If you need to work with state directly
    const state = useSelector(state => state);
    console.log({stateInServiceComponent: state})

    return (
        <div>
            {props.name}
        </div>
    )
}

export default Service;
