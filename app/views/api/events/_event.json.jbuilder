json.extract! event, :id, :title, :location, :user_id, :body, :date_time, :group_id
if event.image
  json.image_url url_for(event.image)
end
