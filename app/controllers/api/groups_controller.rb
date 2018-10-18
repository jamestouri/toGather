class Api::GroupsController < ApplicationController

  before_action only: [:create]
  def create
    @group = Group.new(group_params)
    if @group.save
      render :show
    else
      render json: ["Sorry, there was a problem"], status: 422
    end
  end

  def index
    @groups = Group.all
    render :index
  end

  def show
    @group = Group.find(params[:id])
  end

  def destroy
    @group = Group.find(params[:id])
    if @group.destroy
      render :show
    else
      render @group.errors.full_messages, status: 404
    end
  end

  def update
    @group = Group.find(params[:id])

    if @group.update(group_params)
      render :show
    else
      render json: @group.errors.full_messages, status: 422
    end
  end
  
  private

  def group_params
    params.require(:group).permit(:title, :location,
      :about, :category, :user_id, :image)
  end
end
