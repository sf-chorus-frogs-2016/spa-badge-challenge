# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Person.delete_all
Badge.delete_all


people = ["Ovi Calvo","Bernice Anne W. Chau","Beni Shpringer","Coleby Kent","Fatma Ocal","Joshua Kim","Luis De Castro","Hanah Yendler","Regina Wong","Jonathan Huang","Karla King","Lindsey Stevenson","Natasha Thapliyal","Ryan Ho","Sean Massih","Shawn Spears","Michael Du","Michael Whelpley","Walter Kerr"]


people.each do |person|
  Person.create(name: name)
end

def badge_swag
  {
  	body: Faker::Hipster.sentence(3, false, 4),
  	votes: rand(50),
  	person_id: rand(1..19)
  }
end

100.times do
  Badge.create(badge_swag)
end



