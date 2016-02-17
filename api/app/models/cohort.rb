class Cohort < ActiveRecord::Base
  has_many :members

  validates :name, :year, presence: true
  # validates_length_of :year, minimum: 2013, message: "DBC didn't exist!"
end
