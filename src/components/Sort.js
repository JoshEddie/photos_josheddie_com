import React from "react";

export default function Sort({children, sortBy, direction}) {

    const compare =(a, b) => {

        if (a.props[sortBy[0]] === b.props[sortBy[0]]) {

            if(sortBy[1]) {
                return (a.props['url'] < b.props['url']) ? -1 : 1;
            }
            else {
                return (a.props['url'] < b.props['url']) ? 1 : -1;
            }

            return 0;
        }
        else {
            if(sortBy[1]) {
                return (a.props[sortBy[0]] < b.props[sortBy[0]]) ? -1 : 1;
            }
            else {
                return (a.props[sortBy[0]] < b.props[sortBy[0]]) ? 1 : -1;
            }
        }
    }

    if(sortBy[0] == "Random") {
        return React.Children.toArray(children).sort(() => Math.random() - 0.5);
    }
    return React.Children.toArray(children).sort(compare);

}