import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, Typography } from '@material-ui/core';
import PoolJoin from '../PoolJoin';
import PoolList from '../PoolList';
import { getPools, postCreatePool, postJoinPool } from '../../httpClient/axios';
import './style.css';

function Profile() {
  const [data, setData] = useState();
  const [poolText, setPoolText] = useState();

  const { userid } = useParams();

  useEffect(() => {
    (async () => {
      const res = await getPools(userid);
      setData(res.data.pools);
    })();
  }, [userid]);
  // export const getPools = (userId) => {
  //   return axios.get(`${base_url}/pool/user/${userId}`);
  // };

  const createPoolHandler = async () => {
    const res = await postCreatePool(userid);
    setData(res.data.pools);
    // object of arrays {id: int, nanoId: str, predictions:[], user_pool:{}}
    // console.log('createPoolHandler log', res.data.pools);
  };

  // export const postCreatePool = (userId) => {
  //   console.log('post request', userId);
  //   return axios.post(`${base_url}/pool/user/${userId}`);
  // };

  const joinPoolSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await postJoinPool(poolText, userid);
      setData(res.data.pools);
    } catch (e) {
      console.log(e);
    }
    setPoolText('');
  };

  // export const postJoinPool = (poolId, userId) => {
  //   return axios.post(`${base_url}/pool/${poolId}/user/${userId}`);
  // };

  return (
    <div className='profile__container'>
      <Typography className='profile__header' variant='h5'>
        Join / Create Pool
      </Typography>
      <Box m={1}>
        <PoolJoin
          changeHandler={(e) => setPoolText(e.target.value)}
          submitHandler={joinPoolSubmitHandler}
          value={poolText}
        />
      </Box>
      <Box m={1} mb={2}>
        <Button
          className='profile_addpool'
          variant='outlined'
          color='secondary'
          onClick={createPoolHandler}
        >
          Add New Pool
        </Button>
      </Box>
      <PoolList data={data} />
    </div>
  );
}

export default Profile;
