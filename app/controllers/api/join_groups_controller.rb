class Api::JoinGroupsController < ApplicationController
  def create
    @join_group = Join_Group.create!(join_groups_params)

  end

  def destroy
    
  end

  private
  def join_groups_params
    params.require(:join_group).permit(:user_id, :group_id)
  end
end
