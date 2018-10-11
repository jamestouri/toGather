json.bench do
  json.partial! '/api/groups/group', bench: @bench
  json.user @bench.user_id
end

json.users do
  json.set! @bench.user_id do
    json.extract! @bench.user_id, :id, :first_name, :last_name
  end
end
