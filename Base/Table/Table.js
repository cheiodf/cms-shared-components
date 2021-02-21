import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { tableDefaultProps, tableProps } from './tableProps';
import Pagination from './Pagination';
import Paper from '../Paper/Paper';
import {
  TableBody,
  TableContainer,
  Container,
  TableFullContainer
} from './tableStyles';
import useWindowSize from '../../../cms-shared-components/hooks/useWindowSize';
import TableRow from './TableRow';
import TableHeader from './TableHeader';
import TableHead from './TableHead';

const Table = ({
  data,
  columns,
  totalPages,
  page,
  onChangePagination,
  options,
  avatar,
  globalActions,
  title,
  primaryKey,
  path
}) => {
  const [hasOptionsShadow, setHasOptionsShadow] = useState(false);

  const [sortedData, setSortedData] = useState([...data]);
  const [sortByColumn, setSortByColumn] = useState({
    column: columns?.length ? columns[0].key : '',
    order: 1
  });

  const [selectedData, setSelectedData] = useState([]);

  const [size] = useWindowSize();
  const tableScroll = useRef();

  // row options shadow
  const setOptionsShadow = useCallback(
    e => {
      if (options?.length) {
        const newValue = e.scrollWidth - e.clientWidth - e.scrollLeft > 20;
        newValue !== hasOptionsShadow && setHasOptionsShadow(newValue);
      }
    },
    [options, hasOptionsShadow]
  );

  // shadow on resize window
  useEffect(() => {
    setOptionsShadow(tableScroll.current);
  }, [size, options]);

  return (
    <Container>
      <Paper elevation={5} radius={10}>
        <TableHeader
          title={title}
          globalActions={globalActions}
          selectedData={selectedData}
        />
        <TableFullContainer
          ref={tableScroll}
          onScroll={e => setOptionsShadow(e.target)}
        >
          <TableContainer>
            <TableHead
              columns={columns}
              hasGlobalActions={globalActions?.length}
              hasOptions={options?.length}
              sortByColumn={sortByColumn}
              setSortByColumn={setSortByColumn}
              setSelectedData={setSelectedData}
              setSortedData={setSortedData}
              hasOptionsShadow={hasOptionsShadow}
              isChecked={selectedData.length === data.length}
              data={data}
            />
            <TableBody>
              {sortedData.map((el, index) => {
                return (
                  <TableRow
                    key={el[primaryKey]}
                    columns={columns}
                    item={el}
                    dataLength={data.length}
                    index={index}
                    options={options}
                    hasShadow={hasOptionsShadow}
                    avatar={avatar}
                    hasGlobalActions={globalActions?.length}
                    primaryKey={primaryKey}
                    selectedData={selectedData}
                    setSelectedData={setSelectedData}
                    path={path}
                  />
                );
              })}
            </TableBody>
          </TableContainer>
        </TableFullContainer>
        {totalPages && (
          <Pagination
            totalPages={totalPages}
            actualPage={page}
            onChange={onChangePagination}
          />
        )}
      </Paper>
    </Container>
  );
};

Table.propTypes = tableProps;
Table.defaultProps = tableDefaultProps;

export default memo(Table);
