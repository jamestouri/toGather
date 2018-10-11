

export const fetchGroups = groups => {
  $.ajax({
    method: 'GET',
    url: 'api/groups',
    groups
  });
};

export const fetchGroup = id => {
  $.ajax({
    method: 'GET',
    url: `api/groups/${id}`
  });
};

export const createGroup = group => {
  $.ajax({
    method: 'POST',
    url: 'api/groups',
    data: group
  })
}
