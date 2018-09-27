import React from 'react';
import {Button, Card} from "antd";
//import photo from "../../../assets/_DSC0100.JPG";

export const TopPage = ({handleClick}) => {
  return(
    <div style={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center" }} >
      <Card hoverable className="contain"  >
        <h2 style={{ marginTop: "-10px" }}>Project 3</h2>
        <h3 style={{ color: "#2DC5FA" }}>MEAN Stack Web App</h3>
        <Button size="large" onClick={handleClick} icon="down-circle" >Ver presentaciones</Button>
      </Card>
    </div>
  )
};