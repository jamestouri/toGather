json.join_group do
    json.partial! '/api/join_groups/join_group', join_group: @join_group
end

json.user do
    json.partial! '/api/users/user', user: @join_group.user
end

json.group do
  json.partial! '/api/groups/group', group: @join_group.group
end 
