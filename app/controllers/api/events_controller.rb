class Api::EventsController < ApplicationController

  def create
    @event = Event.new(event_params)
    if @event.save!
      render :show
    else
      render json: ["Sorry, there was a problem"], status: 422
    end
  end

  def index
    @events = Event.all
    render :real_index
  end

  def show
    @event = Event.find(params[:id])
    render :show
  end

  def destroy

  end

  def update

  end

  private
  def event_params
    params.require(:event).permit(:title, :location, :body, :date_time, :image, :user_id, :group_id)
  end
end
