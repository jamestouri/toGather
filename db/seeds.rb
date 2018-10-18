# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


users = []
User.all.each do |user|
  users.push(user)
end


groups = []
Group.all.each do |group|
  groups.push(group)
end

rando = Random.new
random_number = rando.rand(0..6)
random_number_str = random_number.to_s


random_group = rando.rand(0..24)

event_titles = ['Last Concert of the Year', 'Puppy Hugs Stress Relief', 'Daily Snowboard Trip', 'AI Robots Wrestling Club', 'One True Morty Search', 'Build Your Rocket', 'Father Daughter Pie Baking']

body = ["San Francisco has something for everyone. Foodies should grab a burrito in the Mission and hit up Farmers Market at the Ferry Building. Shop shoes and boutiques in Hayes Valley. Get outside and stroll Golden Gate Park, say Hi to the Bison (seriously). See the city from the water by taking a ferry or catamaran under the bridge.",
"When Gillum was in the first grade, his mother left his father (who is an associate professor of art at CSU Fresno).[3] Gillum moved in with his grandparents in Berkeley, California. They later moved to North Oakland, although Gillum continued to attend school in Berkeley.",
"Want to know what’s happening in New York today, this weekend or in the coming months? Our NYC events calendar for 2018 is your guide for finding the best things to do in summer and during the colder months. Major things to do in fall include the Village Halloween Parade and the Macy’s Thanksgiving Day Parade.",
"The 2018 Four Seasons Maldives Surfing Champions Trophy has kicked off in stunning conditions with Australian Josh Kerr taking out the opening round single-fin division. Sultans turned it on for the opening day of the world’s most luxurious surfing event with clean 4-to-6 foot waves rifling down the reef",
"MTC is the developer of the StreetSaver® pavement management software with more than 400 users nationwide, consisting predominantly of cities and counties; MTC also uses the software to perform regional street and road needs assessments for the 109 cities and counties in the San Francisco Bay Area. Since 2008, StreetSaver",
"Empire Startups is the largest community of FinTech entrepreneurs, investors, and banking innovators in the world.  We accelerate innovation by bridging the gap between entrepreneurs, investors, and domain experts.",
"This website lists all of the AI and ML related events, meetups, conferences, exhibitions and other events that people interested in Artificial Intelligence would find useful."
]

event_location = ['Pasadena College', 'McDonalds on Market', 'The Moon', 'Earth at C-137', 'Dagobah System', 'Levi Stadium', 'Shoreline Amphitheatre']

date_and_time = ['Wed, 10 Oct 2018 01:24:00 UTC +00:00', 'Fri, 9 Nov 2018 08:24:00 UTC +00:00', 'Tue, 4 Dec 2018 14:24:00 UTC +00:00', 'Tue, 19 Feb 2019 16:24:00 UTC +00:00', 'Wed, 5 Jun 2019 7:24:00 UTC +00:00', 'Mon, 3 Dec 2018 14:24:00 UTC +00:00', 'Mon, 12 Aug 2019 18:24:00 UTC +00:00']

50.times do
  i = 0
  event = Event.create(title: event_titles[random_number], location: event_location[random_number], body: body[random_number], group_id: groups[random_group], user_id: users[random_number], date_time: date_and_time[random_number])
  file = File.open("app/assets/images/events/#{random_number_str}.jpg")
  event.image.attact(io: file, filename: "#{i.to_s}.jpg")
  i += 1
end
