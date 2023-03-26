// import { AiOutlineSearch } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import {
  SearchBar,
  SearchForm,
  SearchButton,
  SearchInput,
} from './Searchbar.styled';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';


export const Searchbar = ({onSubmit}) => {
const [query , setQuery] = useState('')


const handleSearch = (e)=> {
  setQuery(e.currentTarget.value.toLowerCase())
}

const handleSubmit = e => {
  e.preventDefault();
  if (query.trim() === '') {
    return toast.error('Please enter a search something');
  }
  onSubmit(query);
}
return (
  <SearchBar>
    <SearchForm onSubmit={handleSubmit}>
      <SearchButton type='submit'>
      {/* <AiOutlineSearch size="2rem" /> */}
      </SearchButton>
      <SearchInput
           value={query}
           onChange={handleSearch}
           type="text"
           autocomplete="off"
      
           placeholder="Search images and photos">
        
      </SearchInput>
    </SearchForm>
    <ToastContainer autoClose={false} draggable={false} />
  </SearchBar>
);







}