

export const fetchGroups = groups => {
  return $.ajax({
    method: 'GET',
    url: 'api/groups',
    data: {groups}
  });
};

export const fetchGroup = id => {
  return $.ajax({
    method: 'GET',
    url: `api/groups/${id}`
  });
};

export const createGroup = group => {
  return $.ajax({
    method: 'POST',
    url: 'api/groups',
    data: {group}
  })
}
