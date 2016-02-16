class Student < ActiveRecord::Base
  has_many :posts
  has_many :votes

  validates :name, presence: true, uniqueness: true
end
