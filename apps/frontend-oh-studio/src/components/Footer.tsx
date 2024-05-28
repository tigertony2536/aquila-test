import { Bar, Button } from '@repo/ui';
import Icon from './Icon/Icon';

const barItems = [
  { text: 'twitter', url: '' },
  { text: 'Linkedin', url: '' },
  { text: 'Mail', url: '' }
];

const Footer = () => {
  return (
    <div className="absolute bottom-0 flex h-[100px] w-full justify-between px-8">
      <div className="flex place-items-center">
        <Icon height={30} />
        <span className="ml-4">© Oli Harris 2023</span>
      </div>
      <div className="flex place-items-center">
        <Bar>
          {barItems.map((item, i) => (
            <Button
              key={i}
              className="bg-white px-2"
              onClick={() => console.log('Got clicked')}
            >
              {item.text}
            </Button>
          ))}
        </Bar>
      </div>
    </div>
  );
};

export default Footer;
