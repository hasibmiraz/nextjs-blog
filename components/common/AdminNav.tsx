import Link from 'next/link';
import { FC, useRef, useState } from 'react';
import Logo from './Logo';
import { IconType } from 'react-icons';
import { RiMenuFoldFill, RiMenuUnfoldFill } from 'react-icons/ri';

interface Props {
  navItems: { label: string; icon: IconType; href: string }[];
}

const NAV_OPEN_WIDTH = 'w-60';
const NAV_CLOSE_WIDTH = 'w-12';

const AdminNav: FC<Props> = ({ navItems }): JSX.Element => {
  const navRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(true);

  const updateNav = () => {
    const currentNav = navRef.current;
    if (!currentNav) return;

    const { classList } = currentNav;

    if (visible) {
      // hide nav
      classList.remove(NAV_OPEN_WIDTH);
      classList.add(NAV_CLOSE_WIDTH);
    } else {
      // show nav
      classList.add(NAV_OPEN_WIDTH);
      classList.remove(NAV_CLOSE_WIDTH);
    }
    setVisible(!visible);
  };

  return (
    <nav
      ref={navRef}
      className="h-screen shadow-sm w-60 bg-secondary-light dark:bg-secondary-dark flex flex-col justify-between p-3"
    >
      <div>
        <Link href="/admin" legacyBehavior>
          <a className="flex items-center space-x-2 mb-10">
            <Logo className="text-fill-highlight-light dark:text-fill-highlight-dark w-5 h-5" />
            {visible && (
              <span className="text-highlight-light dark:text-highlight-dark text-xl font-semibold">
                Admin
              </span>
            )}
          </a>
        </Link>
        {/* Nav items */}
        <div className="space-y-6">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href} legacyBehavior>
              <a className="flex items-center text-fill-highlight-light dark:text-fill-highlight-dark text-xl hover:scale-[0.98] transition">
                <item.icon size={24} />
                {visible && <span className="ml-2">{item.label}</span>}
              </a>
            </Link>
          ))}
        </div>
      </div>

      {/* Nav toggler button */}
      <button
        onClick={updateNav}
        className="text-highlight-light dark:text-highlight-dark hover:scale[.98] transition self-end"
      >
        {visible ? (
          <RiMenuFoldFill size={25} />
        ) : (
          <RiMenuUnfoldFill size={25} />
        )}
      </button>
    </nav>
  );
};

export default AdminNav;
