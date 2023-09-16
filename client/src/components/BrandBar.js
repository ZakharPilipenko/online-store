import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import Row from "react-bootstrap/esm/Row";
import Card from "react-bootstrap/Card";
import { Context } from "..";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex">
      {device.brands.map((brand) => (
        <Card
          key={brand.id}
          border={brand.id === device.selectedBrand.id ? "danger" : "light"}
          onClick={() => device.setSelectedBrand(brand)}
          className="p-3"
          style={{ width: "15rem", cursor: "pointer" }}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
