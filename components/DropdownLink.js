import React from 'react';
import Link from 'next/link';

function DropdownLink(props) {
  let { href, children, ...rest } = props;
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}

export default DropdownLink;
