import LocationData from "./Component/LocationData";

const locationValues = [
  { name: "New Delhi", lat: 28.6139, lng: 77.209 },
  { name: "Mumbai", lat: 19.076, lng: 72.8777 },
  { name: "Bengaluru", lat: 12.9716, lng: 77.5946 },
  { name: "Hyderabad", lat: 17.385, lng: 78.4867 },
  { name: "Chennai", lat: 13.0827, lng: 80.2707 },
  { name: "Kolkata", lat: 22.5726, lng: 88.3639 },
  { name: "Jaipur", lat: 26.9124, lng: 75.7873 },
  { name: "Pune", lat: 18.5204, lng: 73.8567 },
  { name: "Ahmedabad", lat: 23.0225, lng: 72.5714 },
  { name: "Patna", lat: 25.5941, lng: 85.1376 },
];

const App = () => {
  return (
    <div className="p-4">
      <LocationData
        locations={locationValues}
        zoom={4}
      />
    </div>
  );
};

export default App;
