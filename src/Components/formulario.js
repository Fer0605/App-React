import React from "react";

class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Nombre: "",
            Apellidos: "",
            Telefono: "",
            Email: "",
            Comentarios: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
        });
    }

    handleSubmit(event) {
        alert("Se enviaron los datos de : " + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
          <div>
            <h2>Contact Form</h2>
            <form>
              <fieldset>
                <div>
                  <div>
                    <label>Nombre</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>Teléfono</label>
                    <input type="tel" />
                  </div>
                </div>
                <div class="formula">
                    <label>Email</label>
                    <input
                      type="text"
                    />
                  </div>
                <div>
                  <input type="button" value="Send" />
                </div>
              </fieldset>
            </form>
            
          </div>
        );
      }
    }
    
    export default Formulario;