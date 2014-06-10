class CreateEyecolors < ActiveRecord::Migration
  def change
    create_table :eyecolors do |t|
      t.string :color

      t.timestamps
    end
  end
end
