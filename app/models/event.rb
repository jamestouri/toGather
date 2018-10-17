class Event < ApplicationRecord
  validates :title, :location, :body, :date_time, presence: true

  belongs_to :group
  belongs_to :user
  has_one_attached :image

  has_many :rsvps,
  foreign_key: :event_id,
  class_name: :Rsvp

end
