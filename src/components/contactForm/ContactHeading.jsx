import MyDynamicTag from '../../../components/Headings/HeadingTemplate';
import headerDecorator from '../../assets/images/header_decorator_dark.png'

const ContactHeading = () => {
    const headings = {
        type: 'h3',
        content: 'CONTACT US',
        alt: '',
        className: 'headerDecorator',
        subheading: 'h6',
        imageBeforeSRC: headerDecorator,
        imageAfterSRC: headerDecorator,
        id: 4,
    };

    return <MyDynamicTag headings={headings} key={headings.id} />;
};

export default ContactHeading;
