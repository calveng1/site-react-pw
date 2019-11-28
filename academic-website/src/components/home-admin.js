import React from 'react';
import HeaderAdmin from './header-admin'
import FooterAdmin from './footer-admin'
import axios from 'axios';



class HomeAdmin extends React.Component {
    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/http://educacao.dadosabertosbr.com/api/escolas/buscaavancada?enemMin=550&cidade=4314100`)
            .then(res => {
                const escolas = res.data[1];
                console.log(res.data[1])
                this.setState({ escolas });
            })
    }
    constructor(props) {
        super(props)
        this.state = {
            escolas: []
        }
    }
    render() {
        return (
            <div>
                <HeaderAdmin />

                <section className="impress_area p_120 height-body">
                    <div className="container">
                        <div className="impress_inner text-center">
                            {
                                this.state.escolas.map((person, i) => {
                                    return <li key={i}>
                                        {person.nome}
                                    </li>
                                })
                            }
                        </div>
                    </div>
                </section>


                <FooterAdmin />

            </div>
        );
    }
}

export default HomeAdmin;
