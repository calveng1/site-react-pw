import React from 'react';
import Header from './header'
import Footer from './footer'


class Home extends React.Component {
    render() {
        return (
            <div>
                <Header/>

                <section className="home_banner_area height-body">
                    <div className="banner_inner h-100">
                        <div className="container h-100">
                            <div className="row h-100">
                                <div className="col-lg-12 h-100">
                                    <div className="banner_content h-100 d-flex justify-content-center align-items-center">
                                        <h2>Seja Bem vindo Professor</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer/>
                
            </div>
          );
    }
}

export default Home;
