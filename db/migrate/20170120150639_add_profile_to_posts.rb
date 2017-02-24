class AddProfileToPosts < ActiveRecord::Migration
  def change
  	add_column :posts, :profile, :text
  end
end
