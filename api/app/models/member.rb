class Member < ActiveRecord::Base
  has_many :badges
  validates :name, presence: true
end
