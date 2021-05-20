import React, {useState} from "react";
import ReactDOM from "react-dom";
import Gender from "../components/common/Gender"


// function TicketInfo(){
//     return(
//         <div>
//             <form className="row">
//                 <input className="col-4" type="text" name="firstName" placeholder="First Name" />
//                 <input className="col-4" type="text" name="lastName" placeholder="Last Name"/>
//                 <input className="col-4" type="text" name="age" placeholder="Age"/>
//                 <Gender className="col-4" />
//                 <input className="col-4" type="text" name="phoneNumber" placeholder="Phone Number" />
//                 <input className="col-4" type="text" name="email" placeholder="Email Address" />
//             </form>
//         </div>
//     )
// }

function AddPassenger(){

    const [passenger, setPassenger] = useState({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        phoneNumber: "",
        email: ""
    })

    function handleChange(event){
        const {value,name} = event.target;

        setPassenger(prevVal => {
            return {
                ...prevVal,
                [name]: value
              };
        })
    }

    function handleSubmit(){
        console.log(passenger);
    }

    return(
        <div>
            <form className="row">
                <input onChange={handleChange} className="col-4" type="text" name="firstName" placeholder="First Name" />
                <input onChange={handleChange} className="col-4" type="text" name="lastName" placeholder="Last Name"/>
                <input onChange={handleChange} className="col-4" type="text" name="age" placeholder="Age"/>
                <Gender onChange={handleChange} className="col-4" />
                <input onChange={handleChange} className="col-4" type="text" name="phoneNumber" placeholder="Phone Number" />
                <input onChange={handleChange} className="col-4" type="text" name="email" placeholder="Email Address" />
            </form>

        </div>
    )

}

export default AddPassenger;

// import "./style.css";

// class IncorporationForm extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "",
//       shareholders: [{ name: "" }]
//     };
//   }

//   handleNameChange = evt => {
//     this.setState({ name: evt.target.value });
//   };

//   handleShareholderNameChange = idx => evt => {
//     const newShareholders = this.state.shareholders.map((shareholder, sidx) => {
//       if (idx !== sidx) return shareholder;
//       return { ...shareholder, name: evt.target.value };
//     });

//     this.setState({ shareholders: newShareholders });
//   };

//   handleSubmit = evt => {
//     const { name, shareholders } = this.state;
//     alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
//   };

//   handleAddShareholder = () => {
//     this.setState({
//       shareholders: this.state.shareholders.concat([{ name: "" }])
//     });
//   };

//   handleRemoveShareholder = idx => () => {
//     this.setState({
//       shareholders: this.state.shareholders.filter((s, sidx) => idx !== sidx)
//     });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           placeholder="Company name, e.g. Magic Everywhere LLC"
//           value={this.state.name}
//           onChange={this.handleNameChange}
//         />

//         <h4>Shareholders</h4>

        // {this.state.shareholders.map((shareholder, idx) => (
        //   <div className="shareholder">
        //     <input
        //       type="text"
        //       placeholder={`Shareholder #${idx + 1} name`}
        //       value={shareholder.name}
        //       onChange={this.handleShareholderNameChange(idx)}
        //     />
        //     <button
        //       type="button"
        //       onClick={this.handleRemoveShareholder(idx)}
        //       className="small"
        //     >
        //       -
        //     </button>
        //   </div>
        // ))}
//         <button
//           type="button"
//           onClick={this.handleAddShareholder}
//           className="small"
//         >
//           Add Shareholder
//         </button>
//         <button>Incorporate</button>
//       </form>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<IncorporationForm />, rootElement);



