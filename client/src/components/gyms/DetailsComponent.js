import React from 'react';
import {Link} from 'react-router-dom';


function DetailsComponent(props){
    console.log("the props in the details >>>>> ", props.info)
    return(
        <div style={{border: '0.5px solid grey', height: '300px', borderRadius: '4px', width: '30%', float: 'left', margin: '10px', padding: '10px'}}>
            This is Details component
            <h2>{props.info.name}</h2>
            <h6>{props.info.formatted_phone_number}</h6>
            {props.info.photo &&
            // <img src={props.info.photo[0].html_attributions[0].match(^href=(.*)>$)} alt=""/>
            <h2>hi</h2>
            }
            <h6>{props.info.rating}</h6>

            {/* <Link to ={"/details/"+props.beer._id}> See Details </Link> */}
        </div>
    )
}
export default DetailsComponent;
