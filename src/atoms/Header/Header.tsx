import React from 'react';

interface Props {
  text: string;
  header: string;
}
function Header({ header, text }: Props) {
  switch (header) {
    case 'h1':
      return <h1 className={header}>{text}</h1>;
    case 'h2':
      return <h2 className={header}>{text}</h2>;
    case 'h3':
      return <h3 className={header}>{text}</h3>;
    case 'h4':
      return <h4 className={header}>{text}</h4>;
    case 'h5':
      return <h4 className={header}>{text}</h4>;
    case 'h6':
      return <h4 className={header}>{text}</h4>;
    default:
      return <h2 className={header}>{text}</h2>;
  }
}

export default Header;
