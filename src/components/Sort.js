import React from "react";

export default function Sort({children, sortBy}) {

    const compare =(a, b) => {
        if (a.props[sortBy] === b.props[sortBy]) {
            return 0;
        }
        else {
            return (a.props[sortBy] < b.props[sortBy]) ? -1 : 1;
        }
    }

    return React.Children.toArray(children).sort(compare);

}