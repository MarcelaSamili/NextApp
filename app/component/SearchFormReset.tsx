'use client';

import Link from 'next/link';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector('.search-form') as HTMLFormElement;

    if (form) form.reset();
  };
  return (
    <button type="reset" onClick={reset}>
      <Link href="/" className="search-btn text-white">
        <CloseOutlinedIcon />
      </Link>
    </button>
  );
};

export default SearchFormReset;
