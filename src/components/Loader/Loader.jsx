import { Audio } from 'react-loader-spinner';
import { Cont } from './Loader.styled';
export const Loader = () => {
  return (
    <Cont>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="blue"
        ariaLabel="three-dots-loading"
      />
    </Cont>
  );
};
