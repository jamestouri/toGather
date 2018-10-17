
export const joinRsvp = rsvp => {
  return $.ajax({
    method: 'POST',
    url: `/api/rsvps`,
    data: {rsvp}
  })
}

export const fetchRsvps = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/rsvps`
  })
}


export const cancelRsvp = () => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/rsvps`
  })
}

export const fetchRsvp = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/rsvps/${id}`
  })
}
