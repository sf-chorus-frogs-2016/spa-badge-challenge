
require 'faker'

10.times do
  member = Member.new(name: Faker::Name.name)
  member.save
end

5.times do
  10.times do |i|
    badge = Badge.new(
      member_id: i,
      title: Faker::Company.catch_phrase)
    rand(1..10).times do
      badge.upvote
    end
    rand(1..10).times do
      badge.downvote
    end
    badge.save
  end
end
