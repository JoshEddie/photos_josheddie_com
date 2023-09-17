import React from "react";

export default function Sort({children, sortBy, direction}) {

    const compare =(a, b) => {

        if(sortBy === 'Random') {
            return Math.floor(Math.random() * 3) - 1;
        }

        if (a.props[sortBy] === b.props[sortBy]) {
            return 0;
        }
        else {
            return (a.props[sortBy] < b.props[sortBy]) ? -1 : 1;
        }
    }

    return React.Children.toArray(children).sort(compare);

}