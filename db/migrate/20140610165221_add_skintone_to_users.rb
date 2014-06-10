class AddSkintoneToUsers < ActiveRecord::Migration
  def change
    add_column :users, :skintone, :string
  end
end
