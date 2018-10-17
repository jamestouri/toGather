if @rsvp
  json.set! @rsvp.id do
    json.userId @rsvp.user_id
    json.groupId @rsvp.group_id
  end
end
