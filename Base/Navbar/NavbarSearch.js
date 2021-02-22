import { memo, useEffect } from 'react';
import Button from '../Button/Button';
import Textbox from '../Input/Textbox/Textbox';
import {
  NavSearchContainer,
  NavSearchSubcontainer,
  NavSearchCloseIcon
} from './navbarStyles';
import { CrossIcon, SearchIcon } from '../../../components/Icons';
import Form from '../Form/Form';
import Hidden from '../Hidden/Hidden';
import { useForm } from 'react-hook-form';
import { search } from '../../../store/Search/searchActions';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

const NavbarSearch = ({ open, toggleSearch }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => dispatch(search(data.search));

  useEffect(() => {
    dispatch(search(''));
    reset({ search: '' });
  }, [router.pathname]);

  return (
    <NavSearchContainer open={open}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <NavSearchSubcontainer>
          <Hidden up="sm">
            <NavSearchCloseIcon onClick={toggleSearch}>
              <CrossIcon width="16" color="#fff" />
            </NavSearchCloseIcon>
          </Hidden>

          <Textbox
            margin="0"
            name="search"
            placeholder="Buscar"
            ref={register}
          />
          <Button rounded variant="white" margin="0" type="submit">
            <SearchIcon width="15" color="var(--search-secondary-color)" />
          </Button>
        </NavSearchSubcontainer>
      </Form>
    </NavSearchContainer>
  );
};

export default memo(NavbarSearch);
