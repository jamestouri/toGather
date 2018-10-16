
export const joinGroup = join_group => {
  return $.ajax({
    method: 'POST',
    url: '/api/join_groups',
    data: {join_group}
  })
}


export const leaveGroup = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/join_groups'
  })
}
