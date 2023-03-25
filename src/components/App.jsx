import { ToastContainer, toast } from 'react-toastify';
import { fetchImg } from '../services/Api';
import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { useState, useEffect  } from 'react';


export const App = () => {
  const [search, setSearch] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false)
  

  useEffect(() => {
    if (!search) {
      return;
    }
    setIsLoading(true);
    fetchImg(search, page).then(response => {
      if (!response.hits.length) {
        toast.error(`This request ${search} is not found`);
        return;
      }

      setImages(prevState =>
        page === 1 ? response.hits : [...prevState, ...response.hits]
      );
      setShowBtn(page < Math.ceil(response.totalHits / 12));
      setTotalHits(response.totalHits);
      setIsLoading(false);
    });
  }, [search, page,showBtn, totalHits]);

  const handleSearch = text => {
    setSearch(text);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(prePage => prePage + 1);
  };
  return (
    <>
      <Searchbar onSubmit={handleSearch} />
      {isLoading && <Loader />}
      {images && <ImageGallery images={images} />}
      {showBtn && <Button onLoadMore={handleLoadMore} />}
      <ToastContainer />
    </>
  );
};
