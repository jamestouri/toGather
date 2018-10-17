@join_groups.each do |join_group|
  json.set! join_group.id do
    json.userId @join_group.user_id
    json.groupId @join_group.group_id
  end
end
