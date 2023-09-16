import React from "react";
import Col from "react-bootstrap/esm/Col";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import star from "../assets/star.png";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
  const router = useNavigate();
  console.log(router);
  return (
    <Col
      md={3}
      className="mt-3"
      onClick={() => router(DEVICE_ROUTE + "/" + device.id)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Card.Img
          variant="top"
          src={"http://localhost:5000/" + device.img}
          width={150}
          height={150}
        />
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <Card.Title>Samsung...</Card.Title>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image width={18} height={18} src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

export default DeviceItem;
