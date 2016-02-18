# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'faker'

names = ["Bernice", "Mike", "Jon", "Ovi", "Beni", "Fatma", "Karla", "Walter", "Ryan", "Hanah", "Michael", "Lu", "Shawn", "Coleby", "Josh", "Lindsey", "Sean"]

names.each do |each_name|
  Person.create(name: each_name)
end

Person.all.each do |each_person|
  5.times do |count|
    test_badge = Badge.create(sentence: Faker::Lorem.sentence, votes: rand(1..10) )
    Person.find(each_person.id).badges << test_badge
  end
end
