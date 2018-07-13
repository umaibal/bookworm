import React from 'react';
import {
    DisplayText,
    Card,
} from '@shopify/polaris';

class About extends React.Component {

    render() {
        return (
            <Card>
                <DisplayText size="small">This app has been inspired by Goodreads.
                   Its goal is to help you keep track of your books,
                   by being able to add and delete books in your collection.
                   A book has a title, description, vendor and price.
                   This way, it will be impossible for you to forget any
                   book you have read in that past!
            </DisplayText>
            </Card>
        );
    }

}

export default About;