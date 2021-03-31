import Popover from '../Popover/Popover';
import Typography from '../Typography/Typography';
import {
  FilterButtonsContainer,
  FilterPopoverContainer
} from './filtersStyles';
import Form from '../Form/Form';
import Button from '../Button/Button';

const FilterContainer = ({
  children,
  popoverContent,
  onSubmit,
  loading,
  onClean,
  open,
  setOpen,
  disableClearButton
}) => {
  return (
    <Popover
      width={400}
      popoverOrigin={{ vertical: 'top', horizontal: 'right' }}
      containerOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      responsiveType="bottomsheet"
      paperProps={{ elevation: 10, radius: 15 }}
      open={open}
      setIsOpen={setOpen}
      popoverContent={
        <FilterPopoverContainer>
          <Typography size={1.2} margin="0 0 2rem">
            Filtrar por:
          </Typography>
          <Form loading={loading} onSubmit={onSubmit}>
            {popoverContent}
            <FilterButtonsContainer>
              <Button
                fullWidth
                type="submit"
                weight="semi-bold"
                isLoading={loading}
              >
                Aplicar
              </Button>
              <Button
                fullWidth
                onClick={onClean}
                weight="semi-bold"
                variant="gray"
                disabled={disableClearButton || loading}
              >
                Limpiar
              </Button>
            </FilterButtonsContainer>
          </Form>
        </FilterPopoverContainer>
      }
    >
      {children}
    </Popover>
  );
};

export default FilterContainer;
