import { ThreeDots } from 'react-loader-spinner';

const styles = {
  spinner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -50,
    marginTop: -50,
  },
};

export const Loader = () => {
  return (
    <div style={styles.spinner}>
      <ThreeDots color={'#0F4C75'} width="100" ariaLabel="loading" />
    </div>
  );
};