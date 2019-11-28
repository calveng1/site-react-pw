import React from 'react';
import Header from './header'
import Footer from './footer'


class Contato extends React.Component {
    render() {
        return (
            <div>
                <Header/>

                <div style={{textAlign: 'center', margin: 50}}>
                    <h1>
                        Table:
                    </h1>
                </div>

                <Footer/>
                
            </div>
          );
    }
}

export default Contato;
