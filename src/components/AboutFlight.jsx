import React,{ Component } from "react";

class AboutFlight extends Component {
  constructor(props) {
    super(props);
  }
  //use this.props.flight

  flight = { "_id": { "$oid": "60a9232ababefd25df1d610f" }, "airplane": { "_id": { "$oid": "6099207cb19ce326bda8cf75" }, "name": "Air India", "number": "AI 1102", "__v": 0 }, "from": { "_id": { "$oid": "6098fc70edc9ca288d67b7db" }, "name": "Chennai Airport", "abbrevation": "MAA", "__v": 0 }, "to": { "_id": { "$oid": "6098fcdbedc9ca288d67b7dd" }, "name": "Mumbai Airport", "abbrevation": "MUM", "__v": 0 }, "serviceClass": { "_id": { "$oid": "60a91f0c09f99923549eb1e4" }, "name": "Economy", "__v": 0 }, "departure": { "$date": "2021-05-18T18:30:00.000Z" }, "arrival": { "$date": "2021-05-19T21:30:00.000Z" }, "price": { "adult": 5200, "child": 4800 }, "seatsLeft": 150, "__v": 0 };



  render() {
    console.log(this.props.flight)

    return (

      <div className='container' style={{ "marginTop": "2%" }}>
        <div className="row ticket" id="row-card" style={{ "justifyContent": "center" }} >

          <div className="col-sm-8" >
            <div className="card">
              <div className="card-header">
                <div className="row" id="row-header">
                  <div className="col-4">
                  <h5> {this.flight.airplane.name}</h5>
                  </div>
                  <div className="col-4" style={{ "textAlign": "center" }}>
                    {this.flight.serviceClass.name}
                  </div>
                  <div className="col-4" >
                    <h6 id="card-head" style={{ "textAlign": "right" }}>{this.flight.airplane.number}</h6>
                    {/* <h6 style="text-align:right;color:green">Rs. {fli.price}</h6> */}
                  </div>
                </div>
              </div>
              <div className="card-body"  >
                <div className="row">
                  <div className="col-3">
                  <div className="from">
                    <div className="row">
                      <i className="fa fa-map-marker fa-2x " aria-hidden="true" style={{ 'textAlign': 'center',"color": "green" }}></i>
                    </div>
                    </div>
                    <h5 className="card-title" style={{ "textAlign": "center" }}>{this.flight.from.name}</h5>
                    <h6 className="card-title" style={{ "textAlign": "center" }}>{this.flight.departure.$date.substring(0, 10)}</h6>
                    <p style={{ "textAlign": "center" }}>{this.flight.departure.$date.substring(11, 19)}</p>
                  </div>
                  <div className="col-6" >
                    <div className="row">
                    <i class="fa fa-arrow-right fa-2x" aria-hidden="true" style={{'color':'green','textAlign':'center','paddingTop':'10%'}}></i>
                    </div>
                  </div>
                  <div className="col-3">
                  <div className="to">
                    <div className="row">
                      <i className="fa fa-map-marker fa-2x " aria-hidden="true" style={{ 'textAlign': 'center', "color": "green"}}></i>
                    </div>
                    </div>
                    <h5 className="card-title" style={{ "textAlign": "center" }}>{this.flight.to.name}</h5>
                    <h6 className="card-title" style={{ "textAlign": "center" }}>{this.flight.arrival.$date.substring(0, 10)}</h6>
                    <p style={{ "textAlign": "center" }}>{this.flight.arrival.$date.substring(11, 19)}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>      
      </div>
    )
  }
};

export default AboutFlight;
