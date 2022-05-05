import { useSelector } from 'react-redux';
import AuthNav from './AuthNav';
import UserMenu from './User-menu';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <header style={styles.header}>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
