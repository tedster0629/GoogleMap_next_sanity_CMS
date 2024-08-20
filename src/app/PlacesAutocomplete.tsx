import React, { useEffect } from 'react';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

interface PlacesAutocompleteProps {
    onAddressSelect: (address: string) => void;
}

const PlacesAutocomplete: React.FC<PlacesAutocompleteProps> = ({ onAddressSelect }) => {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete();

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleSelect = async (address: string) => {
        setValue(address, false);
        clearSuggestions();

        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            onAddressSelect(address);
        } catch (error) {
            console.error("Error fetching geocode:", error);
        }
    };

    return (
        <div>
            <input
                value={value}
                onChange={handleInput}
                disabled={!ready}
                placeholder="Search for a place..."
            />
            {status === 'OK' && (
                <ul>
                    {data.map(({ id, description } : any) => (
                        <li key={id} onClick={() => handleSelect(description)}>
                            {description}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default PlacesAutocomplete;