import MyDynamicTag from '../../../components/Headings/HeadingTemplate';
import Separator from '../../../assets/images/slide-separator.png'
import SeparatorOrange from '../../../assets/images/slide-separator_orange.png'
import SeparatorGreen from '../../../assets/images/slide-separator_green.png'
import SeparatorYellow from '../../../assets/images/slide-separator_yellow.png'

const GalleryHeading = () => {
    const headings = {
        type: 'h2',
        content: 'Our Delicious Creations',
        alt: '',
        className: 'headerDecorator',
        subheading: 'h5',
        subcontent: 'A Visual Feast of Authentic Italian Pizzas',
        imageBeforeSRC: Separator,
        imageAfterSRC: Separator,
        id: 4,
    };

    return <MyDynamicTag headings={headings} key={headings.id} />;
};

const RestaurantHeading = () => {
    const headings = {
        type: 'h3',
        content: 'The Restaurant',
        alt: '',
        className: 'headerDecorator',
        subheading: 'h5',
        subcontent: '',
        imageBeforeSRC: SeparatorOrange,
        imageAfterSRC: SeparatorOrange,
        id: 4,
    };

    return <MyDynamicTag headings={headings} key={headings.id} />;
};

const InteriorHeading = () => {
    const headings = {
        type: 'h3',
        content: 'A Look Inside',
        alt: '',
        className: 'headerDecorator',
        subheading: 'h5',
        subcontent: '',
        imageBeforeSRC: SeparatorOrange,
        imageAfterSRC: SeparatorOrange,
        id: 4,
    };

    return <MyDynamicTag headings={headings} key={headings.id} />;
};

const PizzasHeading = () => {
    const headings = {
        type: 'h3',
        content: 'Our Delicious Pizzas',
        alt: '',
        className: 'headerDecorator',
        subheading: 'h5',
        subcontent: '',
        imageBeforeSRC: SeparatorOrange,
        imageAfterSRC: SeparatorOrange,
        id: 4,
    };

    return <MyDynamicTag headings={headings} key={headings.id} />;
};

const SaladsHeading = () => {
    const headings = {
        type: 'h3',
        content: 'Savor Our Scrumptious Salads',
        alt: '',
        className: 'headerDecorator',
        subheading: 'h5',
        subcontent: '',
        imageBeforeSRC: SeparatorGreen,
        imageAfterSRC: SeparatorGreen,
        id: 4,
    };

    return <MyDynamicTag headings={headings} key={headings.id} />;
};

const DessertsHeading = () => {
    const headings = {
        type: 'h3',
        content: 'Indulge in Irresistible Desserts',
        alt: '',
        className: 'headerDecorator',
        subheading: 'h5',
        subcontent: '',
        imageBeforeSRC: SeparatorYellow,
        imageAfterSRC: SeparatorYellow,
        id: 4,
    };

    return <MyDynamicTag headings={headings} key={headings.id} />;
};

export {
    GalleryHeading,
    RestaurantHeading,
    InteriorHeading,
    PizzasHeading,
    SaladsHeading,
    DessertsHeading,
};
