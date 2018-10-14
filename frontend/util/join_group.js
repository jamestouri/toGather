


export const joinGroup = data => {
  return $.ajax({
    method: 'POST',
    url: '/api/join_groups',
    data: {data}
  })
}


export const leaveGroup = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/join_groups'
  })
}
