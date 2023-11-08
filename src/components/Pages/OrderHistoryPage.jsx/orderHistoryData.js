import pizza from '../../../assets/images/menu-items/italian-pizza.jpg'
import ceaserSal from '../../../assets/images/menu-items/cesar-salad.jpg'
import itSalad from '../../../assets/images/menu-items/italian-salad.jpg'
import caesar from '../../../assets/images/menu-items/caesar.jpg'
import bbq from '../../../assets/images/menu-items/bbq.jpg'
import swiss from '../../../assets/images/menu-items/swiss.jpg'
import cheesecake from '../../../assets/images/menu-items/cheesecake.png'
import cremeBrulee from '../../../assets/images/menu-items/creme-brulee.png'

const orderHistoryData = [
    {
        id: 1,
        items: [
            {
                product: 'Italian Pizza',
                quantity: 2,
                price: 14.49,
            },
        ],
        date: '11.09.2023',
        orderAddress: 'Mladost 49, Varna, Bulgaria',
        image: [pizza],
    },
    {
        id: 2,
        items: [
            {
                product: 'Cesar Salad',
                quantity: 1,
                price: 9.99,
            },
            {
                product: 'Italian Salad',
                quantity: 1,
                price: 14.49,
            },
        ],
        date: '15.08.2023',
        orderAddress: 'str.Andrei Saharov 19, Varna, Bulgaria',
        image: [
            ceaserSal,
            itSalad,
        ],
    },
    {
        id: 3,
        items: [
            {
                product: 'Cesar Pizza',
                quantity: 2,
                price: 14.49,
            },
            {
                product: 'Pizza BBQ',
                quantity: 1,
                price: 7.99,
            },
        ],
        date: '26.07.2023',
        orderAddress: 'str.Andrei Saharov 19, Varna, Bulgaria',
        image: [
            caesar,
            bbq,
        ],
    },
    {
        id: 4,
        items: [
            {
                product: 'Pizza Swiss',
                quantity: 1,
                price: 17.99,
            },
        ],
        date: '04.07.2023',
        orderAddress: 'str.Andrei Saharov 19, Varna, Bulgaria',
        image: [swiss],
    },
    {
        id: 5,
        items: [
            {
                product: 'Cheese Cake',
                quantity: 1,
                price: 4.5,
            },
            {
                product: 'Creme Brulee',
                quantity: 1,
                price: 7.49,
            },
        ],
        date: '15.06.2023',
        orderAddress: 'str.Andrei Saharov 19, Varna, Bulgaria',
        image: [
            cheesecake,
            cremeBrulee,
        ],
    },
];

export default orderHistoryData;
