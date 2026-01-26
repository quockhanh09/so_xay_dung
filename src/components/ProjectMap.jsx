import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const containerStyle = {
  width: "700px",
  height: "700px",
  borderRadius: 16,
  boxShadow: "0 4px 32px rgba(0,0,0,0.10)",
  margin: "0 auto",
};

const addressList = [
  { name: "15c Ng. Bà Triệu, Lê Đại Hành, Hai Bà Trưng, Hà Nội", coords: [21.0145, 105.8497] },
  { name: "63 P. Nguyễn Đình Chiểu, Lê Đại Hành, Hai Bà Trưng, Hà Nội", coords: [21.0137, 105.8492] },
  { name: "1 Đ. Đại Cồ Việt, Bách Khoa, Hai Bà Trưng, Hà Nội", coords: [21.0052, 105.8496] },
{ name: "Xã đàn, Hà Nội", coords: [21.0152543, 105.8320871] },
];

const center = [21.0285, 105.8542]; // Trung tâm Hà Nội

const ProjectMap = () => {
  const [addresses, setAddresses] = useState(addressList);

  return (
    <div style={containerStyle}>
      <MapContainer
        center={center}
        zoom={13}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 16,
        }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {addresses.length === 0 ? (
          <Popup position={center}>
            <strong>Đang tìm vị trí các địa chỉ...</strong>
          </Popup>
        ) : (
          addresses.map((item, idx) => (
            <Marker key={idx} position={item.coords}>
              <Popup>
                <strong>{item.name}</strong>
              </Popup>
            </Marker>
          ))
        )}
      </MapContainer>
    </div>
  );
};

export default ProjectMap;
