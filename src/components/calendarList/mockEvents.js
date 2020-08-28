const mockEvents = [
  {
    start: '2020-08-07 00:30:00',
    end: '2020-08-07 01:30:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
    id: 0,
  },
  {
    start: '2020-08-07 01:30:00',
    end: '2020-08-07 02:20:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
    id: 1,
  },
  {
    start: '2020-08-07 04:10:00',
    end: '2020-08-07 04:40:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
    id: 2,
  },
  {
    start: '2020-08-07 01:05:00',
    end: '2020-08-07 01:45:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
    id: 3,
  },
  {
    start: '2020-08-07 14:30:00',
    end: '2020-08-07 16:30:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
    id: 4,
  },
  {
    start: '2020-08-08 01:20:00',
    end: '2020-08-08 02:20:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
    id: 5,
  },
  {
    start: '2020-08-08 04:10:00',
    end: '2020-08-08 04:40:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
    id: 6,
  },
  {
    start: '2020-08-08 00:45:00',
    end: '2020-08-08 01:45:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
    id: 7,
  },
  {
    start: '2020-08-08 11:30:00',
    end: '2020-08-08 12:30:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
    id: 8,
  },
  {
    start: '2020-08-09 01:30:00',
    end: '2020-08-09 02:00:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
    id: 9,
  },
  {
    start: '2020-08-09 03:10:00',
    end: '2020-08-09 03:40:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
    id: 10,
  },
  {
    start: '2020-08-09 00:10:00',
    end: '2020-08-09 01:45:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
    id: 11,
  },
  {
    start: '2020-08-04 00:10:00',
    end: '2020-08-04 01:45:00',
    title: 'Dr. Mariana Joseph',
    summary: '3412 Piedmont Rd NE, GA 3032',
    id: 12,
  },
];

const markedDates = {
  '2020-08-16': { selected: true, marked: true, selectedColor: 'blue' },
  '2020-08-17': { marked: true },
  '2020-08-18': { marked: true, dotColor: 'red', activeOpacity: 0 },
  '2020-08-19': { disabled: true, disableTouchEvent: true },
};

export default mockEvents;
