import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { doc, deleteDoc, getDocs, collection } from 'firebase/firestore';
import { db } from '../../../firebase/firebase.util';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import {
  Button,
  FormControl,
  Input,
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Paper,
  Tooltip
} from '@mui/material';

import { visuallyHidden } from '@mui/utils';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LoadingPage from '../../Loading/Loading';

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
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired
};

const EnhancedTable = ({ tableHeader }) => {
  const auth = getAuth();
  //const user = auth.currentUser;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('last_date');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const [searched, setSearched] = useState('');

  const usersRef = collection(db, 'users');

  const getUsers = async () => {
    //console.log('hello');
    try {
      const usersData = await getDocs(usersRef);
      const users = usersData.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }));
      //console.log(jobs);
      //console.log(expiredJobs);
      setRows(users);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  useEffect(() => {
    setLoading(true);
    getUsers();
  }, []);

  const requestSearch = (e) => {
    setSearched(e.target.value);
  };

  const getFilteredRows = () => {
    if (searched === '') {
      return rows;
    }

    return rows.filter((user) =>
      user.name.toLowerCase().includes(searched.toLowerCase())
    );
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

  const handleDelete = async (e, userID) => {
    e.preventDefault();
    setLoading(true);
    deleteDoc(doc(db, 'users', userID))
      .then(async () => {
        getUsers();
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  };

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const printEditIcon = (userID) => {
    return (
      <Link to={`/users/update/${userID}`}>
        <Tooltip title="Edit">
          <EditIcon sx={{ color: '#1976D2' }} />
        </Tooltip>
      </Link>
    );
  };

  const printDeleteIcon = (userID) => {
    return (
      <Tooltip title="Delete">
        <DeleteIcon
          sx={{ color: 'red', cursor: 'pointer' }}
          onClick={(e) => handleDelete(e, userID)}
        />
      </Tooltip>
    );
  };

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

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
            Users
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
              rowCount={rows.length}
              tableHeader={tableHeader}
            />
            <TableBody>
              {stableSort(getFilteredRows(), getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((user, index) => {
                  return (
                    <TableRow hover key={user.id}>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{printDeleteIcon(user.id)}</TableCell>
                      <TableCell>{printEditIcon(user.id)}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows
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
          count={rows.length}
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
