
export const joinGroup = joinGroup => {
  return $.ajax({
    method: 'POST',
    url: '/api/join_groups',
    data: joinGroup
  })
}


export const leaveGroup = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/join_groups'
  })
}
