import { cn } from '@repo/utils';
import { Link } from 'react-router-dom';

interface ContactProps {
  className?: string;
}

const Contact = ({ className }: ContactProps) => {
  return (
    <div
      className={cn(
        'flex h-[400px] flex-col items-center justify-center py-28 text-5xl font-medium leading-[1.25]',
        className
      )}
    >
      <p>Let's work together.</p>
      <Link to="" className="text-black/50">
        Get in touch.
      </Link>
    </div>
  );
};

export default Contact;
