json.event do
  json.partial! '/api/events/event', group: @event
end

json.user do
  json.partial! '/api/users/user', user: @event.user
end

json.group do
  json.partial! '/api/groups/group', user: @event.group
end
