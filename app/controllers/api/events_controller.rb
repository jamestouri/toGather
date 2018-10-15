class Api::EventsController < ApplicationController

  def create

  end

  def index

  end

  def show

  end

  def destroy

  end

  def update

  end

  private
  def event_params
    params.require(:event).permit(:title, :location, :body, :date_time, :image)
  end
end
