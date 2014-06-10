class AddSkintoneToUsers < ActiveRecord::Migration
  def change
    add_reference :users, :skintone, index: true
  end
end
