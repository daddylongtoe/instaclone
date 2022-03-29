import useUser from '../../hooks/useUser';
import Suggestions from './sugestions';
import User from './user';

export default function Sidebar() {
  const {
    userData: { fullName, username, userId },
  } = useUser();

  return (
    <div className="p-4">
      <User username={username} fullName={fullName} />
      <Suggestions userId={userId} />
    </div>
  );
}
