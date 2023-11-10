import { useEffect } from 'react';
import './CheckoutForm.scss';

function CheckoutForm() {
    const inputs = [
        {
            name: 'personName',
            type: 'text',
            header: 'Name and family name*',
            defaultValue: 'John Smith'
        },
        {
            name: 'city',
            type: 'text',
            header: 'City*',
            defaultValue: 'New York'
        },
        {
            name: 'street',
            type: 'text',
            header: 'Street*',
            defaultValue: 'New Street 84'
        },
        {
            name: 'apartment',
            type: 'text',
            header: 'Apartment',
        },
        {
            name: 'floor',
            type: 'text',
            header: 'Floor',
        },
        {
            name: 'Entrance',
            type: 'text',
            header: 'Name and family name',
        },
        {
            name: 'note',
            type: 'text',
            header: 'Add note',
        },
    ];

    useEffect(() => {
        document
            .querySelector('#personName')
            .addEventListener('input', (event) => {
                event.target.classList.remove('required');
            });
        document.querySelector('#city').addEventListener('input', (event) => {
            event.target.classList.remove('required');
        });
        document.querySelector('#street').addEventListener('input', (event) => {
            event.target.classList.remove('required');
        });
    });

    return (
        <div className="information">
            <h1>Delivery Details</h1>

            <form name="personInfo" id="personInfo">
                {inputs.map((input) => {
                    return (
                        <>
                            <label for={input.name}>{input.header}</label>
                            <input
                                type={input.type}
                                name={input.name}
                                id={input.name}
                                required={input.required}
                                defaultValue={input.defaultValue}
                            />
                        </>
                    );
                })}
            </form>
        </div>
    );
}

export default CheckoutForm;
