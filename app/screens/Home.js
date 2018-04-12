import React, {Component} from 'react';
import {StatusBar, Text} from 'react-native';

import {Container} from '../components/Container';

class Home extends Component {
    
    render() {
        return (
            
            <Container>
                <StatusBar backgroundColor="blue" barStyle="light-content"/>
                <Text style={{
                    color: 'white',
                    fontSize: 120,
                }}>
                    🐻 Hi!
                </Text>
            </Container>
        );
    }
}

export default Home;