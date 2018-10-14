json.group do
  json.partial! '/api/groups/group', group: @group
end

json.user do
  json.partial! '/api/users/user', user: @group.user
end
