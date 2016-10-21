import React from "react"
import {connect} from "react-redux"

import {fetchAdventures} from "../actions/aventureActions";


@connect((store) => {
    return {
        adventures: store.adventures
    };
})
export default class Layout extends React.Component {
    componentWillMount() {
        this.fetchAdventures();
    }

    fetchAdventures() {
        this.props.dispatch(fetchAdventures())
    }

    render() {
        const {adventures} = this.props;
        var mappedAdventures;

        if (adventures.fetched) {
            mappedAdventures = adventures.adventures.map(adventure =>
                <div class="col-4 col-m-4" key={adventure.id} style={{margin: 0}}>
                    <a href={adventure.url} target="_blank">
                        <div style={{
                            paddingTop: 10,
                            background: 'url(' + adventure.img + ')',
                            backgroundSize: 'contain',
                            width: '99%',
                            height: '500px',
                            backgroundRepeat: 'no-repeat',
                        }}>
                            <h3>{adventure.title}</h3>
                        </div>
                    </a>
                </div>);
        }

        return <div>
            <Navbar/>
            {mappedAdventures}
        </div>
    }
}

export class Navbar extends React.Component {
    render() {
        return <div >
            <img class="image" width={"100%"} src="static/img/boats.png"/>

            <div class="logo">
                <img src="static/img/r-shape.png"/>
            </div>
            <h1>HUGE AND POWERFUL <br/> STATEMENT</h1>
            <ul>
                <li><a href="#contact" class="orangeButton">CONTACT</a></li>
                <li><a href="#workshop">WORKSHOPS</a></li>
                <li><a href="#schedule">SCHEDULE</a></li>
                <li><a href="#speakers">SPEAKERS</a></li>
            </ul>
        </div>
    }
}