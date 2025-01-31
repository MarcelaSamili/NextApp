import { formatDate } from '@/lib/utils';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Button } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const StartupCard = ({ post }: { post: StartupsCardType }) => {
  const {
    _createAt,
    views,
    author: { _id: authorId, name },
    title,
    category,
    _id,
    image,
    description,
  } = post;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createAt)}</p>

        <div className="flex gap.1.5">
          <VisibilityIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{name}</p>
          </Link>

          <Link href={`/startups/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            src="https://placehold.co/600x400"
            alt="placeholder"
            width={48}
            height={48}
            className="rounded-full"
          ></Image>
        </Link>
      </div>

      <Link href={`/startups/${_id}`}>
        <p className="startup-card-desc">{description}</p>

        <img src={image} alt="placeholder" className="startup-card_img"></img>
      </Link>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query${category.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Button variant="contained" className="startup-card_btn">
          <Link href={`/startup/${_id}`}>Delails</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
