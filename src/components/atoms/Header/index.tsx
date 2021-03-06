import React from 'react';

interface Props {
  children: React.ReactChild[] | React.ReactChild;
  header: string;
}
const Header: React.FC<Props> = ({ header, children }: Props) => {
  switch (header) {
    case 'h1':
      return <h1>{children}</h1>;
    case 'h2':
      return <h2>{children}</h2>;
    case 'h3':
      return <h3>{children}</h3>;
    case 'h4':
      return <h4>{children}</h4>;
    case 'h5':
      return <h5>{children}</h5>;
    case 'h6':
      return <h6>{children}</h6>;
    default:
      return <h2>{children}</h2>;
  }
};

export default Header;
