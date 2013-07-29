class Item < ActiveRecord::Base
  attr_accessible :description, :eta, :name, :user_id

  belongs_to :user
end
