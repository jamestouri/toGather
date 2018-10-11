class Api::GroupsController < ApplicationController

  before_action only: [:create]
  def create
    @group = Group.new(group_params)
    @group.user_id = current_user.id
    if @group.save
      render :show
    else
      render json: ["Sorry, there was a problem"], status: 422
    end
  end

  def index

  end

  def show

  end

  def destroy

  end

  private

  def group_params
    params.require(:group).permit(:title, :location,
      :about, :category, :user_id)
  end
end
