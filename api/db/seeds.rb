# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
5.times do |count|
  Student.create(name:Faker::Name.first_name)
end


100.times do
  Vote.create(student_id: rand(1..5), badge_id: rand(1..20), vote_value: [-1,1].sample)
end

20.times do
  Badge.create(student_id: rand(1..5), text:Faker::Company.bs)
end

Badge.all.each do |badge|
  badge.update_attribute(:vote_total, badge.calculate_vote_total)
end
