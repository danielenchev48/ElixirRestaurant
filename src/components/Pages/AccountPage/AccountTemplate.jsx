import { useEffect } from 'react';
import './AccountTemplate.scss';

function AccountTemplate(props) {
    const { settings } = props;

    useEffect(() => {
        document.getElementById(settings.header).classList.add('active');
    }, []);

    return (
        <>
            <div className="profilePage">
                <div className="profileContainer">
                    <div className="profileNav">
                        <div className="path">
                            <span>
                                <a href="/ElixirRestaurant">Home</a>
                            </span>
                            <span>
                                <a href="/ElixirRestaurant/account">
                                    Account
                                </a>
                            </span>
                            <span className="currentNav">
                                {settings.header}
                            </span>
                        </div>
                    </div>
                    <div className="sections row">
                        <div className="accountPages col-xl-3">
                            <a href="/ElixirRestaurant/account">
                                <div className="singlePage" id="overview">
                                    Overview
                                </div>
                            </a>
                            <a href="/ElixirRestaurant/account/orders">
                                <div className="singlePage" id="orders">
                                    Order History
                                </div>
                            </a>
                            <a href="/ElixirRestaurant/account/changePassword">
                                <div
                                    className="singlePage"
                                    id="change password"
                                >
                                    Change Password
                                </div>
                            </a>
                        </div>
                        <div className="currentPage col-xl-9">
                            {settings.page}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AccountTemplate;
