import React, { Component } from 'react';
import 'bulma/css/bulma.css'

class Section extends Component {
    constructor(props){
        super(props);
    }

    render() {

        <section class = {this.props.class}>

        {this.props.children}

        </section>

    }
}

export default Section;