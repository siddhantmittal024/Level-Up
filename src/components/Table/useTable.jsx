import React, { useState, useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { doc, deleteDoc, getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase/firebase.util';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';

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
import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

import LoadingPage from '../Loading/Loading';

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

const EnhancedTable = ({ tableHeader }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('last_date');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const [filteredRows, setFilteredRows] = useState([]);

  const jobsRef = collection(db, 'off-campus-jobs');

  const getJobs = async () => {
    try {
      const jobsData = await getDocs(jobsRef);
      setRows(jobsData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setFilteredRows(
        jobsData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    getJobs();
  }, []);

  //console.log(jobs);

  const requestSearch = (e) => {
    //getJobs();
    let searched = e.target.value;
    if (searched.value === '') {
      setFilteredRows(rows);
    } else {
      let filtered = rows.filter((job) => {
        return job.companyName.toLowerCase().includes(searched.toLowerCase());
      });
      setFilteredRows(filtered);
    }
  };

  const getFilteredRows = () => {
    
  }

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

  const handleDelete = async (e, jobId) => {
    e.preventDefault();
    //console.log(jobId);
    setLoading(true);
    deleteDoc(doc(db, 'off-campus-jobs', jobId))
      .then(async () => {
        getJobs();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  const printEditIcon = (userID, jobID) => {
    if (userID === user.uid) {
      return (
        <Link to={`/jobs/off-campus/update/${jobID}`}>
          <Tooltip title="Edit">
            <EditIcon sx={{ color: '#1976D2' }} />
          </Tooltip>
        </Link>
      );
    } else {
      return null;
    }
  };

  const printDeleteIcon = (userID, jobID) => {
    if (userID === user.uid) {
      return (
        <Tooltip title="Delete">
          <DeleteIcon
            sx={{ color: 'red', cursor: 'pointer' }}
            onClick={(e) => handleDelete(e, jobID)}
          />
        </Tooltip>
      );
    } else {
      return null;
    }
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
          <Link
            style={{
              textDecoration: 'none',
              color: 'black',
              marginRight: 0
            }}
            to={'/jobs/off-campus/add-job'}
          >
            <Button
              variant="contained"
              color="primary"
              sx={{ width: '100px', marginRight: '10px' }}
            >
              Add Job
            </Button>
          </Link>
          {/* <Tooltip title="Filter list">
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip> */}
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
                .map((job, index) => {
                  //console.log(typeof job.userID);
                  return (
                    <TableRow hover key={job.id}>
                      <TableCell>{job.tagline}</TableCell>
                      <TableCell>{job.companyName}</TableCell>
                      <TableCell>{job.position}</TableCell>
                      <TableCell>{job.batch}</TableCell>
                      <TableCell>
                        {job.lastDateToApply
                          .toDate()
                          .toLocaleDateString('en', options)}
                      </TableCell>
                      <TableCell>
                        <Link
                          to={`/jobs/off-campus/${job.id}`}
                          style={{
                            textDecoration: 'none',
                            width: '100%',
                            color: 'black'
                          }}
                        >
                          <Tooltip title="View Job">
                            <PageviewOutlinedIcon />
                          </Tooltip>
                        </Link>
                      </TableCell>

                      <TableCell>
                        {printDeleteIcon(job.userID, job.id)}
                      </TableCell>

                      <TableCell>{printEditIcon(job.userID, job.id)}</TableCell>
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
