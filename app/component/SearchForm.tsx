import Form from 'next/form';
import SearchFormReset from '@/app/component/SearchFormReset';
//Esse é um icone vindo da biblioteca MaterialUI
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
//Pode saber mais na documentação:https://mui.com/material-ui/material-icons/?theme=Outlined&query=sea
const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        className="search-input"
        placeholder="Search Startups"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}

        <button type="submit" className="search-btn text-white">
          <SearchOutlinedIcon />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
