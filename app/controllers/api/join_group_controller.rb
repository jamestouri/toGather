class Api::JoinGroupController < ApplicationController

  def create
    @join_group = Join_Group.create(join_group_params)
  end

  def destroy

  end

  private
  def join_group_params
    params.require(:join_group).permit(:group_id, :user_id)
  end
end
