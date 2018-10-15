class Api::JoinGroupsController < ApplicationController
  def create
    @join_group = Join_Group.new(join_group_params)
    if @join_group.save
      render "api/join_groups/show", status: 200
    else
      render json: @join_group.errors.full_messages, status: 404
    end

  end

  def destroy

  end

  private
  def join_group_params
    params.require(:join_group).permit(:group_id, :user_id)
  end
end
