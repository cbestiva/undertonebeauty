class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  belongs_to :skintone
  belongs_to :eyecolor
  has_many :products
  # has_many :users_products
  # has_many :products, through: :users_products
  mount_uploader :avatar, AvatarUploader

  def to_param
    username
  end
end
