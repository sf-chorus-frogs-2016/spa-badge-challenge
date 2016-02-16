class Student < ActiveRecord::Base
  has_many :votes
  has_many :badges
  # has_many :voted_badges, through: :votes, source: :badge
end
