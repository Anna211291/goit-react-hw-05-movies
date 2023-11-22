import { BiSearchAlt2 } from 'react-icons/bi';
import {
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
  SearchbarStyle,
} from './SearchBar.styled';

export const Searhbar = ({ onSubmit, onChange }) => {

  return (
    <SearchbarStyle>
      <SearchForm onSubmit={onSubmit}>
        <SearchFormInput
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie..."
          onChange={onChange}
        />
        <SearchFormBtn type="submit">
          <BiSearchAlt2 size={32} />
        </SearchFormBtn>
      </SearchForm>
    </SearchbarStyle>
  );
};