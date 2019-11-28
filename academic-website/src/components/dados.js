import React from 'react';
import Header from './header'
import Footer from './footer'



class Dados extends React.Component {
    render() {
        return (
            <div>
                <Header/>

                <section class="impress_area p_120 height-body">
                    <div class="container">
                        <div class="impress_inner text-center">
                            <h2>Looking for a <br />quality and affordable Furniture?</h2>
                            <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace.</p>
                            <a class="main_btn" href="#">Read Details</a>
                        </div>
                    </div>
                </section>

                <Footer/>
                
            </div>
          );
    }
}

export default Dados;
