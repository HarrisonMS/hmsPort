import styled from 'styled-components';
import { purple} from '@carbon/colors'; 

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 640px) {
    display: ${({ isHome }) => (!isHome ? 'none' : 'flex')};
    flex-direction: column;
  }
`;

export const Header = styled.div`
  display: flex;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  object-fit: contain;
  width: 200px;
  margin-right: 1rem;
  border-radius: 2px;
`;

export const ViewResumeLink = styled.a`
  display: flex;
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  align-items: center;
  margin-top: 1rem;
  border: 2px solid #2ecc40;
  border-radius: 6px;
  background-color: ${purple[70]};
  transition: background-color 250ms ease;
  &:hover {
    background-color: ${purple[70]};
  }
  svg {
    fill: white;
    margin-left: 8px;
  }
`;