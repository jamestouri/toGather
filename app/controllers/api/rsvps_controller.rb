class Api::RsvpsController < ApplicationController

  def create
    @rsvp = Rsvp.new(@rsvp_params)
    if @rsvp.save
      render :show
    end
  end

  def show
    @rsvp = Rsvp.find_by({user_id: current_user.id, event_id: params[:id]})
  end

  def index
    @rsvps = Rsvp.all

  end

  def destroy

  end

  private
  def rsvp_params
    params.require(:rsvp).permit(:user_id, :event_id)
  end
end
