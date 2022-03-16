import React from "react";

class Alert extends React.Component {
    render() {
        return (
            <>
                <div className="alert alert-primary" role="alert">
                    A simple primary alert—check it out!
                </div>
                <div className="alert alert-secondary" role="alert">
                    A simple secondary alert—check it out!
                </div>
                <div className="alert alert-success" role="alert">
                    A simple success alert—check it out!
                </div>
                </>

        );
    }

}
export default Alert;