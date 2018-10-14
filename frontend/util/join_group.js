


export const createJoinGroup = data => {
  return $.ajax({
    method: 'POST',
    url: '/api/join_groups',
    data: {data}
  })
}


export const deleteJoinGroup = () => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/join_groups'
  })
}
