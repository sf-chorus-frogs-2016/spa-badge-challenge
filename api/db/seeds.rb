# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

names = ["Ovi Calvo","Bernice Anne W. Chau","Beni Shpringer","Coleby Kent","Fatma Ocal","Joshua Kim","Luis De Castro","Hanah Yendler","Regina Wong","Jonathan Huang","Karla King","Lindsey Stevenson","Natasha Thapliyal","Ryan Ho","Sean Massih","Shawn Spears","Michael Du","Michael Whelpley"]

18.times do |i|
  User.create(name: names[i-1])
end

100.times do |i|
  num = rand(1..18)

  Badge.create(body: Faker::Lorem.sentence, user_id: num)
end
