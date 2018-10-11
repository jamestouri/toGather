json.group do
  json.partial! '/api/groups/group', group: @group
  json.user @group.user_id
end

json.users do
  json.set! @group.user_id do
    json.extract! @group.user, :id, :first_name, :last_name
  end
end
