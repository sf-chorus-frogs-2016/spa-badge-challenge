class Post < ActiveRecord::Base
  belongs_to :student
  has_many :votes

  validates :content, presence: true

  def total_vote
    total = 0
    self.votes.each do |vote|
      total += vote.vote_type
    end
    total
  end
end
