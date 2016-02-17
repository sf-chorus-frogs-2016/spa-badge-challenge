# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'faker'

students = ["Mike", "Jon", "Ovi", "Beni", "Fatma", "Karla", "Walter", "Ryan", "Hanah", "Michael", "Lu", "Bernice", "Shawn", "Coleby", "Josh", "Lindsey", "Sean"]
students.each do |student|
  Student.create(name: student)
end

80.times do
  Badge.create(name: Faker::Hacker.adjective, votes: rand(55), student_id: rand(17)+1)
end