import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialMediaLogo,
    SocialMediaIcons,
    SocialMediaIconLink
} from './FooterElements'
function Footer() {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialMediaLogo to='/'>Pizza</SocialMediaLogo>
                        <SocialMediaIcons>
                            <SocialMediaIconLink href='/' target="_blank" aria-label="Facebook">
                            <FaFacebook rel="noopener noreferrer"/>

                            </SocialMediaIconLink>
                            <SocialMediaIconLink href='/' target="_blank" aria-label="Facebook">
                            <FaInstagram rel="noopener noreferrer"/>

                            </SocialMediaIconLink>
                            <SocialMediaIconLink href='/' target="_blank" aria-label="Facebook">
                            <FaTwitter rel="noopener noreferrer"/>

                            </SocialMediaIconLink>
                            <SocialMediaIconLink href='/' target="_blank" aria-label="Facebook">
                            <FaYoutube rel="noopener noreferrer"/>

                            </SocialMediaIconLink>
                        </SocialMediaIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
