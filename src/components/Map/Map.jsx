import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';


const Map = ({ centerCoordinates }) => {

  return (
    <MapContainer
      center={centerCoordinates}
      zoom={16}
      style={{ height: '40vh', width: '100vw' }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker 
        position={centerCoordinates}
        eventHandlers={{
          click: () => {
            window.open('https://advanceacademy.bg', '_blank');
          }
        }}
        />
    </MapContainer>
  );
};

export default Map