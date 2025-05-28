import React, { useState, useRef } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import { Link } from "gatsby";
import { useLanguage, getLocalizedPath } from "../../context/LanguageContext";
import LanguageSwitcher from "../LanguageSwitcher";
import styled from "styled-components";

const MENU_SLIDE_ANIMATION = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

const HamburgerButton = styled.div`
  position: fixed;
  right: 1rem;
  top: 1.25rem;
  z-index: 1100;
  width: 3rem;
  height: 3rem;
  border-radius: 0;
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: white;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const HamburgerLine = styled.span`
  display: block;
  height: 0.25rem;
  width: 1.75rem;
  background-color: black;
  transition: all 0.3s ease;
  
  &:nth-child(1) {
    transform: ${props => props.isActive ? "rotate(45deg) translateY(0.5rem)" : "rotate(0)"};
  }
  
  &:nth-child(2) {
    opacity: ${props => props.isActive ? "0" : "1"};
    margin: 0.25rem 0;
  }
  
  &:nth-child(3) {
    transform: ${props => props.isActive ? "rotate(-45deg) translateY(-0.75rem)" : "rotate(0)"};
  }
`;

const MenuOverlay = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  max-width: 28rem;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1050;
  background-color: white;
`;

const MenuContent = styled.div`
  height: 100%;
  padding-top: 2.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const NavigationSection = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 3rem;
  gap: 0.75rem;
  margin-top: 0;
  padding: 0 2.5rem;
`;

const NavigationHeader = styled.div`
  color: black;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  text-transform: uppercase;
  font-size: 0.875rem;
  margin-bottom: 0;
  
  p {
    margin: 0;
    padding-bottom: 0.5rem;
  }
`;

const NavLinkContainer = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  padding: 1rem 0;
  transition: colors 0.5s ease;
  text-transform: uppercase;
  cursor: pointer;
`;

const NavLinkContent = styled.div`
  position: relative;
  display: flex;
  align-items: start;
`;

const NavLinkIndex = styled.span`
  color: black;
  transition: colors 0.5s ease;
  font-size: 2.5rem;
  font-weight: 100;
  margin-right: 0.5rem;
`;

const NavLinkText = styled(motion.span)`
  position: relative;
  z-index: 10;
  display: block;
  font-size: 2.5rem;
  font-weight: 200;
  color: black;
  transition: colors 0.5s ease;
`;

const FooterSection = styled.div`
  display: flex;
  width: 100%;
  font-size: 0.875rem;
  justify-content: space-between;
  align-items: center;
  color: black;
  padding: 0 2.5rem;
  padding-bottom: 1.25rem;
`;

const ContactButton = styled(Link)`
  background-color: #0c1220;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #172b49;
    color: white;
  }
`;

const NavLink = ({ heading, href, setIsActive, index, onClick }) => {
  const ref = useRef(null);

  const handleClick = () => {
    if (onClick) onClick();
    setIsActive(false);
  };

  return (
    <NavLinkContainer
      initial="initial"
      whileHover="whileHover"
      onClick={handleClick}
    >
      <Link ref={ref} to={href} style={{ textDecoration: 'none', color: 'inherit' }}>
        <NavLinkContent>
          <NavLinkIndex>{index}.</NavLinkIndex>
          <motion.div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem' }}>
            <NavLinkText
              variants={{
                initial: { x: 0 },
                whileHover: { x: -16 },
              }}
              transition={{
                type: "spring",
                staggerChildren: 0.075,
                delayChildren: 0.25,
              }}
            >
              {heading.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  variants={{
                    initial: { x: 0 },
                    whileHover: { x: 16 },
                  }}
                  transition={{ type: "spring" }}
                  style={{ display: 'inline-block' }}
                >
                  {letter}
                </motion.span>
              ))}
            </NavLinkText>
          </motion.div>
        </NavLinkContent>
      </Link>
    </NavLinkContainer>
  );
};

const Curve = () => {
  const initialPath = `M100 0 L200 0 L200 ${typeof window !== 'undefined' ? window.innerHeight : 800} L100 ${typeof window !== 'undefined' ? window.innerHeight : 800} Q-100 ${typeof window !== 'undefined' ? window.innerHeight / 2 : 400} 100 0`;
  const targetPath = `M100 0 L200 0 L200 ${typeof window !== 'undefined' ? window.innerHeight : 800} L100 ${typeof window !== 'undefined' ? window.innerHeight : 800} Q100 ${typeof window !== 'undefined' ? window.innerHeight / 2 : 400} 100 0`;

  const curve = {
    initial: { d: initialPath },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <svg
      style={{
        position: 'absolute',
        top: 0,
        left: '-99px',
        width: '100px',
        stroke: 'none',
        height: '100%',
        fill: '#ffffff'
      }}
    >
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      />
    </svg>
  );
};

const CurvedNavbar = ({ setIsActive, navItems }) => {
  return (
    <MenuOverlay
      variants={MENU_SLIDE_ANIMATION}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <MenuContent>
        <NavigationSection>
          <NavigationHeader>
            <p>Navigation</p>
          </NavigationHeader>
          <section style={{ backgroundColor: 'transparent', marginTop: 0 }}>
            <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
              {navItems.map((item, index) => (
                <NavLink
                  key={item.href}
                  {...item}
                  setIsActive={setIsActive}
                  index={index + 1}
                />
              ))}
            </div>
          </section>
        </NavigationSection>
        <FooterSection>
          <LanguageSwitcher />
          <ContactButton to="/contact" onClick={() => setIsActive(false)}>
            Contact Us
          </ContactButton>
        </FooterSection>
      </MenuContent>
      <Curve />
    </MenuOverlay>
  );
};

const CurvedMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const { language, messages } = useLanguage();

  const navItems = [
    {
      heading: messages.home,
      href: getLocalizedPath("/", language),
    },
    {
      heading: messages.services,
      href: getLocalizedPath("/#services", language),
    },
    {
      heading: messages.industries,
      href: getLocalizedPath("/#industries", language),
    },
    {
      heading: messages.about,
      href: getLocalizedPath("/#about", language),
    },
  ];

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <HamburgerButton onClick={handleClick}>
        <div style={{ position: 'relative', width: '2rem', height: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
          <HamburgerLine isActive={isActive} />
          <HamburgerLine isActive={isActive} />
          <HamburgerLine isActive={isActive} />
        </div>
      </HamburgerButton>

      <AnimatePresence mode="wait">
        {isActive && (
          <CurvedNavbar
            setIsActive={setIsActive}
            navItems={navItems}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default CurvedMenu;