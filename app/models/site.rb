class Site < ActiveRecord::Base
  has_many :users
  has_many :products
  
  def to_param
    username
  end
end
