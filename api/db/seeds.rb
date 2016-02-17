# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

require 'faker'

# Creating students
Student.create(name: "Jonathan Huang")
Student.create(name: "Michael Du")
Student.create(name: "Ryan Ho")
Student.create(name: "Regina Wong")
Student.create(name: "Seanfromiran")


# Create Badges
Student.all.each do |student|
  3.times do
    Badge.create(student_id: student.id, text: Faker::Commerce.department)
  end
end

# Votes
Badge.all.each do |badge|
  5.times do
    Vote.create(badge_id: badge.id, student_id: rand(1..5), status: ["up",
      "down"].sample)
  end
end