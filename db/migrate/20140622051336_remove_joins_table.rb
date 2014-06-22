class RemoveJoinsTable < ActiveRecord::Migration
  def change
    drop_table :users_products
  end
end
