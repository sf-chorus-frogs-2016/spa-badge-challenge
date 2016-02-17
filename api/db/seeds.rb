# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Cohort.create(name: 'Chorus Frogs', year: 2016)

Member.create(cohort_id: 1, first_name: 'Shawn', last_name: 'Spears')

Badge.create(member_id: 1, description: 'Most likely to hang out with Natasha')
