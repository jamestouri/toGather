json.extract! group, :id, :title, :location, :user_id, :about, :category
if group.image
  json.image_url url_for(group.image)
end
json.events group.events.map { |el| el.id }
