class Event < ApplicationRecord
  validates :title, :location, :body, :date_time, presence: true

  belongs_to :group
  belongs_to :user
  has_one_attached :image

end
