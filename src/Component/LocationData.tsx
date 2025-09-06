import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({ iconRetinaUrl, iconUrl, shadowUrl });

interface ILocation {
  name: string;
  lat: number;
  lng: number;
}

interface IMapComponentProps {
  locations: ILocation[];
  zoom?: number;
}

const LocationData: React.FC<IMapComponentProps> = ({
  locations,
  zoom = 4,
}) => {
  return (
    <div className="flex flex-col items-center p-4 w-full h-[500px]" >
      <MapContainer
        center={[20.5937, 78.9629]}
        zoom={zoom}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        {locations.map((curr, idx) => (
          <Marker position={[curr.lat, curr.lng]} key={idx}></Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default LocationData;
