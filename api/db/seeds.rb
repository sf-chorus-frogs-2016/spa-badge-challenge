# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Student.create(name: "Anne")
Student.create(name: "Derek")
Student.create(name: "Hunter")
Student.create(name: "Jen")
Student.create(name: "Julian")
Student.create(name: "Sarah")
Student.create(name: "Shambhavi")
Student.create(name: "Walker")

Badge.create(text: "test1", student_id: 1)
Badge.create(text: "test2", student_id: 2)
Badge.create(text: "test3", student_id: 3)
Badge.create(text: "test1", student_id: 4)
Badge.create(text: "test2", student_id: 5)
Badge.create(text: "test3", student_id: 6)
Badge.create(text: "test1", student_id: 7)
Badge.create(text: "test2", student_id: 8)
Badge.create(text: "test3", student_id: 3)
Badge.create(text: "test1", student_id: 1)
Badge.create(text: "test2", student_id: 2)
Badge.create(text: "test3", student_id: 3)
