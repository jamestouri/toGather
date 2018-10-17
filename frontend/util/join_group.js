
export const joinGroup = join_group => {
  return $.ajax({
    method: 'POST',
    url: '/api/join_groups',
    data: {join_group}
  })
}

export const fetchJoinGroups = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/join_groups',
  })
}

export const leaveGroup = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/join_groups'
  })
}

export const fetchJoinGroup = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/join_groups/${id}`,
  })
}
