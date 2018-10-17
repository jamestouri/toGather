@rsvps.each do |rsvp|
  json.set! join_group.id do
    json.userId rsvp.user_id
    json.groupId rsvp.group_id
  end
end
