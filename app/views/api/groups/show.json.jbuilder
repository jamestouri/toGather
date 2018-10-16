json.group do
  json.partial! '/api/groups/group', group: @group
end

json.user do
  json.partial! '/api/users/user', user: @group.user
end

json.events do
  json.partial! '/api/events/index', events: @group.events
end 
