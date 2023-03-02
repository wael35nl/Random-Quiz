import React from "react";

const NowOnline = ({ nowOnline }) => {

    return (
        <h2 style={{ backgroundColor: 'green', borderRadius: '15px', padding: '0.3em 0.3em 0.1em 0.3em' }}>Currently online: &nbsp;&nbsp; {nowOnline}</h2>
    )
}

export default NowOnline;