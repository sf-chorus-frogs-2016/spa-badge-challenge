class Badge < ActiveRecord::Base
  belongs_to :person

  # def count_votes
  #   if upvote
  #     :vote += 1
  #   else
  #     :vote -= 1
  #   end
  # end

end
