import axios from 'axios';
import { useState, useEffect, Suspense } from 'react';
type Data = { id: string; url: string; width: number; height: number }[];
import Loader from './Loader';
import Icon from './Icon';

const Gallery = () => {
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
    <div className="flex h-fit flex-col flex-wrap justify-center gap-6 p-12 md:flex-row md:flex-wrap">
      {data?.map((item, i) => (
        <div
          key={i}
          className="basis-100 relative flex aspect-square items-center justify-center 
            md:basis-[calc(50%-16px)] "
        >
          <Suspense fallback={<Loader />}>
            <img
              key={i}
              className="aspect-square h-full w-full rounded-lg object-fill"
              src={item.url}
              alt={`cat-${i}`}
            />
            <div className="group absolute z-10 h-full w-full rounded-lg transition duration-150 ease-in-out hover:backdrop-blur-sm md:hover:bg-black/20">
              <div className="flex h-28 items-center justify-between px-8">
                <span className="h-full place-content-center text-xl font-semibold text-white opacity-0 transition duration-700 ease-in-out group-hover:opacity-100">{`cat-${i}`}</span>
                <button
                  onClick={() => console.log('got clicked')}
                  className="group-hover:fade-up-right h-16  w-16 translate-x-[-1rem] 
                  translate-y-[1rem] rotate-45 transform rounded-full bg-white opacity-0 
                  transition duration-700 ease-in-out group-hover:translate-x-0 
                  group-hover:translate-y-0 group-hover:opacity-100"
                >
                  <Icon name="bx bx-up-arrow-alt"></Icon>
                </button>
              </div>
            </div>
          </Suspense>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
