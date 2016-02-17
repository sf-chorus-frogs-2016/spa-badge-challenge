require 'faker'

10.times do |student|
  Student.create(name: ['Fatma Ocal', 'Sean', 'Beni', 'John', 'Bernice', 'Ovi'].sample)
end

students = Student.all

5.times do
  students.each do |student|
    student.badges.create(body: Faker::Lorem.sentence(1))
    end
  end


10.times do
  students.each do |student|
    student.badges.each do |badge|
      badge.votes.create(vote_type: [-1, 1].sample)
    end
  end
end
