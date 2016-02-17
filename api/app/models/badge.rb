class Badge < ActiveRecord::Base
  belongs_to :player
  validates :title, presence: true

  def upvote
    self.points += 1
  end

  def downvote
    self.points -= 1
  end
end


