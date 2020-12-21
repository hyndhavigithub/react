import React from 'react'

function Home(props) {
    return (
        <div>
            Hello {props.name} {props.id} {props.branch}
        </div>
    )
}

export default Home;
