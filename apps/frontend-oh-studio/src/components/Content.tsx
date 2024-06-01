import { Button } from '@repo/ui/Button';
import { Bar } from '@repo/ui/Bar';
import { Contact, Gallery } from '../components';
import { FadeUpBox } from './FadeUpBox';

const tagItems = [
  { text: 'Expertise' },
  { text: 'Branding' },
  { text: 'Product' },
  { text: 'Design Systems' }
];

const Content = () => {
  return (
    <FadeUpBox className="h-full min-h-screen w-full">
      <div className="flex flex-col items-center justify-center px-8 py-28">
        <p
          className="mb-8 w-full min-w-[360px] max-w-[750px] text-wrap text-center text-4xl  
        font-semibold md:text-7xl md:leading-snug"
        >
          A brand and product designer working with clients globally
        </p>
        <Bar containerClass="gap-3">
          {tagItems.map((item, i) => (
            <Button
              key={i}
              className={`${i !== 0 && 'bg-light-gray'}`}
              onClick={() => console.log('Got clicked')}
            >
              {item.text}
            </Button>
          ))}
        </Bar>
      </div>
      <Gallery />
      <FadeUpBox>
        <Contact />
      </FadeUpBox>
    </FadeUpBox>
  );
};

export default Content;
