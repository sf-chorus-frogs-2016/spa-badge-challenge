# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'faker'

10.times do
  player = Player.new(name: Faker::Name.name)
  player.save
end

# 5.times do
#   10.times do |i|
#     badge = Badge.new(
#       player_id: i,
#       title: Faker::Company.catch_phrase)
#     rand(1..10).times do
#       badge.upvote
#     end
#     rand(1..10).times do
#       badge.downvote
#     end
#     badge.save
#   end
# end

40.times do
  Badge.create(title: Faker::Company.catch_phrase, player_id: rand(1..10), points: rand(1..10))
end
