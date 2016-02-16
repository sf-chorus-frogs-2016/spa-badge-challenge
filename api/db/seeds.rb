require 'faker'

10.times do
  Student.create(name: ['Fatma Ocal', 'Sean', 'Beni', 'John', 'Bernice', 'Ovi'].sample)
end

5.times do
  Post.create(content: Faker::Lorem.sentence(1),
              student_id: (rand(10)+2),
              vote_id: (rand(10)+2))
end

10.times do
  Vote.create(vote_type: [-1, 1].sample,
              student_id: (rand(15)+2),
              post_id: (rand(5)+2))
end
