import { Bar } from '@repo/ui/bar';
import { NavLink } from 'react-router-dom';

interface navigationProps {
  navItem: { text: string; path: string }[];
}

const Navigation = ({ navItem }: navigationProps) => {
  return (
    <Bar containerClass="bg-light-gray backdrop-blur-[16px]">
      {navItem.map((item, i) => (
        <NavLink
          key={i}
          to={item.path}
          className="rounded-full bg-transparent px-8 py-3 font-[550]"
          style={({ isActive }) => {
            return isActive ? { backgroundColor: 'white' } : {};
          }}
          onClick={() => 'got clicked'}
        >
          {item.text}
        </NavLink>
      ))}
    </Bar>
  );
};

export default Navigation;
