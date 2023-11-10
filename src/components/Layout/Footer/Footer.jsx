import React from 'react';
import './Footer.scss'


function Footer() {
    return (<>
        <div className='footer'>
            <div className="container-fluid text-center text-md-left contentWrapper">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3 footerContent">
                        <h5 className="text-uppercase">Restaurant Website</h5>
                        <p>Fully working responsive restaurant website written using React, Node and SASS, build with Vite, hosted on Github Pages (frontend only) with backend database, RESTful API requests, payment system, login system, shopping cart, simple chat robot and more...</p>
                    </div>
                    <hr className="clearfix w-100 d-md-none pb-0" />
                    <div className="col-md-3 mb-md-0 mb-3 techs">
                        <h5 className="text-uppercase">Technologies</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://react.dev/">ReactJS</a></li>
                            <li><a href="https://nodejs.org/en">NodeJS</a></li>
                            <li><a href="https://sass-lang.com/documentation/">SASS</a></li>
                            <li><a href="https://react-bootstrap.netlify.app/">Bootstrap</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 mb-md-0 mb-3 env ">
                        <h5 className="text-uppercase">Environment</h5>
                        <ul className="list-unstyled envList">
                            <li><a href="https://github.com/">Github</a> - web and code hosting</li>
                            <li><a href="https://www.mongodb.com/">MongoDB</a> - database</li>
                            <li><a href="https://vitejs.dev/">ViteJS</a> - build system</li>
                            <li><a href="https://www.atlassian.com/software/jira">Jira</a> - tracking tool</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2023 Copyright: ElixirRestaurant
            </div>
        </div>
    </>
    );
}

export default Footer