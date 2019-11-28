import React from 'react';

class FooterAdmin extends React.Component {
    
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', background: 'black'}}>
                <p style={{margin: '10px 5px'}}>Desenvolvedor:</p>
                <p style={{margin: '10px 5px'}}>Calven Martins</p>
                <p style={{margin: '10px 5px'}}><a href='mailto:calvengabriel@gmail.com' style={{color: '#a5a5a5d1'}}>calvengabriel@gmail.com</a></p>
                        
            </div>
          );
    }
}
export default FooterAdmin;