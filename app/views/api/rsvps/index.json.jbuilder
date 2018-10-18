@rsvps.each do |rsvp|
  json.set! rsvp.id do
    json.userId rsvp.user_id
    json.eventId rsvp.event_id
  end
end
