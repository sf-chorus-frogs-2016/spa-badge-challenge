class Student < ActiveRecord::Base
  has_many :badges
  has_many :votes
  # through badges?
  validates :name, uniqueness: true, presence: true

end
