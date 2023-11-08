import './AccountOverview.scss';
import AccountTemplate from '../AccountTemplate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import userIcon from '../../../../assets/images/user.png'

function AccountOverview() {
    const [user, setUser] = useState({
        userName: '',
        phoneNumber: '',
        email: '',
        country: '',
    });

    // useEffect(() => {
    //     const userData = Cookies.get('userData')
    //         ? JSON.parse(Cookies.get('userData'))
    //         : {};
    //     axios
    //         .get(
    //             `http://localhost:3000/api/v1/user/userProfile/findUser/${userData.id}`,
    //         )
    //         .then((user) => {
    //             setUser(user.data.user);
    //         });
    // }, []);

    function Overview() {
        return (
            <>
                <div className="detailsContainer col-md-10">
                    <div className="profilePicture">
                        <img
                            src={userIcon}
                            alt="userProfile"
                        />
                        <div className="changeWallpaper">
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </div>
                    </div>
                    <div className="accountDetails card-body">
                        <form>
                            <div class="row gx-3 mb-3 ">
                                <div class="col-md-6">
                                    <label
                                        class="small mb-1"
                                        for="inputFirstName"
                                    >
                                        First name
                                    </label>
                                    <input
                                        class="form-control"
                                        id="inputFirstName"
                                        type="text"
                                        // defaultValue={user.userName}
                                        defaultValue={'John'}
                                    />
                                </div>
                                <div class="col-md-6">
                                    <label
                                        class="small mb-1"
                                        for="inputLastName"
                                    >
                                        Last name
                                    </label>
                                    <input
                                        class="form-control"
                                        id="inputLastName"
                                        type="text"
                                        defaultValue="Doe"
                                    />
                                </div>
                            </div>
                            <div class="row gx-3 mb-3">
                                <div class="col-md-6">
                                    <label
                                        class="small mb-1"
                                        for="inputCountry"
                                    >
                                        Country
                                    </label>
                                    <input
                                        class="form-control"
                                        id="inputCountry"
                                        type="text"
                                        // defaultValue={user.country}
                                        defaultValue={'Bulgaria'}
                                    />
                                </div>
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputStreet">
                                        Street
                                    </label>
                                    <input
                                        class="form-control"
                                        id="inputStreet"
                                        type="text"
                                        defaultValue="New Street 16"
                                    />
                                </div>
                            </div>
                            <div class="mb-3">
                                <label
                                    class="small mb-1"
                                    for="inputEmailAddress"
                                >
                                    Email address
                                </label>
                                <input
                                    class="form-control"
                                    id="inputEmailAddress"
                                    type="email"
                                    // defaultValue={user.email}
                                    defaultValue={'testmail@yahoo.com'}
                                />
                            </div>
                            <div class="row gx-3 mb-3">
                                <div class="col-md-6">
                                    <label class="small mb-1" for="inputPhone">
                                        Phone number
                                    </label>
                                    <input
                                        class="form-control"
                                        id="inputPhone"
                                        type="tel"
                                        // defaultValue={user.phoneNumber}
                                        defaultValue={'099157777'}
                                    />
                                </div>
                                <div class="col-md-6">
                                    <label
                                        class="small mb-1"
                                        for="inputBirthday"
                                    >
                                        Birthday
                                    </label>
                                    <input
                                        class="form-control"
                                        id="inputBirthday"
                                        type="text"
                                        name="birthday"
                                        defaultValue="14.02.1995"
                                    />
                                </div>
                            </div>
                            <button class="btn btn-danger" type="button">
                                Save changes
                            </button>
                        </form>
                    </div>
                </div>
            </>
        );
    }

    const settings = {
        header: 'overview',
        page: <Overview />,
    };

    return (
        <>
            <AccountTemplate settings={settings} />
        </>
    );
}

export default AccountOverview;
