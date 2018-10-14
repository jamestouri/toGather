class Join_Group < ApplicationRecord
  validates :user_id, uniqueness: {scope: :group_id}

  belongs_to :user

  belongs_to :group

end
