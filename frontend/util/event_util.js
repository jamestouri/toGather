
export const fetchEvents = events => {
  return $.ajax({
    method: 'GET',
    url: 'api/events',
    data: {events}
  });
};

export const fetchEvent = id => {
  return $.ajax({
    method: 'GET',
    url: `api/events/${id}`
  });
};

export const createEvent = event => {
  return $.ajax({
    method: 'POST',
    url: 'api/events',
    data: event,
    contentType: false,
    processData: false
  })
}
