# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(email: 'james@james.com', first_name: 'james', last_name: 'touri', password: '123456')
user1 = User.create(email: 'aaron@aaron.com', first_name: 'aaron', last_name: 'sis', password: '123456')
user2 = User.create(email: 'tim@tim.com', first_name: 'Tim', last_name: 'Stapes', password: '123456')
user3 = User.create(email: 'nick@nick.com', first_name: 'Nick', last_name: 'Cas', password: '123456')
user4 = User.create(email: 'oli@oli.com', first_name: 'Oli', last_name: 'Pierce', password: '123456')
user5 = User.create(email: 'tony@tony.com', first_name: 'Tony', last_name: 'Spamony', password: '123456')
user6 = User.create(email: 'allan@allan.com', first_name: 'Allan', last_name: 'Verk', password: '123456')
user0 = User.create(email: 'brand@brand.com', first_name: 'Brand', last_name: 'Bol', password: '123456')

rando = Random.new

about = ['Kaiser Karl der Grosse
  served with the active fleet until 1908, participating in the normal peacetime routine of training cruises
  and fleet maneuvers. By 1908, the new "all-big-gun" dreadnought battleships were entering service. As these
  rendered her obsolete, Kaiser Karl der Grosse was withdrawn from active service and placed in the Reserve Division.',"
Sport in childhood. Association football, shown above, is a team sport which also provides opportunities to nurture physical fitness and social interaction skills.
Sport (British English) or Sports (American English) includes all forms of competitive physical activity or games which,[1] through casual or organised participation, aim to use, maintain or improve physical ability and skills while providing enjoyment to participants, and in some cases, entertainment for spectators.",
"He was largely responsible for helping revive Apple, which had been at the verge of bankruptcy. He worked closely with designer Jony Ive to develop a line of products that had larger cultural ramifications, beginning in 1997 with the 'Think different' advertising campaign and leading to the iMac, iTunes, iTunes Store, Apple Store, iPod, iPhone, App Store, and the iPad.",
"This project aims to enhance the temperature range of the Thermal History Coating up to 1,500C and beyond. The final goal of this project is improving the safety of jet engines as well as increasing efficiency and reducing CO2 emissions",
"soon to be named SpaceX. Musk approached rocket engineer Tom Mueller (now SpaceX's CTO of Propulsion) and Mueller agreed to work for Musk, and thus SpaceX was born.",
"The traditional Scouting divisions are Cub Scouting for boys and girls ages 6 to 11 years, Boy Scouting for boys ages 11 to 18, and Venturing for young men and women ages 14 (or 13 and having completed the 8th grade) through 21",
"The Boeing Company is an American multinational corporation that designs, manufactures, and sells airplanes, rotorcraft, rockets, satellites, and missiles worldwide"
]

users = []
User.all.each do |user|
  users.push(user)
end

location = ['San Francisco, CA', 'Oakland, CA', 'New York, NY', 'Berkeley, CA', 'Davis, CA', 'Los Angeles, CA']
category = ['Social', 'Outdoor', 'Dating', 'Video Games', 'Volunteering', 'Drinking', 'Eating']
title = ['Zoos Unite', 'Ships For Sail', 'Shellfishly Kind', "Donuts feel Empty", "Space Enthusiasts", "Food love", "AI Get-together"]

groups = []


25.times do
  i = 0
  group = Group.create(title: title[rando.rand(0..6)], location: location[rando.rand(0..6)], category: category[rando.rand(0..6)], about: about[rando.rand(0..6)], user_id: users[rando.rand(0..6)].id)
  file = File.open("app/assets/images/groups/#{rando.rand(0..6).to_s}.jpg")
  group.image.attach(io: file, filename: "#{i.to_s}.jpg")
  groups.push(group)
  i += 1
end


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
  event = Event.create(title: event_titles[rando.rand(0..6)], location: event_location[rando.rand(0..6)], body: body[rando.rand(0..6)], group_id: groups[rando.rand(0..24)], user_id: users[rando.rand(0..6)], date_time: date_and_time[rando.rand(0..6)])
  file = File.open("app/assets/images/events/#{rando.rand(0..6).to_s}.jpg")
  event.image.attach(io: file, filename: "#{i.to_s}.jpg")
  i += 1
end
