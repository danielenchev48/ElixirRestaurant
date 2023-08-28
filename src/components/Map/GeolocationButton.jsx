import { useState } from "react"
import { Button } from "react-bootstrap"

const GeolocationButton = () => {
    const [coordinates, setCoordinates] = useState(null)

    //Function that gets users location in coordinates
    const getLocation = () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords
                    setCoordinates({latitude, longitude})
                },
                (error) => {
                    console.log('Error getting location: ', error);
                }
            );
        } else {
            console.log('Geolocation is not supported by your browser.');
        }
    }

    return (
        <div>
            <Button onClick={getLocation} variant="success">Get My Geolocation</Button>{' '}
            {coordinates && <p>Latitude: {coordinates.latitude}, Longitude: {coordinates.longitude}</p>}  
        </div>
    )
}

export default GeolocationButton