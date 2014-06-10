class CreateSkintones < ActiveRecord::Migration
  def change
    create_table :skintones do |t|
      t.string :color

      t.timestamps
    end
  end
end
