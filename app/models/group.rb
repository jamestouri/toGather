class Group < ApplicationRecord
  validates :title, :location, :about, :category, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  has_one_attached :image

  has_many :join_groups,
  foreign_key: :group_id,
  class_name: :Join_Group
  
end
