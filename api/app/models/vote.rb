class Vote < ActiveRecord::Base
  belongs_to :badge
  belongs_to :student

  # validate :vote_is_not_new

  # def vote_is_not_new
  #   if self.user && self.badge
  # end

end
