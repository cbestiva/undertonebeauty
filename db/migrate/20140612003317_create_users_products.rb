class CreateUsersProducts < ActiveRecord::Migration
  def change
    create_table :users_products do |t|
      t.belongs_to :user, index: true
      t.belongs_to :product, index: true

      t.timestamps
    end
  end
end
