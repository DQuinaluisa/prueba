import React, { Component } from 'react'



export default class Salas extends Component {

   constructor(){
       super ();
       this.state = {
           salaNum: "",
           horario: "",
           pelicula: ""
       }
   } 
  
   submit()
   {
       let url = "http://localhost:4000/api/salas";
       let data = this.state;
       fetch (url, {
           method: 'POST',
           headers: {
            "Content-Type" : "application/json",
            "Accept" : "application/json"
           },
           body : JSON.stringify(data)
       }).then((result)=> {
        result.json().then((resp)=>{
            console.warn("resp", resp)
        })
        
    })
   }

    render() {
        return (
            <div class="w-2/3 mx-auto -400">
                <div class="bg-white  shadow-md rounded my-6">
                    <table class="text-left w-full border-collapse">
                        <thead class="bg-gray-400 rounded my-6">
                            <tr>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"># SALA</th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">PELICULA</th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light">HORARIO</th>
                                <th class="py-4 px-6 bg-grey-lightest font-bold uppercase text-sm text-grey-dark border-b border-grey-light"></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="hover:bg-grey-lighter">
                                <td class="py-4 px-7 border-b border-grey-light">
                                    <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-3 mb-2" 
                                        type="text"
                                        value={this.state.salaNum}
                                        name="salaNum"
                                        placeholder="Ingrese Sala"
                                        onChange={(data) =>{
                                            this.setState({salaNum:data.target.value})
                                          }} />
                                </td>
                                <td class="py-4 px-7 border-b border-grey-light">
                                    <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-3 mb-2"
                                         type="text" 
                                         value= {this.state.pelicula}
                                         name="Pelicula"
                                         placeholder="Ingrese Pelicula"
                                         onChange={(data) =>{
                                            this.setState({pelicula:data.target.value})
                                          }}  />
                                </td>
                                <td class="py-4 px-7 border-b border-grey-light">
                                    <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-3 mb-2" 
                                        type="text"
                                        value={this.state.horario}
                                        name="horario"
                                        placeholder="Ingrese Horario" 
                                        onChange={(data) =>{
                                            this.setState({horario:data.target.value})
                                          }}    />
                                </td>
                                <td class="py-4 px-7 border-b border-grey-light">
                                    <button href="#" class="bg-blue hover:bg-blue-dark text-dark font-bold py-2 px-4 rounded"  onClick={() => {this.submit()}} >Crear</button>
                                    <button href="#" class="bg-green hover:bg-green-dark text-dark font-bold py-2 px-4 rounded">Borrar</button>
                                </td>
                            </tr>
                            <tr class="hover:bg-grey-lighter">
                                <td class="py-4 px-7 border-b border-grey-light">
                                    <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-3 mb-2" type="text" placeholder="Ingrese Sala" />
                                </td>
                                <td class="py-4 px-7 border-b border-grey-light">
                                    <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-3 mb-2" type="text" placeholder="Ingrese Pelicula" />
                                </td>
                                <td class="py-4 px-7 border-b border-grey-light">
                                    <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-3 mb-2" type="text" placeholder="Ingrese Horario" />
                                </td>
                                <td class="py-4 px-7 border-b border-grey-light">
                                    <button href="#" class="bg-blue hover:bg-blue-dark text-dark font-bold py-2 px-4 rounded">Crear</button>
                                    <button href="#" class="bg-green hover:bg-green-dark text-dark font-bold py-2 px-4 rounded">Borrar</button>
                                </td>
                            </tr>
                            <tr class="hover:bg-grey-lighter">
                                <td class="py-4 px-7 border-b border-grey-light">
                                    <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-3 mb-2" type="text" placeholder="Ingrese Sala" />
                                </td>
                                <td class="py-4 px-7 border-b border-grey-light">
                                    <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-3 mb-2" type="text" placeholder="Ingrese Pelicula" />
                                </td>
                                <td class="py-4 px-7 border-b border-grey-light">
                                    <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-3 mb-2" type="text" placeholder="Ingrese Horario" />
                                </td>
                                <td class="py-4 px-7 border-b border-grey-light">
                                    <button href="#" class="bg-blue hover:bg-blue-dark text-dark font-bold py-2 px-4 rounded">Crear</button>
                                    <button href="#" class="bg-green hover:bg-green-dark text-dark font-bold py-2 px-4 rounded">Borrar</button>
                                </td>
                            </tr>
                            <tr class="hover:bg-grey-lighter">
                                <td class="py-4 px-7 border-b border-grey-light">
                                    <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-3 mb-2" type="text" placeholder="Ingrese Sala" />
                                </td>
                                <td class="py-4 px-7 border-b border-grey-light">
                                    <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-3 mb-2" type="text" placeholder="Ingrese Pelicula" />
                                </td>
                                <td class="py-4 px-7 border-b border-grey-light">
                                    <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-3 mb-2" type="text" placeholder="Ingrese Horario" />
                                </td>
                                <td class="py-4 px-7 border-b border-grey-light">
                                    <button href="#" class="bg-blue hover:bg-blue-dark text-dark font-bold py-2 px-4 rounded">Crear</button>
                                    <button href="#" class="bg-green hover:bg-green-dark text-dark font-bold py-2 px-4 rounded">Boraar</button>
                                </td>
                            </tr>
                          
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
