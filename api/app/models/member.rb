class Member < ActiveRecord::Base
  belongs_to :cohort
  has_many :badges

  validates :first_name, :last_name, presence: true
end
