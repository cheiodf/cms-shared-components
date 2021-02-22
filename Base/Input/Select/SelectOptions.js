import { useState, memo } from 'react';
// components
import Textbox from '../Textbox/Textbox';
// styles
import {
  SelectDialog,
  SelectOptionsContainer,
  SelectOptionContainer,
  SelectOptionsNotResults,
  SelectInputSearchContainer
} from './selectStyles';
// Icons
import { SearchIcon } from '../../../../components/Icons';
import Checkbox from '../Checkbox/Checkbox';
import Typography from '../../Typography/Typography';
import Paper from '../../Paper/Paper';

const SelectOptions = ({
  options,
  isSelected,
  setValue,
  toggleOptions,
  multiple,
  hasSearch,
  name
}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleOnClick = value => {
    !multiple && toggleOptions();
    setValue(value);
  };

  const searchOptions = options.filter(({ title }) =>
    `${title}`.toLowerCase().includes(searchValue.toLowerCase().trim())
  );

  const isSearchVisible =
    typeof hasSearch === 'boolean' ? hasSearch : options?.length > 5;

  return (
    <SelectDialog onClick={e => e.stopPropagation()}>
      <Paper elevation={6}>
        {isSearchVisible && (
          <SelectInputSearchContainer>
            <Textbox
              margin="0 0 .25em"
              placeholder="Buscar"
              IconRight={SearchIcon}
              size="sm"
              onChange={e => setSearchValue(e.target.value)}
              name={`${name}_search`}
            />
          </SelectInputSearchContainer>
        )}
        <SelectOptionsContainer>
          {searchOptions?.length ? (
            searchOptions.map(({ title, value }) => {
              const selected = isSelected(value);
              return (
                <SelectOptionContainer
                  key={value}
                  isSelected={selected}
                  onClick={() => handleOnClick(value)}
                >
                  {multiple && (
                    <Checkbox
                      checked={selected}
                      id={value}
                      onChange={() => null}
                      onClick={e => e.stopPropagation()}
                    />
                  )}
                  <Typography
                    tag="span"
                    size={1}
                    maxLines={2}
                    color={
                      selected
                        ? 'var(--input-select-item-check-color)'
                        : 'var(--input-select-item-color)'
                    }
                  >
                    {title}
                  </Typography>
                </SelectOptionContainer>
              );
            })
          ) : (
            <SelectOptionsNotResults>
              ¡No hay resultados!
            </SelectOptionsNotResults>
          )}
        </SelectOptionsContainer>
      </Paper>
    </SelectDialog>
  );
};

export default memo(SelectOptions);
