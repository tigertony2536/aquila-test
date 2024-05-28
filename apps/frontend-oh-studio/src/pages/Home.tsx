import { Content } from '../components';
import { Button } from '@repo/ui';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {
  return (
    <>
      <Content />
      <Button
        className="sticky bottom-8 w-fit rounded-full border border-black bg-black px-[24px] py-[8px] text-white"
        onClick={() => alert('Go to Shop Page')}
      >
        <div>
          <FontAwesomeIcon icon={faAsterisk} className="mr-2" />
          <span>Shop</span>
        </div>
      </Button>
    </>
  );
};

export default HomePage;
