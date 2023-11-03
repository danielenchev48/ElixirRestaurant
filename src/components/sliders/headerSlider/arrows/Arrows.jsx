import './Arrows.scss';
import arrow from '../../../../assets/images/btn-prev.png';

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
}

function NextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
}

export { PrevArrow, NextArrow };
