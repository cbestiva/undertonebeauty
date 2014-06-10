class AddEyecolorToUsers < ActiveRecord::Migration
  def change
    add_reference :users, :eyecolor, index: true
  end
end
