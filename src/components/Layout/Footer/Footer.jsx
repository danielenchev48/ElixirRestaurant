import React from 'react';
import './Footer.scss'


function Footer() {
    return (<>
        <div className='footer'>
            <div className="container-fluid text-center text-md-left contentWrapper">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3 footerContent">
                        <h5 className="text-uppercase">Restaurant Website</h5>
                        <p>Fully working responsive restaurant website with backend database, RESTful API requests, login system, shopping cart and more...</p>
                    </div>

                    <hr className="clearfix w-100 d-md-none pb-0" />

                    <div className="col-md-3 mb-md-0 mb-3 techs">
                        <h5 className="text-uppercase">Technologies</h5>
                        <ul className="list-unstyled">
                            <li>ReactJS</li>
                            <li>ViteJS</li>
                            <li>SASS</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>

                    <div className="col-md-3 mb-md-0 mb-3 env ">
                        <h5 className="text-uppercase">Environment</h5>
                        <ul className="list-unstyled envList">
                            <li><span>Github</span> - domain and code hosting</li>
                            <li><span>MongoDB</span> - database</li>
                            <li><span>ViteJS</span> - build system</li>
                            <li><span>Jira</span> - tracking tool</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2023 Copyright:
                <a> ElixirRestaurant</a>
            </div>
        </div>
    </>
    );
}

export default Footer