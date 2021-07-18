import React from 'react';
import './Footer.scss';

interface IFooterProps {
}

const Footer : React.FC<IFooterProps> = props => {

    return(
        <div className={`footer`}>
            <div className={`footer-copyright`}>
                <span className={`year`}> 2021 &copy;</span>
            </div>

            <div className={`footer-signature`}>
                Website powered by Kim Anh Nguyen
            </div>
            
            {/* <div className={`footer-social-media`}>
                <FooterSocial classname={`mail`} link={`mailto:mark.kimanh@gmail.com`}/>
                <FooterSocial classname={`instagram`} link={`https://www.instagram.com/kimanhou/`}/>
                <FooterSocial classname={`website`} link={`https://www.instagram.com/kimanhou/`}/>
            </div> */}
        </div>
    )
}

export default Footer;