import { graphql } from "gatsby";
import React from "react";

const pageTemplate = props => {
    const data = {
        nodeFood: props.pageContext.data
    }
    
    console.log(data);
    console.log("just printed data for page" )

    return (
        <div>
            <h4>{data.nodeFood?.title}</h4>
            <p>{data.nodeFood?.recipeInstruction.value}</p>
        </div>
    )
}

export default pageTemplate