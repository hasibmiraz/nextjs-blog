import Link from 'next/link';
import { FC } from 'react';
import Logo from './Logo';
import { IconType } from 'react-icons';
import { RiMenuFoldFill as RiMenuFoldFill } from 'react-icons/ri';

interface Props {
  navItems: { label: string; icon: IconType; href: string }[];
}

const AdminNav: FC<Props> = ({ navItems }): JSX.Element => {
  return (
    <nav className="h-screen w-60 shadow-sm bg-secondary-light dark:bg-secondary-dark flex flex-col justify-between p-3">
      <div>
        <Link href="/admin" legacyBehavior>
          <a className="flex items-center space-x-2 mb-10">
            <Logo className="text-fill-highlight-light dark:text-fill-highlight-dark w-5 h-5" />
            <span className="text-highlight-light dark:text-highlight-dark text-xl font-semibold">
              Admin
            </span>
          </a>
        </Link>
        {/* Nav items */}
        <div className="space-y-6">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href} legacyBehavior>
              <a className="flex items-center text-fill-highlight-light dark:text-fill-highlight-dark text-xl hover:scale-[0.98] transition">
                <item.icon size={24} />
                <span className="ml-2">{item.label}</span>
              </a>
            </Link>
          ))}
        </div>
      </div>

      {/* Nav toggler button */}
      <RiMenuFoldFill
        className="text-highlight-light dark:text-highlight-dark hover:scale[.98] transition self-end"
        size={25}
      />
    </nav>
  );
};

export default AdminNav;
