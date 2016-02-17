class Badge < ActiveRecord::Base
  belongs_to :student
  # has_many :votes

  # def calculate_vote_total
  #   votes = self.votes
  #   total = 0
  #   votes.each do |vote|
  #     total += vote.vote_value
  #   end
  #   return total
  # end

end
