import React from 'react';
class SendMessageform extends React.Component {
    constructor() {
        super();
        this.state = {
            name: null,
            message: null
        }
    }
    handleChangename = e => {
        this.setState({ name: e.target.value })
    }

    handleChangemessage = e => {
        this.setState({ message: e.target.value })

    }

    handleSubmit = e => {
        const data1 = this.state.name;
        const data2 = this.state.message

        e.preventDefault()
        fetch('http://touiteur.cefim-formation.org/send', {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded', // <-- Specifying the Content-Type
            }),

            body: `name=${data1}&message=${data2}` // <-- Post parameters
        })
            .then((response) => response.text())
            .then((responseText) => {
                //  alert(responseText);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        return (
        <form>
           <div className="form-inline">
        <div className="fom-group  mx-sm-3    mb-2">
        <label for="staticEmail2" class="sr-only">Nom</label>
        <input type="text" readonly class="form-control-plaintext"   placeholder="Name" onChange={this.handleChangename} />
        </div> 
        <div className="form-group  mx-sm-3   mb-2">
        <label for="inputPassword2" class="sr-only">Message</label>
        < input type="text" class="form-control-plaintext"  placeholder="Message" onChange={this.handleChangemessage} />
        </div>
        <button onClick={this.handleSubmit} class="btn btn-outline-secondary mx-sm-3   mb-2">Envoie</button>
        </div> 
        </form>
        
           
        );
    }
}
export default SendMessageform;



