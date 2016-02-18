class BadgesController < ApplicationController

  def create
  	badge = Badge.new(body: params[:content], votes: 0, person_id: params[:person_id])
  	badge.save
  	@person = Person.find(params[:person_id])
  	render json: badge
  end

  def update
  end

end
