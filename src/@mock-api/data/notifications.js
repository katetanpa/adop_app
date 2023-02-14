import { SERVICE_URL } from 'config';
import api from '../api';

const notificationData = [
  {
    id: 1,
    img: '/img/profile/tasks.webp',
    title: 'tasks-1',
    detail: 'Brief Check Data Mapping',
    link: '#/',
  },
  {
    id: 2,
    img: '/img/profile/tasks.webp',
    title: 'task-2',
    detail: 'Remember Your Inspecting Price Floor',
    link: '#/',
  },
  {
    id: 3,
    img: '/img/profile/tasks.webp',
    title: 'task-3',
    detail: 'You can zoom in if there is too much data',
    link: '#/',
  },
  {
    id: 4,
    img: '/img/profile/tasks.webp',
    title: 'task-4',
    detail: 'Remember to check the Average Bid CPM Line Chart too',
    link: '#/',
  },
];
api.onGet(`${SERVICE_URL}/notifications`).reply(200, notificationData);
