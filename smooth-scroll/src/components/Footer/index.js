import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLink, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements'
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'


const Footer = () => {

	const toggleHome = () => {
		scroll.scrollToTop()
	};

	return (
		<>
			<FooterContainer>
				<FooterWrap>
					<FooterLinksContainer>
						<FooterLinksWrapper>
							<FooterLinkItems>
								<FooterLinkTitle>About Us</FooterLinkTitle> 	
								<FooterLink to='/signin'>How it works</FooterLink>
								<FooterLink to='/signin'>Testimonials</FooterLink>
								<FooterLink to='/signin'>Careers</FooterLink>
								<FooterLink to='/signin'>Investors</FooterLink>
								<FooterLink to='/signin'>Terms of Service</FooterLink>
							</FooterLinkItems>
							<FooterLinkItems>
								<FooterLinkTitle>Videos</FooterLinkTitle> 	
								<FooterLink to='/signin'>How it works</FooterLink>
								<FooterLink to='/signin'>Testimonials</FooterLink>
								<FooterLink to='/signin'>Careers</FooterLink>
								<FooterLink to='/signin'>Investors</FooterLink>
								<FooterLink to='/signin'>Terms of Service</FooterLink>
							</FooterLinkItems>
						</FooterLinksWrapper>
						<FooterLinksWrapper>
							<FooterLinkItems>
								<FooterLinkTitle>Contact Us</FooterLinkTitle> 	
								<FooterLink to='/signin'>How it works</FooterLink>
								<FooterLink to='/signin'>Testimonials</FooterLink>
								<FooterLink to='/signin'>Careers</FooterLink>
								<FooterLink to='/signin'>Investors</FooterLink>
								<FooterLink to='/signin'>Terms of Service</FooterLink>
							</FooterLinkItems>
							<FooterLinkItems>
								<FooterLinkTitle>Bussiness</FooterLinkTitle> 	
								<FooterLink to='/signin'>How it works</FooterLink>
								<FooterLink to='/signin'>Testimonials</FooterLink>
								<FooterLink to='/signin'>Careers</FooterLink>
								<FooterLink to='/signin'>Investors</FooterLink>
								<FooterLink to='/signin'>Terms of Service</FooterLink>
							</FooterLinkItems>
						</FooterLinksWrapper>
					</FooterLinksContainer>
					<SocialMedia>
						<SocialMediaWrap>
							<SocialLogo to='/' onClick ={toggleHome}>Dolla</SocialLogo>
							<WebsiteRights>dolla © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
							<SocialIcons>
								<SocialIconLink href="/" target='_blank' aria-label="Facebook"><FaFacebook />
								</SocialIconLink>
								<SocialIconLink href="/" target='_blank' aria-label="Instagram"><FaInstagram />
								</SocialIconLink>
								<SocialIconLink href="/" target='_blank' aria-label="Youtube"><FaYoutube />
								</SocialIconLink>
								<SocialIconLink href="/" target='_blank' aria-label="Twitter"><FaTwitter />
								</SocialIconLink>
								<SocialIconLink href="/" target='_blank' aria-label="Linkedin"><FaLinkedin />
								</SocialIconLink>
							</SocialIcons>
						</SocialMediaWrap>
					</SocialMedia>
				</FooterWrap>
			</FooterContainer>
		</>
	)
}

export default Footer
