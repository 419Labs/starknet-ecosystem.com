import { allProjects } from '../../../data/ecosystem';
import axios from 'axios';

const getAccessToken = (): Promise<string> =>
  axios.request({
    method: 'POST',
    url: `https://${process.env.AUTH0_DOMAIN}/oauth/token`,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: process.env.AUTH0_CLIENT_ID || '',
      client_secret: process.env.AUTH0_CLIENT_SECRET || '',
      audience: process.env.AUTH0_AUDIENCE || ''
    })
  })
    .then((response) => response.data)
    .then((response) => response.access_token)
    .catch((e) => console.log(e))

const pushData = (token: string): Promise<string> =>
  axios.request({
    method: 'PUT',
    url: `${process.env.STARKNET_DB_URL}/projects`,
    headers: { 'content-type': "application/json", "Authorization": `Bearer ${token}` },
    data: allProjects
  }).then((response) => response.data)
    .then((response) => response.access_token)
    .catch((e) => console.log(e))

const refreshTwitter = (token: string): Promise<string> =>
  axios.request({
    method: 'POST',
    url: `${process.env.STARKNET_DB_URL}/projects/refresh-twitter`,
    headers: { "Authorization": `Bearer ${token}` },
  })

getAccessToken()
  .then(async token => {
    await pushData(token)
    await refreshTwitter(token)
  });
