import React, { Component } from "react";
const itemDiv = {
  display: "flex",
  justifyContent: "space-between",
  margin: "50px 0",
  border: "1px solid white",
  borderRadius: "9px",
  alignItems: "center",
  backgroundColor: "white",
};

const buttonDiv = {
  borderLeft: "2px solid",
  padding: "20px 10px 20px 20px",
  backGroundColor: "#FFFFFF",
  width: "200px",
  display: "flex",
  justifyContent: "center",
};

const h4Style = {
  marginLeft: "10px",
};

const removeButtonStyle = {
  padding: "8px",
  marginLeft: "10px",
  backgroundColor: "#ff3333",
  color: "white",
  border: "none",
  borderRadius: "6px",
};

class ToDOItem extends Component {
  buttonColors() {
    if (this.props.complete === false) {
      return {
        padding: "8px",
        borderRadius: "8px",
        color: "white",
        fontWeight: "bold",
        backgroundColor: "#5BE1C4",
      };
    } else {
      return {
        padding: "8px",
        borderRadius: "8px",
        color: "#5BE1C4",
        backgroundColor: "#ffff55",
        fontWeight: "bold",
        border: "none",
        boxShadow: "1px 3px 5px #ffffa18",
      };
    }
  }

  buttons() {
    if (this.props.complete === true) {
      return "Undo";
    } else {
      return "Mark as done";
    }
  }

  render() {
    return (
      <div style={itemDiv} className="item-div">
        <h4 style={h4Style}>{this.props.description}</h4>
        <div style={buttonDiv}>
          <button
            onClick={() => this.props.buttonHandle(this.props.description)}
            style={this.buttonColors()}
          >
            {this.buttons()}
          </button>
          <button
            style={removeButtonStyle}
            onClick={() =>
              this.props.deleteButtonHandle(this.props.description)
            }
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default ToDOItem;
