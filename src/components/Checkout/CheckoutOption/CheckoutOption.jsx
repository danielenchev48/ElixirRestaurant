import { faCreditCard, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './CheckoutOption.scss';

function CheckoutOption() {
    return (
        <div className="payment">
            <div className="options">
                <div className="method">
                    <h2>Options</h2>
                    <div className="cashOption option">
                        <input
                            type="radio"
                            id="cash"
                            name="checkoutOpt"
                            value=""
                            defaultChecked
                        />
                        <label htmlFor="cash">
                            <FontAwesomeIcon
                                icon={faCreditCard}
                                className="icon"
                            />
                            Credit Card
                        </label>
                    </div>
                    <div className="cardOption option">
                        <input
                            type="radio"
                            id="card"
                            name="checkoutOpt"
                            value=""
                        />
                        <label htmlFor="card">
                            <FontAwesomeIcon icon={faWallet} className="icon" />
                            Cash
                        </label>
                    </div>
                </div>
            </div>
            <div className="coupons">
                <h2>Coupon</h2>
                <input
                    type="text"
                    name="coupon"
                    id="coupon"
                    placeholder="Input your coupon here"
                />
                <button>Check coupon</button>
            </div>
        </div>
    );
}

export default CheckoutOption;
