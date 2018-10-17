class Api::JoinGroupsController < ApplicationController
  def create
    @join_group = Join_Group.new(join_group_params)
    if @join_group.save!
      render "api/join_groups/show", status: 200
    else
      render json: @join_group.errors.full_messages, status: 404
    end
  end

  def index
    @join_groups = Join_Group.all
  end

  def destroy

  end

  def show
    @join_group = Join_Group.find_by({user_id: current_user.id, group_id: params[:id]})

    render :show
  end

  private
  def join_group_params
    params.require(:join_group).permit(:group_id, :user_id)
  end
end
