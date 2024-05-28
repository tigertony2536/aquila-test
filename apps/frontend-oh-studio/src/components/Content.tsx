import { Bar, Button } from '@repo/ui';
import { Contact, Gallery } from '../components';
import { FadeUpBox } from '@repo/ui';
import { useState, useEffect, Suspense } from 'react';
import Loader from './Loader';
import axios from 'axios';

type Data = { id: string; url: string; width: number; height: number }[];

const tagItems = [
  { text: 'Expertise' },
  { text: 'Branding' },
  { text: 'Product' },
  { text: 'Design Systems' }
];

const Content = () => {
  const [data, setData] = useState<Data | null>(null);
  useEffect(() => {
    try {
      const fetch = async (url: string) => {
        const res = await axios.get(url);
        const data: Data = res.data;
        console.log(data);
        setData(data);
      };
      fetch('https://api.thecatapi.com/v1/images/search?limit=10');
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <FadeUpBox className="h-full min-h-screen w-full">
      <div className="flex flex-col items-center justify-center px-8 py-28">
        <p className="mb-8 w-full min-w-[360px] max-w-[750px] text-wrap text-center text-4xl  font-semibold md:text-7xl md:leading-snug">
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
      <Gallery>
        {data?.map((item, i) => (
          <div
            key={i}
            className="basis-100 flex aspect-square items-center justify-center md:basis-[calc(50%-16px)] "
          >
            <Suspense fallback={<Loader />}>
              <img
                key={i}
                className="aspect-square h-full w-full rounded-lg object-fill"
                src={item.url}
                alt={`cat-${i}`}
              />
            </Suspense>
          </div>
        ))}
      </Gallery>
      <FadeUpBox>
        <Contact />
      </FadeUpBox>
    </FadeUpBox>
  );
};

export default Content;
