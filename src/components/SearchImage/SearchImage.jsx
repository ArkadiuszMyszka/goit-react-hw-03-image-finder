import axios from 'axios';

export const fetchImages = async (im, page) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${im}&page=${page}&key=37023743-d51dbf694d310f38a519c680c&image_type=photo&orientation=horizontal&per_page=12`
  );
  return data;
};
