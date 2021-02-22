import Link from 'next/link';
import Button from '../Button/Button';

const ButtonHeader = ({ children, path, isExternal, ...props }) => {
  const Container = ({ children }) =>
    path ? (
      <Link href={path}>
        <a target={isExternal ? '_blank' : null}>{children}</a>
      </Link>
    ) : (
      <>{children}</>
    );

  return (
    <Container>
      <Button
        color="#7678ED"
        variant="white"
        size="sm"
        weight="semi-bold"
        padding="0.5em 1em"
        {...props}
      >
        {children}
      </Button>
    </Container>
  );
};

export default ButtonHeader;
