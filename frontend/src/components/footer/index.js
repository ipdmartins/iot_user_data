import React from 'react';

const Footer = () => {
  return (
    <footer id='footer--pin' className="bg-light text-dark" style={{position:"fixed",bottom:"0", width: '100%'}}>
      <div className="container">
        <div className="text-center">
        <hr/>
          <div >
            <a href="">Besoin d'aide?</a>{'  -  '}
            <a href="">Conditions d'utilisation</a>
          </div>
          <div>
            &copy;
            <strong>
              <span> 2022. Project_3.com</span>
            </strong>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;