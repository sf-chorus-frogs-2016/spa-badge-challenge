# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
chorus_frogs= ["Ovi","Bernice","Beni","Coleby","Fatma","Josh","Lu","Regina","Jon","Karla","Lindsey","Natasha","Ryan","Sean","Shawn","Michael D","Michael W","Walter"]
chorus_frogs.each do |name|
  Student.create(name: name)
end


# 100.times do
#   Vote.create(student_id: rand(1..5), badge_id: rand(1..20), vote_value: [-1,1].sample)
# end

80.times do
  Badge.create(student_id: rand(1..18), text:Faker::Company.bs)
end

# Badge.all.each do |badge|
#   badge.update_attribute(:vote_total, badge.calculate_vote_total)
# end
