class User < ApplicationRecord

  attr_reader :password
  validates :email, :password_digest, :session_token, :first_name, :last_name, presence: true
  validates :password, length: {minimum: 6, allow_nil: true};

  after_initialize :ensure_session_token

  has_many :groups,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :Group

  has_one_attached :image


  has_many :join_groups,
  foreign_key: :user_id,
  class_name: :Join_Group

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if user && user.is_password?(password)
      return user
    else
      return nil
    end
  end

  def is_password?(pw)
    BCrypt::Password.new(self.password_digest).is_password?(pw)
  end

  def password=(pw)
    @password = pw
    self.password_digest = BCrypt::Password.create(pw)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save!
    self.session_token
  end

end
