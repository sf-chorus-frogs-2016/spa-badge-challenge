class Badge < ActiveRecord::Base
  belongs_to :member
  has_many :votes

  validates :description, presence: true
end
