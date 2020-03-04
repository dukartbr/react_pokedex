import styled from 'styled-components';
import {
  border,
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  position,
  shadow,
} from 'styled-system';

export const Colors = {
  DarkRed: '#dc0059',
  LightRed: '#ff0050',
  Orange: '#ff8945',
  Yellow: '#faf139',
  Green: '#00fc2b',
  BlueOne: '#14eaff',
  BlueTwo: '#14daff',
  BlueThree: '#14a9ff',
  Gray: '#f1f5e6',
  DarkGray: '#040054',
  DarkPurple: '#4f045a',
};

export const sizes = {
  AppHeight: '1000px',
};

export const breakpoints = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};

export const Box = styled.div`
    ${border}
    ${space}
    ${color}
    ${typography}
    ${layout}
    ${flexbox}
    ${grid}
    ${background}
    ${position}
    ${shadow}
`;

export const Header = styled(Box)({
  textAlign: 'center',
  color: 'white',
  fontFamily: 'Acme',
  fontSize: '2.5rem',
  width: '100%',
});

export const Subheader = styled(Box)({
  textAlign: 'center',
  fontFamily: 'Acme',
  fontSize: '2rem',
  width: '100%',
  textTransform: 'capitalize',
});

export const Title = styled(Subheader)({
  fontFamily: 'Asap',
  textAlign: 'center',
  fontSize: '1.5rem',
});

export const Span = styled(Box)({
  fontSize: '1rem',
  display: 'block',
  fontFamily: 'Asap',
  textTransform: 'capitalize',
  //   color: 'white',
});

export const Row = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  marginRight: '-15px',
  marginLeft: '-15px;',
});

export const NoMarginRow = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  marginRight: '0px',
  marginLeft: '0px',
});

export const Column = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
});

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  @media screen and (min-width: ${breakpoints.sm}) {
    max-width: 540px;
  }
  @media screen and (min-width: ${breakpoints.md}) {
    max-width: 720px;
  }
  @media screen and (min-width: ${breakpoints.lg}) {
    max-width: 960px;
  }
  @media screen and (min-width: ${breakpoints.xl}) {
    max-width: 1140px;
  }
`;

export const Panel = styled.div`
  background-color: ${Colors.LightRed};
  border: 2px solid ${Colors.DarkPurple};
  ${border.borderRadius}
  padding: 30px;
  height: ${sizes.AppHeight};
  position: relative;
  box-shadow: 5px 10px 15px ${Colors.DarkPurple};
`;

export const SmallScreen = styled(Box)`
  background: repeating-linear-gradient(
    45deg,
    #14daff,
    #14daff 20px,
    #14eaff 20px,
    #14eaff 40px
  );
`;

export const LargeScreen = styled(Box)`
  background: repeating-linear-gradient(
    45deg,
    #14daff,
    #14daff 80px,
    #14eaff 80px,
    #14eaff 160px
  );
  border: 2px solid ${Colors.DarkPurple};
`;

export const SearchInput = styled.input`
  width: 80%;
  margin-right: 10%;
  margin-left: 10%;
  margin-bottom: 15px;
  background-color: transparent;
  border: none;
  font-family: 'Acme';
  color: ${Colors.DarkPurple};
  border-bottom: 2px solid ${Colors.DarkPurple};
`;

export const Button = styled.button``;

export const ListContainer = styled.ul``;

export const ListItem = styled.li``;

export const Image = styled.img``;

export const Icon = styled.i``;

export const Text = styled.p``;

export const Table = styled.table`
  width: 100%;
`;

export const TableData = styled.td`
  border: 1px solid ${Colors.Orange};
  padding: 5px;
`;

export const TableHeadData = styled.th`
  border: 1px solid ${Colors.Orange};
  padding: 5px;
`;

export const TableHead = styled.thead``;

export const TableRow = styled.tr``;

export const TableBody = styled.tbody``;

export const Strong = styled.strong``;
