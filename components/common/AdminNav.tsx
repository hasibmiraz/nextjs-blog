import Link from 'next/link';
import { FC } from 'react';
import Logo from './Logo';
import { IconType } from 'react-icons';

interface Props {
  navItems: { label: string; icon: IconType; href: string }[];
}

const AdminNav: FC<Props> = ({ navItems }): JSX.Element => {
  return (
    <nav className="h-screen w-60 shadow-sm bg-secondary-light dark:bg-secondary-dark">
      <Link href="/admin" legacyBehavior>
        <a className="flex items-center space-x-2 p-3 mb-10">
          <Logo className="text-fill-highlight-light dark:text-fill-highlight-dark w-5 h-5" />
          <span className="text-fill-highlight-light dark:text-fill-highlight-dark text-xl font-semibold">
            Admin
          </span>
        </a>
      </Link>
      {/* Nav items */}
      <div className="space-y-6">
        {navItems.map((item) => (
          <Link href={item.href} key={item.href} legacyBehavior>
            <a className="flex items-center text-fill-highlight-light dark:text-fill-highlight-dark text-xl p-3 hover:scale-[0.98] transition">
              <item.icon size={24} />
              <span className="ml-2">{item.label}</span>
            </a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default AdminNav;
