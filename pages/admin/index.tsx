import type { NextPage } from 'next';
import AdminNav from '../../components/common/AdminNav';
import {
  AiOutlineDashboard,
  AiOutlineContainer,
  AiOutlineTeam,
  AiOutlineMail,
} from 'react-icons/ai';

const navItems = [
  { href: '/admin', icon: AiOutlineDashboard, label: 'Dashboard' },
  { href: '/admin/posts', icon: AiOutlineContainer, label: 'Posts' },
  { href: '/admin/users', icon: AiOutlineTeam, label: 'Users' },
  { href: '/admin/comments', icon: AiOutlineMail, label: 'Comments' },
];

const Admin: NextPage = () => {
  return (
    <>
      <AdminNav navItems={navItems} />
    </>
  );
};

export default Admin;
