import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect, useRef } from "react";

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

const Map = ({ locations }: any) => {
  console.log(locations, "locations");
  const mapRef = useRef(null);

  const BASE_URL = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/`;
  useEffect(() => {
    if (mapRef.current && locations.length > 0) {
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: locations[0]?.latitude, lng: locations[0]?.longitude },
        zoom: 8,
      });

      locations.forEach((location: any) => {
        const iconUrl = `${BASE_URL}${location.icon.asset._ref.replace('image-', '').replace('-png', '.png')}`;

        console.log(iconUrl,"iconUrl")
        new google.maps.Marker({
          position: { lat: location.latitude, lng: location.longitude },
          map: map,
          icon: {
            url:iconUrl, // Ensure this is the correct URL to your icon
            scaledSize: new google.maps.Size(30, 30), // Adjust size if necessary
          },
        });
      });
    }   
  }, [locations]);

  return <div ref={mapRef} style={{ height: "750px", width: "100%", borderRadius : "32px" }} />;
};

export default function GoogleMapComponent({ locations }: any) {
  return (
    <Wrapper apiKey="AIzaSyBazijMOj67rUPPtVybwi2Nbo90tx7vwZs" render={render}>
      <Map  locations={locations} />
    </Wrapper>
  );
}

