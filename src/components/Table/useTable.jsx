import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FilterListIcon from '@mui/icons-material/FilterList';
import {
  Button,
  FormControl,
  Input,
  TextField,
  Typography
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { getAuth } from 'firebase/auth';

const options = { year: 'numeric', month: 'long', day: 'numeric' };

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort, tableHeader } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  const headCells = tableHeader;

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            padding={'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              sx={{ fontWeight: 'bold' }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}

        <TableCell />
        <TableCell />
        <TableCell />
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired
};

const EnhancedTable = ({ jobs, tableHeader }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  console.log(user.uid);

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('last_date');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [rows, setRows] = useState(jobs);
  //const [searched, setSearched] = useState('');

  const requestSearch = (e) => {
    let searched = e.target.value;

    if (searched.value === '') {
      setRows(jobs);
    } else {
      let filtered = jobs.filter((job) => {
        return job.company.toLowerCase().includes(searched.toLowerCase());
      });
      setRows(filtered);
    }
  };

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const printEditIcon = (userID) => {
    if (userID === user.uid) {
      return <EditIcon sx={{ color: '#1976D2' }} />;
    } else {
      return null;
    }
  };

  const printDeleteIcon = (userID) => {
    if (userID === user.uid) {
      return <DeleteIcon sx={{ color: 'red' }} />;
    } else {
      return null;
    }
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - jobs.length) : 0;

  return (
    <Box sx={{ width: '100%' }} mt={10}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 }
          }}
        >
          <Typography
            sx={{
              flex: '1 1 100%',
              fontWeight: 'bold',
              textTransform: 'uppercase'
            }}
            variant="h6"
            id="tableTitle"
            component="div"
          >
            Off Campus Jobs
          </Typography>
          <Box mr={5} sx={{ display: 'flex', alignItems: 'center' }}>
            <FormControl
              sx={{
                width: '25ch'
              }}
            >
              <Input
                sx={{
                  margin: 1,
                  height: '5ch'
                }}
                placeholder="Search Company"
                inputProps={{ 'aria-label': 'search' }}
                onChange={requestSearch}
              />
            </FormControl>

            <SearchIcon
              sx={{ marginTop: '12px', height: '30px', width: '30px' }}
            />
          </Box>
          <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={'medium'}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={jobs.length}
              tableHeader={tableHeader}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((job, index) => {
                  //console.log(typeof job.userID);
                  return (
                    <TableRow hover key={job.id}>
                      <TableCell>{job.tagline}</TableCell>
                      <TableCell>{job.company}</TableCell>
                      <TableCell>{job.position}</TableCell>
                      <TableCell>{job.batch}</TableCell>
                      <TableCell>
                        {job.last_date
                          .toDate()
                          .toLocaleDateString('en', options)}
                      </TableCell>
                      <TableCell>
                        <Link
                          to={`/off-campus-jobs/${job.id}`}
                          style={{
                            textDecoration: 'none',
                            width: '100%',
                            color: 'black'
                          }}
                        >
                          <PageviewOutlinedIcon />
                        </Link>
                      </TableCell>

                      <TableCell>{printDeleteIcon(job.userID)}</TableCell>

                      <TableCell>{printEditIcon(job.userID)}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={jobs.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
};

export default EnhancedTable;
