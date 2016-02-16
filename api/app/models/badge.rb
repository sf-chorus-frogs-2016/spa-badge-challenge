class Badge < ActiveRecord::Base
  belongs_to :student
  has_many :votes

  validates :body, presence: true

  def total_score
    total = 0
    self.votes.each do |vote|
      total += vote.vote_type
    end
    total
  end
end
