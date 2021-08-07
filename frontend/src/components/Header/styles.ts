// Third party
import styled from 'styled-components'

// Const
import { COLORS, HeaderHeight } from '../../styles/variables';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding-right: 1%;
  height: ${HeaderHeight.Height}px;
  background-color: ${COLORS.GreenLight};

  .sign_out {
    cursor: pointer;
    height: 20px;
    width: 20px;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 1%;

    .nav-menu {
      position: fixed;
      z-index: 1;
      right: -100%;
      top: 50px;
      flex-direction: column;
      width: 20%;
      text-align: center;
      transition: 0.3s;
      border-radius: 10px 0px 0px 10px;
      background-color: ${COLORS.White};
    }

    .nav-menu.active {
      right: 0;
    }

    .nav-item {
      margin: 5% 0;
    }

    .hamburger {
      display: block;
      cursor: pointer;
    }

    .nav-link{
      font-size: 19px;
      font-weight: 400;
      color: ${COLORS.BlackDark};
    }

    .bar {
      display: block;
      width: 25px;
      height: 3px;
      margin: 5px auto;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      background-color: ${COLORS.White};
    }

    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }

    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
  }
`

export const Avatar = styled.img`
  cursor: no-drop;
  height: 40px;
  width: 40px;
  border-radius: 50%;
`