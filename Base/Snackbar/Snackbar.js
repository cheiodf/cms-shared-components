import props from './snackbarProps';
import { SnackbarContainer, SnackbarList } from './snackbarStyles';
import { useSelector } from 'react-redux';
import SnackbarItem from './SnackbarItem';
import { useEffect, useState } from 'react';

const Snackbar = () => {
  const { list } = useSelector(({ snackbars }) => snackbars);
  const [listToRender, setListToRender] = useState([]);
  const [snackbarToClose, setSnackbarToClose] = useState('');

  useEffect(() => {
    if (!snackbarToClose) {
      if (list.length > 3) {
        setSnackbarToClose(snackbarToClose + list[list.length - 4]?.id);
        setTimeout(() => {
          setListToRender(
            list.slice(list.length - 3 >= 0 ? list.length - 3 : 0, list.length)
          );
          setSnackbarToClose(
            snackbarToClose.replace(list[list.length - 4]?.id, '')
          );
        }, 500);
      } else {
        setListToRender(list);
      }
    }
  }, [list, setSnackbarToClose, snackbarToClose, setListToRender]);

  if (!list?.length) return null;

  return (
    <SnackbarContainer>
      <SnackbarList>
        {listToRender.map((snackbar, i) => (
          <SnackbarItem
            key={snackbar.id}
            {...snackbar}
            close={snackbarToClose.includes(snackbar.id)}
            index={i}
          />
        ))}
      </SnackbarList>
    </SnackbarContainer>
  );
};

Snackbar.propTypes = props;

export default Snackbar;
